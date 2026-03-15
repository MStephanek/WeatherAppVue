# Weather App by Mirek Stephanek

Vue 3 + Quasar + TypeScript weather application using OpenWeather API.

## Features

- City search
- Metric / Imperial unit toggle
- Refresh weather
- full day forecast in 2 houre steps
- Loading and error states
- Pinia state management
- Clean architecture (services + store)
- Docker container
- GitHub Actions CI

## Setup

Install dependencies

npm install

Run dev server

npm run dev

## Docker

docker compose up --build

## API Key

Create a key at:
https://openweathermap.org/api

Add it to:

src/services/weatherService.ts
