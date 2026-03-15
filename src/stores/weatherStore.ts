import { defineStore } from 'pinia';
import { fetchWeather, fetchForecast } from '../services/weatherService';

export const useWeatherStore = defineStore('weather', {
  state: () => ({
    city: '',
    weather: null,
    forecast: [],
    metric: true,
    loading: false,
    error: '',
  }),

  actions: {
    async load(city: string) {
      try {
        this.loading = true;
        this.error = '';
        this.city = city;

        const units = this.metric ? 'metric' : 'imperial';

        this.weather = await fetchWeather(city, units);
        const forecastData = await fetchForecast(city, units);

        this.forecast = forecastData.list.slice(0, 7);
      } catch (e) {
        const message = e instanceof Error ? e.message : 'Unknown error';
        this.error = message || 'Failed to load weather';
      } finally {
        this.loading = false;
      }
    },

    async toggleUnits() {
      if (this.city) {
        await this.load(this.city);
      }
    },
  },
});
