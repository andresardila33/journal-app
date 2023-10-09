<template>
  <div
    @click="$router.push({ name: 'entry', params: { id: 10 } })"
    class="entry-container mb-3 p-2"
  >
    <div class="entry-title d-flex">
      <span class="text-green-darken-1 font-weight-bold">15</span>
      <span class="mx-1">Julio</span>
      <span class="mx-1 font-weight-light">2021, Jueves</span>
    </div>
    <div class="entry-description">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem mollitia ea
        eos expedita numquam autem odit sint placeat modi, neque itaque quia
        deserunt, asperiores enim accusantium doloribus cum! Odit, accusantium!
      </p>
    </div>
  </div>
</template>

<script setup></script>

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
