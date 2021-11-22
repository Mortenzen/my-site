FROM node:14 as build
COPY . /tmp/app
WORKDIR /tmp/app
RUN npm i 
RUN npm  run build
CMD [ "npm", "start" ]