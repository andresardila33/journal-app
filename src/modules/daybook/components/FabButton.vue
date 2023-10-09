<template>
  <v-btn class="f-button ma-2" color="primary" :icon="icon" size="x-large">
  </v-btn>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    default: "mdi-cloud-upload",
  },
});
</script>

<style scoped>
.f-button {
  bottom: 20px;
  position: fixed;
  right: 20px;
}
</style>
