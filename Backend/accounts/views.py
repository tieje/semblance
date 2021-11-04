# This isn't needed because it deals with the template loader
# from django.shortcuts import render
# from rest_framework import generics # uncomment this out if you're not going to use viewsets
# from .models import CustomUser
# look at serializers.py for justification
from django.contrib.auth import get_user_model # the user model is CustomUser() for example
from .serializers import UserSerializer, ArchetypeSerializer
from rest_framework import viewsets
from .models import Archetype


# basic views using rest_framework generics
user_model = get_user_model()

# this is the viewset that we'll be using
# I might run into a problem where users could potentially edit information on
# other user's accounts. I'll need to test this.
class AccountViewSet(viewsets.ModelViewSet):
    queryset = user_model.objects.all()
    serializer_class = UserSerializer


class ArchetypeViewSet(viewsets.ModelViewSet):
    queryset = Archetype.objects.all()
    serializer_class = ArchetypeSerializer


# Below is what it would look like if we did not use viewsets
"""
class AccountList(generic.ListAPIView):
    queryset = user_model.objects.all()
    serializer_class = UserSerializer

class AccountDetail(generic.RetreiveAPIView):
    queryset = user_model.objects.all()
    serializer_class = UserSerializer
"""
