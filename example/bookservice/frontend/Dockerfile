FROM node:12.8.1-buster-slim AS builder

ADD . /code
WORKDIR /code
RUN npm install && npm run build

CMD REACT_APP_BACKEND_ADDRESS=$(echo "$BOOKSERVICE_SERVICE_SERVICE_HOST:$BOOKSERVICE_SERVICE_PORT_8080_TCP_PORT") npm start

# scrapping because DNS issues which I should have predicted.
# remember kids, sleep is important...
# FROM nginx:1.16-alpine

# COPY --from=builder code/build /usr/share/nginx/html

