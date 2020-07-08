# Description

Simple demo app showcasing data fetched from https://rickandmortyapi.com, using vanilla JS, HTML and CSS.

# Preparation

## Docker

`docker-compose up --build`

## Manual installation
`npm install && node src/app.js`

If you don't have port 8080 open, you have to change it in `src/app.js` or in `docker-compose.yml` and `Dockerfile`, depending on your installation method.

# Usage

Navigate to `localhost:8080/character` on your browser of choice.

# Caveats
Sometimes the app crashes due to inconsistencies in data returned from the API.