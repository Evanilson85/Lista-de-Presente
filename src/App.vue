<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/header/index.vue'
import Box from '@/components/box/index.vue'
import Instructions from '@/components/instructions/index.vue'
</script>

<template>
  <Header />
  <main class="container">
    <Instructions />
    <Box />
    <RouterView />
  </main>
</template>

<style scoped>
.container {
  width: 90%;
  margin: 20px auto;
  /* background-color: var(--colorWhite); */
}
</style>
