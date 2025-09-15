# Weather Forecast with AI

This project was generated with [REACT](https://react.dev/) version 19.1.1. 

You can search for the real-time weather forecast of any country or city and ask the AI ​​a question about the city or country.

## Development server backend

- 1º Use `cd backend` and run `npm install` to install dependencies.
- 2º Create a file `.env` and add `GROQ_API_KEY=` with your KEY. You can get an API KEY accessing [GROQ](https://groq.com/).
- 3º Run `node --watch ./server.js`. The app will automatically reload if you change any source files.

## Development server frontend

- 1º Use command `cd frontend` and run `npm install` to install dependencies.
- 2º Run `npm run dev` and navigate to `http://localhost:5173/`. The app will automatically reload if you change any source files.

## Features 

- Search real-time weather forecast using [WEATHER API](https://www.weatherapi.com/).
- Ask questions about cities or countries using AI (LLaMA 3.1 8B Instant).
- Responsive interface for mobile and desktop.