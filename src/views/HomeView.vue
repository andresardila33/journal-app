<template>
  <v-container>
    <h1 class="text-center">Vue 3 aplication</h1>
  </v-container>
  <v-container class="d-flex justify-center">
    <div>
      <v-btn @click="goToDaybook" color="primary" class="ma-2">Primary</v-btn>
      <v-btn @click="goToDaybook" color="secondary" class="ma-2"
        >Secondary</v-btn
      >
      <v-btn @click="goToDaybook" color="success" class="ma-2">Success</v-btn>
    </div>
  </v-container>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const goToDaybook = () => router.push({ name: "no-entry" });
</script>
