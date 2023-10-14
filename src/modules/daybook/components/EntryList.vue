<template>
  <div class="entry-list-container">
    <div>
      <v-responsive max-width="300" class="mt-2">
        <v-text-field
          hide-details="auto"
          placeholder="Buscar entradas"
          type="text"
          v-model="termino"
        ></v-text-field>
      </v-responsive>
    </div>
    <div class="entry-scroll-area mt-3">
      <Entry
        v-for="entry in entriesByTerm"
        :key="entry.id"
        :entry="entry"
      ></Entry>
    </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent, ref, computed } from "vue";
import { useDaybookStore } from "@/modules/daybook/store/daybook.js";
// import { storeToRefs } from "pinia";

const Entry = defineAsyncComponent(() => import("./EntryV.vue"));
const store = useDaybookStore();
// const { entries } = storeToRefs(store);
const { getEntriesByTerm } = store;

const termino = ref("");

const entriesByTerm = computed(() => {
  return getEntriesByTerm(termino.value);
});
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
