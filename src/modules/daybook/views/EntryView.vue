<template>
  <div class="entry-title d-flex justify-space-between mt-2 p-2">
    <div>
      <span class="text-green-darken-1 font-weight-bold text-h4">15</span>
      <span class="mx-1 text-h5">Julio</span>
      <span class="mx-1 font-weight-light text-h5">2021, Jueves</span>
    </div>
    <div>
      <v-btn color="red-darken-1" class="mx-2"
        >Borrar
        <v-icon end icon="mdi-delete"></v-icon>
      </v-btn>
      <v-btn color="primary"
        >Subir foto
        <v-icon end icon="mdi-upload"></v-icon>
      </v-btn>
    </div>
  </div>

  <hr />

  <div class="d-flex flex-column px-3 h-75">
    <textarea placeholder="¿Que sucedio hoy?"></textarea>
  </div>

  <Fab icon="mdi-upload" />

  <img src="@/assets/fondo.jpg" alt="fondo" />
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const Fab = defineAsyncComponent(() =>
  import("@/modules/daybook/components/FabButton.vue")
);
</script>

<style scoped>
textarea {
  font-size: 20px;
  border: none;
  height: 100%;
}

textarea:focus {
  outline: none;
}

img {
  width: 200px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0px 5px 10px rgb(from #000000 r g b);
}
</style>
