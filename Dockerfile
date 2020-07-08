FROM node:latest

COPY package*.json /app/
WORKDIR /app
RUN npm install

COPY ./src /app/src/

EXPOSE 8080

CMD ["node", "/app/src/app.js"]