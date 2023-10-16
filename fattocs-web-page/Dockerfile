FROM node:18.18-alpine AS build

#BUILD
WORKDIR /dist/src/app
RUN npm cache clean --force
COPY . .
RUN npm install
RUN npm run build --prod


#PUBLISH 
FROM nginx:latest AS ngix
COPY --from=build /dist/src/app/dist/fattocs-web-page /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf
EXPOSE 80
