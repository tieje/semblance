"""Register your models here."""
from django.contrib import admin
from .models import CustomUser, Archetype


models = [
    CustomUser,
    Archetype,
    ]

admin.site.register(models)
