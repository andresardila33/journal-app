<template>
  <div class="d-flex justify-center align-center">
    <h1 class="text-center">No hay nada seleccionado</h1>
  </div>
  <Fab />
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const Fab = defineAsyncComponent(() =>
  import("@/modules/daybook/components/FabButton.vue")
);
</script>

<style scoped>
div {
  height: 100%;
}
</style>
