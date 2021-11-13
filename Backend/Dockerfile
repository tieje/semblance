# Pull base image
# I'm going to use the python version that anaconda is currently using on my machine
FROM python:3.8.5 AS base

# Setup GeoDjango
# https://stackoverflow.com/questions/60403731/geodjango-and-postgis-setup-in-docker
RUN apt-get update &&\
    apt-get install -y binutils libproj-dev gdal-bin python-gdal python3-gdal

# Set work directory
# https://www.geeksforgeeks.org/docker-workdir-instruction/
# the workdirectory creates the directory in the process and changes directory to this directory
WORKDIR /backend

# Install dependencies
# Copying the pipenv files to the backend directory. I'm assuming that when we set the WORKDIR, the directory is changed to backend.
COPY Pipfile Pipfile.lock /backend/
# The --system flag on pipenv install means install the packages using the pip manager directly on to the parent system.
# This allows us to run our application directly on the system instead of through a virtual environment.
RUN /usr/local/bin/python -m pip install --upgrade pip\
    && pip install pipenv\
    && pipenv install --system

# Copy Project
# This copies everything from the current directory, to the backend directory on the system.
# The current directory will be backend on my local computer.
COPY . /backend
ENTRYPOINT ["sh", "/backend/entrypoint.sh"]
