<template>
  <div class="entry-list-container">
    <div>
      <v-responsive max-width="300" class="mt-2">
        <v-text-field
          hide-details="auto"
          placeholder="Buscar entradas"
          type="text"
        ></v-text-field>
      </v-responsive>
    </div>
    <div class="entry-scroll-area mt-3">
      <Entry v-for="item in 100" :key="item"></Entry>
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const Entry = defineAsyncComponent(() => import("./EntryV.vue"));
</script>

<style scoped>
.entry-list-container {
  border-right: 1px solid #2c3e50;
  height: calc(100vh - 56px);
}

.entry-scroll-area {
  height: calc(100vh - 65px);
  overflow: scroll;
}
</style>
