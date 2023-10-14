<template>
  <template v-if="entry2">
    <div class="entry-title d-flex justify-space-between mt-2 p-2">
      <div>
        <span class="text-green-darken-1 font-weight-bold text-h4">{{
          day
        }}</span>
        <span class="mx-1 text-h5">{{ month }}</span>
        <span class="mx-1 font-weight-light text-h5">{{ yearDay }}</span>
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
      <textarea
        v-model="entry2.text"
        placeholder="¿Que sucedio hoy?"
      ></textarea>
    </div>

    <img src="@/assets/fondo.jpg" alt="fondo" />
  </template>

  <Fab icon="mdi-upload" />
</template>

<script setup>
import { defineAsyncComponent, onMounted, ref, computed, watch } from "vue";
import { useDaybookStore } from "@/modules/daybook/store/daybook.js";
import { useRouter } from "vue-router";
import getDayMonthYear from "@/modules/daybook/helpers/getDayMonthYear.js";

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const router = useRouter();
const entry2 = ref(null);

const store = useDaybookStore();
const { getEntryById } = store;

const loadEntry = () => {
  const entry = getEntryById(props.id);
  if (!entry) return router.push({ name: "no-entry" });
  entry2.value = entry;
};

const day = computed(() => {
  const { day } = getDayMonthYear(entry2.value.date);
  return day;
});
const month = computed(() => {
  const { month } = getDayMonthYear(entry2.value.date);
  return month;
});
const yearDay = computed(() => {
  const { yearDay } = getDayMonthYear(entry2.value.date);
  return yearDay;
});

onMounted(() => {
  loadEntry();
});

watch(
  () => props.id,
  () => {
    loadEntry();
  },
  { deep: true }
);

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
