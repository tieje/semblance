# pull base image
FROM node:14.16.0
# define working directory
WORKDIR /frontend
# run update on the image
COPY . .
RUN apt-get update
#updata npm
RUN npm install -g npm
#run build
RUN npm install -g serve
# copy dependencies
COPY package.json package-lock.json /frontend/
# install dependencies from package.json
RUN npm install
# create build
RUN npm run build
# add `/app/node_modules/.bin` to $PATH
ENV PATH /frontend/node_modules/.bin:$PATH
# Not sure if exposing is going to help at all
EXPOSE 3000
EXPOSE 5001
