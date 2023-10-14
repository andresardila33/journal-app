<template>
  <div
    @click="$router.push({ name: 'entry', params: { id: entry.id } })"
    class="entry-container mb-3 p-2"
  >
    <div class="entry-title d-flex">
      <span class="text-green-darken-1 font-weight-bold">{{ day }}</span>
      <span class="mx-1">{{ month }}</span>
      <span class="mx-1 font-weight-light">{{ yearDay }}</span>
    </div>
    <div class="entry-description">
      {{ entry.text }}
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const months = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
const days = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

const props = defineProps({
  entry: {
    type: Object,
    required: true,
  },
});

const day = computed(() => {
  const date = new Date(props.entry.date);
  return date.getDate();
});
const month = computed(() => {
  const date = new Date(props.entry.date);
  return months[date.getMonth()];
});
const yearDay = computed(() => {
  const date = new Date(props.entry.date);
  return `${date.getFullYear()}, ${days[date.getDay()]}`;
});
</script>

<style scoped>
.entry-container {
  cursor: pointer;
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;
}

.entry-container:hover {
  background-color: rgb(242, 238, 238);
  transition: 0.2s all ease-in;
}

.entry-description {
  font-size: 12px;
}
</style>
