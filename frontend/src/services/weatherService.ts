import axios from "axios";
import type { WeatherForecast } from "../models/weatherForecast";

const BASE_URL = "https://api.weatherapi.com/v1";
const WEATHER_API_KEY = "";

export async function getCurrentWeather(city: string): Promise<WeatherForecast> {
  const result = await axios.get(`${BASE_URL}/current.json`, {
      params: {
        key: WEATHER_API_KEY,
        q: city,
        lang: "en",
      },
  });

  const forecast: WeatherForecast = {
    location: {
      city: result.data.location.name,
      region: result.data.location.region,
      country: result.data.location.country,
      lat: result.data.location.lat,
      lon: result.data.location.lon,
    },
    climate: {
      temp_c: result.data.current.temp_c,
      condition: result.data.current.condition.text,
      wind_kph: result.data.current.wind_kph,
      humidity: result.data.current.humidity,
      cloud: result.data.current.cloud,
      feelslike_c: result.data.current.feelslike_c,
      uv: result.data.current.uv,
    }
  }

  return forecast;
}
