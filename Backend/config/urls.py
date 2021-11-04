"""config URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from allauth.account.views import ConfirmEmailView
from django.contrib import admin
from django.urls import path, include, re_path
from drf_yasg import openapi # used for schema
from drf_yasg.views import get_schema_view # used in schema
from graphene_django.views import GraphQLView
from rest_framework import permissions # used in schema

schema_view = get_schema_view( # used in swagger
   openapi.Info(
      title="Semblance API",
      default_version="v1",
      description="Copied from a sample that teaches DRF",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="toj320@gmail.com"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   permission_classes=(permissions.AllowAny,),
)

urlpatterns = [
    # This URL is so common that it's a common target for attacks. Change it before production to increase security:
    path('admin/', admin.site.urls),
    # call it v1 so that v2 can be made simultaneously if need be
    path('api/v1/', include('accounts.urls')),
    path('api-auth/', include('rest_framework.urls')), # this creates a small downward arrow that allows us to login as other users from the admin account quickly
    path('api/v1/accounts/', include('allauth.urls')), # needed for allauth email confirmation template
    path('api/v1/dj-rest-auth/', include('dj_rest_auth.urls')), # handles login, logout, and authentication endpoints
    path('api/v1/dj-rest-auth/registration/', include('dj_rest_auth.registration.urls')), # handles registration endpoints
    re_path(r'^account-confirm-email/(?P<key>[-:\w]+)/$', ConfirmEmailView.as_view(), name="account_confirm_email"),
    path('swagger/', schema_view.with_ui( # swagger schema
      'swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui( # schema documentation
        'redoc', cache_timeout=0), name='schema-redoc'),
    path('graphql', GraphQLView.as_view(graphiql=True)),
]
# https://github.com/django/django/blob/master/django/urls/conf.py
