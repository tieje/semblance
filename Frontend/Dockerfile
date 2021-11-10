# pull base image
FROM node:14.16.0 AS build
# define working directory
WORKDIR /frontend
# run update on the image
RUN apt-get update
#updata npm
RUN npm install -g npm
#run build
RUN npm install -g serve
# copy dependencies
COPY package.json package-lock.json /frontend/
# install dependencies from package.json
RUN npm install
COPY . .
# create build
RUN npm run build
# add `/app/node_modules/.bin` to $PATH
ENV PATH /frontend/node_modules/.bin:$PATH

# production environment
FROM nginx:latest
COPY --from=build /frontend/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
