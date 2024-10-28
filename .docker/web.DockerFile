FROM node:slim

WORKDIR /app

COPY /front_end/package*.json ./

WORKDIR /app