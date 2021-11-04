"""
Defines the GraphQL Schema using Graphene.
"""
from accounts.models import Archetype
from django.contrib.auth import get_user_model
from django.contrib.gis.measure import Distance
import graphene
from graphene_django import DjangoObjectType, DjangoListField
from graphql import GraphQLError


# Current user model is CustomUser. See 'accounts.models'.
user_model = get_user_model()

class AccountType(DjangoObjectType):
    """A user account."""
    class Meta:
        model = user_model
        fields = (
            'id',
            'date_joined',
            'gender',
            'identify_as',
            'is_staff',
            'is_active',
            'location',
            'search_for',
            'username',
        )


class ArchetypeType(DjangoObjectType):
    class Meta:
        model = Archetype
        fields = '__all__'


# This class is more approprate for the gender argument of the accounts field in
# the schema than graphene.String, but it's not working and I don't have time
# right now to figure it out. Basically, when you use this class, the resolver
# gets the Enum.name (e.g. "NONBINARY") instead of the value (e.g. "non-binary")
#
# --Justin
# GendersEnum = graphene.Enum.from_enum(user_model.Genders)

class Query(graphene.ObjectType):
    """
    Defines which fields are available on a root query and their respective
    arguments.
    """

    accounts = DjangoListField(
        AccountType,
        # Arguments available:
        archetypes=graphene.List(graphene.String),
        id=graphene.ID(),
        is_staff=graphene.Boolean(),
        distance=graphene.Int(
            description='Maximum distance from arg `location` in miles'
        ),
        # This is a more appropriate type, see the related comment above:
        # gender=GendersEnum(),
        # Use graphene.String for now:
        gender=graphene.String(),
        # `location` might be better typed as follows:
        # location=graphene.List(graphene.Float)
        location=graphene.String(
            description='The location from which to measure `distance`. \
                A point in WKT format: "POINT(longitude latitude)" \
                e.g.: "POINT(50 -50)"'
        )
    )

    archetypes = DjangoListField(
        ArchetypeType,
        # Arguments available:
        name=graphene.String(),
        synergies=graphene.List(graphene.String)
    )

    def resolve_accounts(
        root, info, archetypes=None, id=None, is_staff=None, gender=None,
        distance=None, location=None):
        """
        Determines which user accounts are being requested.
        And processes arguments to GraphQL queries and returns a queryset.

        The prototype could take **kwargs, but then the client user does not get
        an error message if they pass an invalid argument. Listing valid argume-
        nts in the prototype is more verbose, but enables feedback.
        """
        query_set = user_model.objects.all()

        # Make sure values are not None; Falsy values are valid but without
        # `is not None` the block will not execute
        if archetypes is not None:
            query_set = query_set.filter(
                identify_as__in=Archetype.objects.filter(
                    name__in=archetypes
                ).values('name')
            )

        if id is not None:
            query_set = query_set.filter(id=id)

        if is_staff is not None:
            query_set = query_set.filter(is_staff=is_staff)

        if gender is not None:
            query_set = query_set.filter(gender=gender)

        if distance is not None and location is not None:
            query_set = query_set.filter(
                location__dwithin=(location, Distance(mi=distance))
            )

        # It is an error to provide only distance or location but not both
        if (distance is not None) ^ (location is not None):
            raise GraphQLError("Provide both distance and location")

        return query_set

    def resolve_archetypes(root, info, name=None, synergies=None):
        """
        Determines which archetypes are being requested.

        Processes arguments and returns a queryset.
        """
        query_set = Archetype.objects.all()

        if name is not None:
            query_set = query_set.filter(name__icontains=name)

        if synergies is not None:
            raise(NotImplementedError("Search by synergies is not yet implementedff"))
            query_set = query_set.filter()

        return query_set


schema = graphene.Schema(query=Query)
