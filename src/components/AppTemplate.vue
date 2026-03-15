<template>
  <q-page class="q-pa-md">
    <div class="row q-gutter-md q-pa-md">
      <q-input filled v-model="city" label="Search city" @keyup.enter="search" />

      <q-btn label="Search" color="primary" @click="search" />

      <q-btn icon="refresh" @click="refresh" />

      <q-toggle
        v-model="store.metric"
        :label="store.metric ? 'Metric' : 'Imperial'"
        @update:model-value="store.toggleUnits()"
      />
    </div>

    <q-spinner v-if="store.loading" />
    <div v-if="store.error">
      {{ store.error }}
    </div>
    <div class="row q-gutter-md q-pa-md">
      <div class="col">
        <weather-card :weather="store.weather" :metric="store.metric" />
      </div>
    </div>
    <forecast-list :forecast="store.forecast" />
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useWeatherStore } from '../stores/weatherStore';
import WeatherCard from '../components/WeatherCard.vue';
import ForecastList from '../components/ForecastList.vue';

const store = useWeatherStore();
const city = ref('');

async function search() {
  await store.load(city.value);
}

async function refresh() {
  if (store.city) {
    await store.load(store.city);
  }
}
</script>
