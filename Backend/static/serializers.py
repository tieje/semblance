from rest_framework_gis.serializers import GeoFeatureModelSerializer
from rest_framework import serializers
from .models import Archetype
# We could use the above, but the below, ensures that we use the user model that's in use in settings
from django.contrib.auth import get_user_model

class UserSerializer(GeoFeatureModelSerializer):
    # The GeoFeatureModelSerializer is a subclass of ModelSerializer, so... it should work as intended
    class Meta:
        # id is never really specified so I guess the serializer takes care of that automatically
        # https://www.django-rest-framework.org/tutorial/1-serialization/
        # the ModelSerializer actually copies from models directly. Otherwise, the serializer will be as long as the model
        model = get_user_model()
        fields = ('id', 'username', 'is_staff', 'is_active', 'date_joined', 'identify_as', 'search_for', 'gender')
        geo_field = 'location'

class ArchetypeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Archetype
        fields = "__all__"


"""
The above serializer wasn't working for location data. I'll have to ask Thomas
about that. Meanwhile, the serializer below works.

-- Justin

"""
import json
from django.contrib.gis.db import models
import graphene
from graphene_django.converter import convert_django_field


class GeoJSON(graphene.Scalar):

    @classmethod
    def serialize(cls, value):
        return json.loads(value.geojson)


@convert_django_field.register(models.GeometryField)
def convert_field_to_geojson(field, registry=None):
    return graphene.Field(
        GeoJSON,
        description=field.help_text,
        required=not field.null)
