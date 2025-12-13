FROM node:22.17-alpine

RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev

ARG NODE_ENV=production

WORKDIR /opt/

COPY package.json package-lock.json ./

RUN ["npm", "install"]

ENV PATH /opt/node_modules/.bin:$PATH

WORKDIR /opt/app

COPY . .

RUN ["npm", "run", "build"]

EXPOSE 1337

CMD ["npm", "start"]