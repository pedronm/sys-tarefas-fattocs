FROM postgres:latest

EXPOSE 5432

ENV POSTGRES_USER "admin"
ENV POSTGRES_PASSWORD "admin"

ADD ./tables /docker-entrypoint-initdb.d

#VOLUME [ "./:/docker-entrypoint-initdb.d/" ]