# yorha
The final group project for foundations.
1. `git clone https://github.com/tieje/yorha.git`
2. `git checkout staging`
    - This command checks out the staging branch that already exists. You won't be able to see it the first time around with the `git branch` command, unless you use the `--remote` or `-a` option.
3. `git branch`
    - This is to show you that you're on the staging branch now.
4. Read the <b>Technical Documentation</b> section below

If you have any questions, email Thomas Francis at <toj320@gmail.com>

------------

This Ends the <b>README</b> section

------------


# Technical Documentation

Began 7/13/2021

Updated 9/22/2021

Notes:
- 9/22/2021: Major transition combining `README.md` and `Technical_Documentation.txt` into this single file.

Welcome to the technical documentation of project Semblance.

# Table of Contents

- [Devops Introduction](#devops-introduction)
    - [General Idea for Feedback Loop](#general-idea-for-feedback-loop)
    - [Version Control: Git](#version-control:-git)
        - [Updating your Branch with the Staging Branch](#updating-your-branch-with-the-staging-branch)
        - [Pull Request Process When a Feature is Completed](#pull-request-process-when-a-feature-is-completed)
    - [Docker](#Docker)
    - [Tasks for Docker](#tasks-for-docker)
    - [Tasks for Getting Started on the Frontend](#tasks-for-getting-started-on-the-frontend)

- Backend
    - [Backend Introduction](#backend-introduction)
    - [Building the Backend Core](#building-the-backend-core)
    - [Backend Features to Build and How to Build Them](#backend-features-to-build-and-how-to-build-them)
        - [Complete Data Models](#complete-data-models)
        - Algorithm for returning search results data
        - Returning randomly returning text-based adventures
        - Setting email Verification, possibly with Sendgrid
        - Security
- Frontend
    - [Frontend Introduction](#frontend-introduction)
    - [Building the Frontend Core](#building-the-frontend-core)
    - [Features to Build and How to Build them](#features-to-build-and-how-to-build-them)
        - [Google Maps Location Marker](#google-maps-location-marker)
        - [Building the Production Version of the Frontend](#building-the-production-version-of-the-frontend)
        - [Limited ChatApp Core](#limited-chatapp-core)

        - Results Box

# Devops Introduction

PLEASE READ THIS

Everyone needs to read the DevOps section. Frontend and Backend are optional to your specialization.

## General Idea for Feedback Loop

The feedback loop is being able to see your changes on the intended device.

Apparently, you can use the Chrome DevTools Device Simulation

Right-click > Inspect > upper-left corner, click on toggle device to change the viewport for mobile.

Google's mobile-friendly test tool
https://search.google.com/test/mobile-friendly

It's possible to use Android Studio to set up a phone simulation but that's up to you.
Phone simulation uses a ton of processing power and is therefore slow to start, even for high-end computers.

### Version Control: Git

https://www.robinwieruch.de/git-team-workflow

There are two main branches: staging and main.
There are many smaller feature branches.
These smaller feature branches will always merge with the staging branch.
Features include small changes and bug fixes.
It is only when a product is ready to be released, that the staging branch will merge with the main branch.

main (The final release or the actual product)
staging (the most updated version of the application)
features (temporary, meant to be merged with staging)

1. Either create a new feature branch or check out an available branch

    - `git checkout -b <branch_name>`
        - When you're creating a new feature branch, please prefix it with "feat-". For example,
            - `feat-<your_feature_branch_name>`
            - `feat-my_feet`
            - `feat-technical-docs`

    - `git checkout <branch_name>`

    - `git fetch"` stuff below

        - If you want to see the progress of a feature, but don't want to deal with the merge conflicts, use "git fetch".
        https://www.atlassian.com/git/tutorials/syncing/git-fetch
        git fetch is used for code review since it is isolated from local development work.
        If you want on this new branch, you'll need to pull the latest changes with:
            - `git pull --rebase origin <branch_name>`
                - This puts your commits on top of the remote branch's commits.
            - If there is a merge conflict, resolve then:
                - `git add .`
                    - `git rebase --continue`
                        - Or worst case scenario if nothing works
                            - `git rebase abort`


2. Do work on the branch. If you want to start over from scratch, simply delete the feature branch locally.
    - Local deletion - to free memory on your machine
        - `git branch -d <branch_name>`
    - Remote Deletion - only if whatever you wrote will never be useful
        - `git push origin -d <branch_name>`

3. What we already know:
    - `git add .`
    - `git commit -m <commit_message>`
    - `git push origin <branch_name>`

    tip: "git add -u" can be used to move all changed files to the staging branch, excluding new files.

4. Repeat step 3 until you're ready to merge the feature with the staging branching.

5. When you're completed with a feature, submit a pull request (PR) to merge your feature into the staging branch:
    - `git checkout staging`
    - `git pull origin staging`
    - `git merge --no-ff <branch_name>`
        - --no-ff means "no fast-forward".
        - Fast-forwarding occurs when instead of a merge commit, git just moves the branch pointer to the incoming commit.
        This usually occurs when performing a git pull without any local changes.
        https://stackoverflow.com/questions/9069061/what-is-the-difference-between-git-merge-and-git-merge-no-ff
    - `git push origin staging`


### Updating your Branch with the Staging Branch

- Someone merged their feature branch to the staging branch and you'd like to keep my feature branch updated with the new staging branch.
    - Solution:
        - `git checkout <your_feature_branch>`
        - `git rebase staging`
            - This merges all your changes from your feature branch on top of the staging branch.
    - `git push origin <your_feature_branch>`
        - If pushing does not work, use the force. The force push, that is:
            - `git push -f origin <branch_name>`
            - Other people's pushes on the same would get overwritten if you did not pull them.

### Pull Request Process When a Feature is Completed

For a general guide read [this](https://www.cloudsavvyit.com/12533/what-are-git-pull-requests-and-how-do-you-use-them/).

The steps below are based off of [this](https://yangsu.github.io/pull-request-tutorial/).

1. When you're done working on a feature, submit a pull request.
2. Someone else will probably take care of it after code review.

-----------
## Docker

TL:DR;

- Use `docker-compose up -d` to run the container.
- Use `docker-compose exec [image_name] [your installation command]` whenever you need to install a new package/module.
    - For example:
        - `docker-compose exec backend sudo pipenv install ipython`

- Use `docker-compose down` when you want to destroy your container such as when you install a new package OR
when you're done for the day
- Use `docker-compose up -d --build` after you install a new package so it exists in your container.


### Brief Introduction to Docker

https://www.youtube.com/watch?v=Gjnup-PuquQ

### Install Docker

[Apple Silicon](https://docs.docker.com/docker-for-mac/apple-silicon/)

[Windows](https://docs.docker.com/docker-for-windows/install/)

[Docker Windows works for Windows 10 Home version now. It used to be that Docker only worded for Windows Pro version worked.](https://www.docker.com/blog/docker-desktop-for-windows-home-is-here/)

### General Docker Steps

1. [Pull or create a Docker image.](https://hub.docker.com/search?q=&type=image&image_filter=official) Usually you'll want to pull an existing image.

2. Once you have an image, you could use a docker run command to run that image.
- Template:
    - `docker run --name=[image_name] -d [base image]:[tag of the version]`
        - For example, running a mysql server:
            - `docker run --name=yorha -d mysql/mysql-server:latest`

3. `Dockerfile` and `docker-compose.yml` files. Think of them as the "Makefiles" of docker

    a. The `Dockerfile` (no extension) is a collection `docker image` commands that are used to build the image.

    b. The `docker-compose.yml` file is a collection of `docker run` commands that are used to run images in containers.

    There might be multiple Dockerfiles, such as one for the backend and one for the frontend.
    But there only ever needs to be one `docker-compose.yml` file to run both of these images.

    When the `Dockerfile` and `docker-compose.yml` files are present,
    you can use the `docker-compose up -d` command to build the images and run these images in separate containers.

#### Flags

    -d means to run this container detached. Detached as in, so the container will run on its on terminal and not from the one you're currently using.
    --build means to rebuild the image. You must rebuild the image after installing new packages to maintain changes.
You can install new packages with the command:
- `docker-compose exec [image_name] [command to install package]`


To shutdown your containers, such as whenever you want to rebuild your images, run:
- `docker-compose down`

    All data stored on these images will be lost.
    Therefore, in order to save your data across images,
    you must save it locally on your machine by defining a volume location in the docker-compose.yml file.

    ### If you're using windows, you'll obviously want to change this storage path.

We need a volume within the db service and a volume outside of the db service so that this data is available to multiple services. For example, what if we wanted a container to backup the data of the volume.

### Tasks for Docker

- define your volume location in the docker-compose.yml file. This can be anywhere... reasonable.

## Tasks for Getting Started on the Frontend

- install dependencies:
    - `cd Frontend`
    - `yarn install`

# Backend

## Backend Introduction

Please read DevOps before reading this section.

In order to set up the backend for most users:

1. `docker-compose up -d --build`

2. `sudo docker-compose exec backend python manage.py migrate`
    - If you have an existing db, run the following command first before running the command above:
    - `sudo docker-compose exec backend python manage.py makemigrations`

3. `docker-compose exec backend python manage.py createsuperuser`

4. Check [admin site:](http://127.0.0.1:8000/admin)
    - http://127.0.0.1:8000/admin

### Building the Backend Core

Realistically, you could copy and paste the Django settings from the original Semblance repo if you're stuck or need help.
https://github.com/tieje/Semblance

+ create the docker-compose.yml file in the project-level directory
    + copy and paste the parts of the docker-compose.yml file that you think you'll need.
        - You don't need everything right now.

+ set up virtual python environment with pipenv
    + pip3 install pipenv
    + cd backend
    - Set up python version 3.8.5
         - you have two choices:
            - set up pyenv
                https://github.com/pyenv/pyenv
                For Windows (may not. Did not work for Justin)
                https://github.com/pyenv-win/pyenv-win
                - use python 3.8.5 with pyenv
            OR
            - download 3.8.5 on your computer. Pipenv will automatically scan your computer for this version and use it for the virtual environment.
    - Make sure you're in the Backend folder still
    - pipenv --python 3.8.5 install django==3.1.6
        - this was the latest release of django at the time
    - pipenv shell
        - this command enters the virtual environment.
        - you can confirm by checking the version of python that you're using.

- set up normal working django default page
    - pipenv shell
    - django-admin startproject config .
    - python manage.py runserver

- add postgresql database
    - overwrite the database settings in django settings.py
        https://github.com/tieje/Semblance/blob/main/backend/config/settings.py
    -  you'll want to run this in the project-level directory
        docker-compose up -d
    - install psycopg2-binary from the docker command line
        - docker-compose exec [options] [-e KEY=VAL...] SERVICE COMMAND [ARGS...]
        - sudo docker-compose exec backend pipenv install psycopg2-binary==2.8.5
        - docker-compose down
        - docker-compose up -d --build
        - docker-compose exec backend python manage.py createsuperuser
        - site admin check
            http://127.0.0.1:8000/admin

- No need. Handled by the Dockerfile
- get geodjango working
    https://docs.djangoproject.com/en/3.1/ref/contrib/gis/install/
    https://stackoverflow.com/questions/60403731/geodjango-and-postgis-setup-in-docker
    - installed special libraries needed for Geodjango
        - binutils
        - libproj-dev
        - gdal-bin
        - python-gdal
        - python3-gdal
        # for your convenience:
        docker-compose exec backend pipenv install binutils libproj-dev gdal-bin python-gdal python3-gdal
    - rebuild the image
        - docker-compose down
        - docker-compose up -d --build

- install graphene on django
    https://docs.graphene-python.org/projects/django/en/latest/
    - docker-compose exec backend pipenv install graphene-django
    - add graphene-django to installed apps in settings
        https://github.com/graphql-python/graphene-django/
    - rebuild image
        - docker-compose down
        - docker-compose up -d --build

- create django MVP accounts app
    - docker-compose exec backend python manage.py startapp accounts
    - create MVP models
        - extend custom users model to include location with geodjango
        # only location is added to the custom user model for now. Characters will be added later.
    - install accounts app to settings
    - register model in admin.py file
    - update AUTH_USER_MODEL so that the CustomUser model is used instead of the User model
    - sudo docker-compose exec backend python manage.py makemigrations accounts
        - next replace the engine of the database:
            - https://stackoverflow.com/questions/12538510/getting-databaseoperations-object-has-no-attribute-geo-db-type-error-when-do
        - create the superuser again:
            docker-compose exec backend python manage.py createsuperuser
    - sudo docker-compose exec backend python manage.py migrate
    - test login and check postgis data
    - Add an example user with django admin

- set up the rest_framework
    - referring to the django rest framework book, chapter 3 and beyond
    - docker-compose exec backend pipenv install djangorestframework
    - add 'rest_framework' to installed apps on settings
    - insert REST_FRAMEWORK in settings and define default permissions
        - think about implementing 'rest_framework.permissions.IsAuthenticated'
            - 'rest_framework.permissions.IsAuthenticated'
            - makes it so that only authenticated users can edit information on the API
        - define 'DEFAULT_AUTHENTICATION_CLASSES' pg. 108
            - 'rest_framework.authentication.TokenAuthentication'
                - refer to pg 106 for security improvements for JWTs
            - add 'rest_framework.authtoken' to installed apps
                - I'll do this at the very end to decrease the amount of hard migrations
    - add account's API url to config folder's urls.py file
    - create an app-level serializers.py file
        - edit the serializers.py file such that it can handle geojson output
        - docker-compose exec backend pipenv install djangorestframework-gis
        - add 'rest_framework_gis' to installed apps
    +-update views.py file to create a generic view for looking at data
        +-create generic view and comment this out to use as a backup
        - create viewset for AccountsDetail and AccountsList class
    - update accounts' app-level urls.py file
        - create routers for viewsets
    - use CORS to require specific HTTP Headers for http requests
        - docker-compose exec backend pipenv install django-cors-headers
        - add 'corsheaders' to installed apps in settings
        - add 'corsheaders.middleware.CorsMiddleware' to MIDDLEWARE
        - define CORS_ORIGIN_WHITELIST in settings
            - we define ports 3000 and 8000 because that is what we'll be using for react and django respectively
    - create basic login, logout, and authentication endpoints:
        - docker-compose exec backend pipenv install dj-rest-auth
        - add 'dj_rest_auth' to installed apps
        - configure urls.py file in config folder for dj-rest-auth pg. 112
    - set up user-registration
        - docker-compose exec backend pipenv install django-allauth
        - check pg 117 for additions to Installed apps in settings
        - define EMAIL_BACKEND in settings
        - define SITE_ID in settings
        - set up registration urls in config/urls.pyk
    - docker-compose exec backend python manage.py migrate
    - rebuild image

- set up graphQL
    - docker-compose exec backend pipenv install graphene-django
    - add to installed apps:
        https://docs.graphene-python.org/projects/django/en/latest/installation/
    - docker-compose exec backend pipenv install graphene_gis
    - add to installed apps:
        https://github.com/EverWinter23/graphene-gis
    - set up a graphQL url endpoint
    - define GRAPHENE in settings
    - docker-compose exec backend pipenv install graphene
    - docker-compose exec backend pipenv install django-graphiql
    - set up graphQL schema in project-level directory
        https://docs.graphene-python.org/projects/django/en/latest/installation/
        https://docs.graphene-python.org/projects/django/en/latest/tutorial-plain/
    - determine how to ensure that geojson objects are used by graphql

- Implement schema and documentation for REST API
    - docker-compose exec backend pipenv install pyyaml
    - docker-compose exec backend pipenv install uritemplate
    - docker-compose exec backend pipenv install drf-yasg
    - docker-compose down
        - docker-compose up -d --build
    - docker-compose exec backend python manage.py generateschema > openapi-schema.yml
    - add to installed_apps in settings
    - set up URLs

If you would like to go into the actual container and check out the file structure, use the following commands:

- test image and dockerfiles
    - cd Backend
    - sudo docker build -t backend:1 .
    - sudo docker run -it --name semblance -p 8000:8000 backend:1 bash

## Backend Features to Build and How to Build Them

### Complete Data Models

10/5/2021

I'll need to complete the data models before I can update the state management system to Apollo.



# Frontend

## Frontend Introduction

Please read DevOps before reading this section.

The following steps are in order using the plus/minus format.
"-" means that this task is incomplete
"+" means that this task is complete
"#" means that this line is a tip on how to complete the task

The steps in the next section will be used to build the Backend core.
Building the core means having something that generally works and can have features added to it later.

## Building the Frontend Core

+ install [node.js](#https://nodejs.org/en/) on your computer

+ cd frontend

+ install typescript on the docker container
    docker-compose exec frontend npm install -g typescript

+ npx create-react-app frontend --template typescript
https://create-react-app.dev/docs/adding-typescript/

+ test with yarn start
    yarn start
    + end the run Ctrl + C

+ replace the project-level docker-compose.yml file with the docker-compose.yml in the Docker-Compose_file folder

+ install Apollo on the docker container to generate a package-lock.json file
    npm install @apollo/client graphql

+ run containers and check if it works
    docker-compose up -d --build

+ test by going to http://localhost:3000/

+ install styled components
   npm install styled-components@^5.2.1 @types/styled-components@^5.1.9

+ rebuild image
    docker-compose down
    docker-compose up -d --build

## Frontend Features to Build and How to Build Them

### Google Maps Location Marker

CONCLUSION

This is the final API that I'll be using. It's 91% written in TS and is probably what should be used going forward.
https://github.com/JustFly1984/react-google-maps-api
https://react-google-maps-api-docs.netlify.app/#section-introduction


9/1/2021
If you're reading this from the future, the CONCLUSION topic above is where I decide which API to use.

BELOW ARE MY NOTES, from this line to next date, to how I came to the above conclusion

------------------

Marker Clustering
https://developers.google.com/maps/documentation/javascript/marker-clustering
We'll need this for determining density of users.


The Google Map React component is the result of writing over the Google Maps API
https://www.npmjs.com/package/google-map-react

@types/google.maps installation
https://www.npmjs.com/package/@types/google.maps
https://developers.google.com/maps/documentation/javascript/using-typescript
- I'll need to look up what -D does for npm installation

I'll need to analyze the following TS code.
- Why is there a Loader?
- What does "new" keyword do when declaring a new google.maps.Map()


npm install @googlemaps/js-api-loader

import { Loader } from "@googlemaps/js-api-loader"
const loader = new Loader({
  apiKey: "YOUR_API_KEY",
  version: "weekly",
  ...additionalOptions,
});

loader.load().then(() => {
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
});

function initMap() {}

The method above is using typescript without react.
It simply uses script tags to add the google map content from an HTML source.
Therefore, the above is not really what we're looking for.

What we're probably looking for is the following:
https://medium.com/@allynak/how-to-use-google-map-api-in-react-app-edb59f64ac9d
This is likely the same guide that I used the first time around actually.

As much as the above is useful, perhaps even more useful will be an entire library written for Google Maps in React+TS
https://doc.googlemap-react.com/
The above library is unmaintained and likely dead. I remember stumbling on another library that was still alive.
https://tomchentw.github.io/react-google-maps/#introduction
I believe the above link was the one, but even this one looks like its dead.
https://github.com/tomchentw/react-google-maps
The last commit was four years ago.
The above libraries referenced the following link as the source:
https://github.com/google-map-react/google-map-react
Although the last commit was two days ago, it's been about a year since it's been updated.
Also there is no indication of TS support.
It appears that fullstack react company has their own google maps react tutorial
https://github.com/fullstackreact/google-maps-react

There does not seem to be any TS library support for Google Maps React.
tomchentw actually switched to a different project by working directly on the react-google-map-api package.
https://react-google-maps-api-docs.netlify.app/
https://github.com/JustFly1984/react-google-maps-api
The latest commit was last month.
I appears that this is the one. It's written with typescript and uses types defined here:
https://www.npmjs.com/package/@types/google.maps

The documentation is either greatly simplified or under-developed.

--------------------

9/2/2021

Notes for how to use the google maps package:
The usecallback() function is used in the documentation, not sure why:
https://dmitripavlutin.com/dont-overuse-react-usecallback/

9/9/21

Notes for how to use the google maps package:
https://react-google-maps-api-docs.netlify.app/

I think I understand enough to actually use the Google Map package.
I'll use the useJsApiLoader hook to load the googlemaps script.
Next, copy the onLoad function and see if I actually need React.useCallback.

The first objective will simply be getting the map to appear on screen.
I'll hook up the functionality later when the results component is finished.

This isn't hard. I might be working on the chat functionality earlier than I thought, huh.

Well perhaps rather than waiting for the results, I'll just create my own data in state.

Which means... it's gonna be hard after all... :(

1. Load a basic google map onto the site.
2. Hard-code state for the google map.
3. Add inverse flow in the form of actions.

Hold off on connecting the Results cluster to the map. That will a feature for another day.

9/13/2021

Running into a problem where 'google is not defined'

Might be solved with the following suggestion
https://stackoverflow.com/questions/60986424/typescript-react-google-maps-google-does-not-exist
https://developers.google.com/maps/documentation/javascript/using-typescript
+ installing types for google
    - `npm i -D @types/google.maps`

This seems to work. google is now defined as a namespace.

### Building the Production Version of the Frontend

10/19/2021

+ run yarn build in frontend folder
- create additional production.yml file and docker command that installs nginx and configures nginx
    Command
docker-compose -f docker-compose.yml -f production.yml up -d --build

I'm going to need to run the custom production command from the jelastic ssh gate.
https://docs.jelastic.com/ssh-access/?utm_source=blog-docker-engine-part2
Rather than using the ssh gate, I'll just use the built-in webssh cuz I don't really want to deal with ssh keys right now.
The webssh is down. It looks like I'll need to do it the hard way.

It looks like I'll get remote connection available when I get the paid version.
It looks like I should be able to run a custom docker-compose command if I really need, which I will be doing.

Worst case scenario, I'll be hosting the site from laptop.

I'm not going to use the docker override file name because I won't want to override it every time.

https://medium.com/softonic-eng/docker-compose-from-development-to-production-88000124a57c

This is somewhat helpful.

https://ashwin9798.medium.com/nginx-with-docker-and-node-js-a-beginners-guide-434fe1216b6b

This guide is very helpful. I think it answers a lot of my questions. The only problem is learning how to use nginx properly. I should spend the rest of today and the rest of tomorrow figuring out nginx.

https://docs.docker.com/compose/extends/#different-environments
According to this, docker-compose.override.yml is supposed to be the dev configuration that is used by default when docker-compose up is normally run.

We don't actually need a production.yml since if specify
`docker-compose -f docker-compose.yml`
This command will not run the docker-compose.override.yml file as would normally occur.

There might need to be two different files.
- running the application locally using commands like npm start or manage.py runserver
- running the production build of the application from nginx and gunicorn containers

There is a reason why its suggested to have three files though. Not all commands are going to be same.

docker-compose up will read the normal docker-compose.yml and the docker-compose.override.yml files. For the production command above, docker-compose will read the base file and then the production file for the production build.

I'm going to need to get good at docker again...
+ created the docker-compose.override.yml file
    + it works as intended
- create the production.yml file
    - https://ashwin9798.medium.com/nginx-with-docker-and-node-js-a-beginners-guide-434fe1216b6b
    - According to the guide, I should create an entirely separate docker container that handles nginx functions, which makes sense.

Right now, I just need to learn how to use nginx. The other concepts are easy enough. Even configuring the docker compose for production is easy enough.

from this search, I'm looking up nginx stuff
https://duckduckgo.com/?q=nginx+tutorial&ia=web

I'm going to need to do quite a bit of reading on nginx. I'll probably even install it locally.

~~ nginx grind ~~



### Limited ChatApp Core

10/5/2021 - Morning

The goal of this chat application is to have a limited chat application that will definitely:

- allow users to communicate through simple text and emotes
- limit the number of messages available to each person to 20 messages with a 128 character limit per message.
- present prompts for each person to answer, each person's response will only show when the other person responds. Both responses will be revealed at the same time.
- five messages prior to the 20 message limit, we'll recommend exchanging contact info and a cafe or place to meet up close to the midpoint of your location markers.

The user should be able to interact with the chat app in the following steps:

1. User presses Search button
2. Search results appear in search results box.
    - The results prioritizes in this order:
        - users that are online
        - archetype matches
        - proximity
        - gender settings
3. User clicks on a username result.
4. Chat Opens with a prompt for both users.
5. Users provides an answer. It's likely that the other user will not respond immediately.
6. User clicks on a different username result.
7. User repeats steps 5 and 6 until they have sent messages to 10 people. Messaging 10 different users is the max daily limit.

usereducer should be able to handle an array of 20 messages

The chat app is dependent on the data retrieved by the results though.

I'll need to clarify what is going to happen... This also means using Apollo Appropriately, which means updating user models...

I'll need to study Apollo... But Apollo is a state management system. I should have been using apollo to begin with, not the useReducer() state management system.

Since I already have a state management system, though poor as it is, I could just use the query system to update context... OR I could just build it right the first time and switch to Apollo now... Yeah. There's that, too.

It's time to transition to the Apollo client state management library instead of using useReducer(). This is gonna be big.

