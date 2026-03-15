<template>
  <q-card v-if="weather">
    <q-card-section>
      <div class="text-h6">
        {{ weather.name }}
      </div>
    </q-card-section>

    <q-card-section>
      <div>
        Temperature:
        {{ weather.main.temp }}
        {{ metric ? '°C' : '°F' }}
      </div>

      <div>
        Humidity:
        {{ weather.main.humidity }} %
      </div>

      <div>
        {{ weather.weather[0].description }}
      </div>
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
defineProps({
  weather: [Object, null],
  metric: Boolean,
});
</script>
