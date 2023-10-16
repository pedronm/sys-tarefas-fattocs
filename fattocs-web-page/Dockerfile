FROM node:latest
WORKDIR /dist/src/app   

COPY --from=build /dist/src/app/dist/fattocs-web-page /usr/share/nginx/html
COPY /nginx.conf  /etc/nginx/conf.d/default.conf

EXPOSE 80