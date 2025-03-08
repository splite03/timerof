<template>
  <Header></Header>
    <Main></Main>
</template>

<script setup>
  import Header from "./components/header/Header.vue";
  import Main from "./components/main/Main.vue";
  import { onMounted } from 'vue'
  import {useFirestore} from './hooks/useFirestore.js';
  const { initFirestore } = useFirestore();

  onMounted(async () => {
      await initFirestore();
  })
</script>

<style scoped>

</style>
