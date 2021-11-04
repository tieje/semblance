FROM nginx
COPY nginx.conf /etc/nginx/
#CMD mkdir /etc/nginx/conf.d/sites-available /etc/nginx/conf.d/sites-enabled
COPY sites-available/ /etc/nginx/conf.d/sites-available/
COPY sites-enabled/ /etc/nginx/conf.d/sites-enabled/
