# Usually the frontend would be its own image
# (a pure JavaScript app can't really use DNS entries from cluster,
# so we keep it in the same image for that reason.
FROM node:12.8.1-buster-slim AS frontend-builder

ADD frontend/. /code
WORKDIR /code
RUN npm install && npm run build


# Little quick and dirty. Could probably have another stage to avoid saving the backend code.
# Forgivable since this is only an example :P For simplicity!
FROM openjdk:8-slim

ADD . /code
WORKDIR /code

# add frontend build
COPY --from=frontend-builder /code/build/. src/main/resources/static

# build backend
RUN ./mvnw clean install

# set correct profile to work in compose and k8s cluster
ENV SPRING_PROFILES_ACTIVE=container

CMD java -jar target/book-service-0.0.1-SNAPSHOT.jar
