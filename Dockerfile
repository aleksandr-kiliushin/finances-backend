# FROM ubuntu:20.04

# ENV DEBIAN_FRONTEND noninteractive

# RUN apt-get -y update
# RUN apt-get -y install curl
# RUN curl -fsSL https://deb.nodesource.com/setup_14.x | bash -
# RUN apt-get -y install nodejs nginx nano

# COPY ./server/dist/ /var/server/dist/
# COPY ./server/node_modules/ /var/server/node_modules/

# COPY ./client/ /var/client/

# COPY ./nginx.conf /etc/nginx/nginx.conf

# EXPOSE 80

FROM node:14
WORKDIR /app
CMD ["npm", "run", "dev"]