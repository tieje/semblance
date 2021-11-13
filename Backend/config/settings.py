"""
Django settings for config project.

Generated by 'django-admin startproject' using Django 3.1.6.

For more information on this file, see
https://docs.djangoproject.com/en/3.1/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/3.1/ref/settings/
"""
from pathlib import Path
import os


# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent

# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/3.1/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY')

# SECURITY WARNING: don't run with debug turned on in production!
#DEBUG = bool(os.environ.get('DJANGO_DEBUG', False))
DEBUG = True
ALLOWED_HOSTS = [
    '0.0.0.0',
    '127.0.0.1',
    '172.18.0.3', # yorha_default (Docker network) IP address for backend
    'backend', # Alias for 172.18.0.3
    'localhost', # Alias for 127.0.0.1, usually
    'api.localhost',
    '192.168.1.33',
    '192.168.1.35',
    'api.semblance.us',
    'semblance.us',
    ]

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.gis',
    # makes the api look nice in production
    'whitenoise.runserver_nostatic',

    # Required for graphql:
    'django.contrib.staticfiles',

    # Needed for django-allauth:
    'django.contrib.sites',

    # 3rd Party
    'rest_framework',
    'rest_framework_gis',
    # This comes with the rest framework. This generates JWT tokens on the
    # server for users:
    'rest_framework.authtoken',
    # Part of django-allauth:
    'allauth',
    'allauth.account',
    'allauth.socialaccount',
    # Controls which HTTP headers are allowed to access the API:
    'corsheaders',
    # Responsible for login, logout, and authentication endpoints:
    'dj_rest_auth',
    # Needed for django-allauth:
    'dj_rest_auth.registration',
    # Add graphene-django after importing somewhere else:
    # https://stackoverflow.com/questions/62598963/modulenotfounderror-no-module-named-graphene-django
    # graphql:
    'graphene_django',
    'graphene_gis',
    # API documentation:
    'drf_yasg',

    # Local:
    'accounts.apps.AccountsConfig',

]

GRAPHENE = {
    # Where your Graphene schema lives:
    'SCHEMA': 'config.schema.schema'
}

REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.AllowAny'
        # Only authenticated users have access to the API
        # 'rest_framework.permissions.IsAuthenticated',
    ],
    # 'DEFAULT_AUTHENTICATION_CLASSES': [
    # temporary while I figure out apollo
    # 'rest_framework.authentication.BasicAuthentication',
    # Sessions are used to power the Browsable API and the ability to log in
    # and log out of it.
    # 'rest_framework.authentication.SessionAuthentication',
    # TokenAuthentication is stored on the user's browser in the form of a
    # cookie or other data
    # 'rest_framework.authentication.TokenAuthentication',
    # ],
}

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
    # 'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'config.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            os.path.join(BASE_DIR, 'accounts', 'templates', 'allauth'),
        ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'config.wsgi.application'


# Database
# https://docs.djangoproject.com/en/3.1/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.contrib.gis.db.backends.postgis',
        'NAME': 'semblance_db',
        'USER': 'thomas',
        'PASSWORD': 'eLEO4Wo6S3ZSe5OXLFS%VK',
        'HOST': '192.168.1.35',
        'PORT': '5432',
    }
}

"""
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
"""


# Password validation
# https://docs.djangoproject.com/en/3.1/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/3.1/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_L10N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/3.1/howto/static-files/

STATIC_URL = '/static/'
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'accounts'),
]
STATIC_ROOT = os.path.join(BASE_DIR,'static')
STATICFILES_FINDERS = [
    "django.contrib.staticfiles.finders.FileSystemFinder",
    "django.contrib.staticfiles.finders.AppDirectoriesFinder",
]
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
# If you ever update static folder or static files, be sure to run the following command:
#  docker-compose exec web python manage.py collectstatic

# https://stackoverflow.com/questions/49189402/auth-user-groups-fields-e304-reverse-accessor-for-user-groups-clashes-with
AUTH_USER_MODEL = 'accounts.CustomUser'

CORS_ORIGIN_ALLOW_ALL = True

CORS_ORIGIN_WHITELIST = (
    'http://localhost:3000',
    'http://localhost:8000',
    'http://semblance.us',
    'http://api.semblance.us',
    'http://192.168.1.33:8000',
    'http://192.168.1.35:8000',
    'http://semblance_backend:8000',
    'http://192.168.1.33',
    'http://192.168.1.35',
    'http://semblance_backend',
)


# django-allauth config
# Use this to email the console instead of the SendGrid SMTP server (useful for
# testing):
# EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'

# This must be a verified single sender until the domain 'semblance.us' is
# authenticated by SendGrid. See our SendGrid account for details:
DEFAULT_FROM_EMAIL = 'info@semblance.us'

# It's possible to host multiple websites from the same django project (which is
# pretty interesting), therefore we need specify this site's ID as is required
# by django-allauth:
SITE_ID = 1

ACCOUNT_USERNAME_REQUIRED = False

ACCOUNT_AUTHENTICATION_METHOD = 'email'

ACCOUNT_EMAIL_REQUIRED = True

ACCOUNT_UNIQUE_EMAIL = True

# Django SMTP Backend settings configured for Twilio SendGrid
EMAIL_HOST = 'smtp.sendgrid.net'

EMAIL_PORT = 587

EMAIL_USE_TLS = True

EMAIL_HOST_USER = 'apikey'

# Get the API key from the Sendgrid account; ask Thomas or Justin
# Export the API to an environment variable called 'SENDGRID_API_KEY'
EMAIL_HOST_PASSWORD = os.environ.get('SENDGRID_API_KEY')
