FROM node:lts-alpine
COPY . /himawari-blog-nuxt
WORKDIR /himawari-blog-nuxt

RUN apk update && \
    apk upgrade && \
    apk add git && \
    npm install -g npm@latest nuxi nuxt3
RUN yarn install
RUN yarn nuxi build