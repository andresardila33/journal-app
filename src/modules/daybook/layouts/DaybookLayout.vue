<template>
  <Navbar />

  <div class="d-flex mt-15">
    <div class="container col-4"><EntryList /></div>
    <div class="container-2 col"><router-view /></div>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const Navbar = defineAsyncComponent(() =>
  import("@/modules/daybook/components/NavBar.vue")
);
const EntryList = defineAsyncComponent(() =>
  import("@/modules/daybook/components/EntryList.vue")
);
</script>

<style scoped>
.container {
  width: 25%;
}

.container-2 {
  width: 75%;
}
</style>
