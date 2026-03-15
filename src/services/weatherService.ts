import axios from 'axios';

const API_KEY = 'YOUR_API_KEY';
const BASE = 'https://api.openweathermap.org/data/2.5';

export async function fetchWeather(city: string, units: string) {
  const res = await axios.get(`${BASE}/weather`, {
    params: {
      q: city,
      appid: API_KEY,
      units,
    },
  });

  return res.data;
}

export async function fetchForecast(city: string, units: string) {
  const res = await axios.get(`${BASE}/forecast`, {
    params: {
      q: city,
      appid: API_KEY,
      units,
    },
  });

  return res.data;
}
