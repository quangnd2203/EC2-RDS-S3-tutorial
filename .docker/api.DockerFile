FROM node:slim

WORKDIR /app

COPY /back_end/package*.json ./

WORKDIR /app