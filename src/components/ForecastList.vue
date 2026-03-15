<template>
  <div class="row q-gutter-md q-pa-md">
    <q-card v-for="item in forecast as any[]" :key="item.dt" class="col-auto">
      <q-card-section>
        <div>{{ new Date(item.dt * 1000).toLocaleTimeString('en-US', { hour: '2-digit' }) }}</div>

        <div>{{ item.main.temp }}°</div>

        <div>
          {{ item.weather[0].description }}
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
defineProps({
  forecast: Array,
});
</script>
