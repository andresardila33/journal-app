import { ref } from "vue";
import { defineStore } from "pinia";

export const useDaybookStore = defineStore("daybook", () => {
  const isLoading = ref(true);
  const entries = ref([
    {
      id: new Date().getTime(),
      date: new Date().toDateString(),
      text: "Sint culpa velit ea fugiat eiusmod ullamco aliquip laboris fugiat duis magna exercitation occaecat qui. Exercitation Lorem nulla laborum occaecat adipisicing tempor. Dolor proident consequat eiusmod eiusmod velit deserunt voluptate duis nulla ex.",
      picture: null,
    },
    {
      id: new Date().getTime() + 1000,
      date: new Date().toDateString(),
      text: "Enim laborum eu nulla cillum deserunt adipisicing Lorem. Ipsum et velit irure proident adipisicing sunt ex. Labore ut excepteur non exercitation nisi.",
      picture: null,
    },
    {
      id: new Date().getTime() + 2000,
      date: new Date().toDateString(),
      text: "Laboris in id ex fugiat magna veniam culpa ullamco. In ut amet non et labore. Laboris proident sit incididunt enim pariatur deserunt ex voluptate minim sit elit deserunt. Est excepteur cillum laboris ea exercitation est pariatur non quis eiusmod consequat consequat voluptate nostrud.",
      picture: null,
    },
  ]);
  // const getEntriesByTerm = computed(() => daybook.value * 2);
  // const getEntryById = computed(() => daybook.value * 2);
  // const loadEntries = async () => {
  //   daybook.value++;
  // };
  // const updateEntry = async () => {
  //   daybook.value++;
  // };
  // const createEntry = async () => {
  //   daybook.value++;
  // };

  return {
    isLoading,
    entries,
    // getEntriesByTerm,
    // getEntryById,
    // loadEntries,
    // updateEntry,
    // createEntry,
  };
});
