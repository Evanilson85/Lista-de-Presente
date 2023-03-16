<template>
  <Header />
  {{ list.length }}
  <main class="container">
    <Instructions />
    <Box />
    <RouterView />
  </main>
  <transition name="fade">
    <BoxConfirm v-if="list.length > 0" />
  </transition>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'

import { RouterLink, RouterView } from 'vue-router'
import Header from '@/components/header/index.vue'
import Box from '@/components/box/index.vue'
import Instructions from '@/components/instructions/index.vue'
import BoxConfirm from '@/components/boxConfirm/index.vue'
import { ref } from 'vue'

const visibilityCP = ref(false)

const store = useStore()

const list = computed(() => {
  return store.getters.getListCheck
})
</script>

<style scoped>
.container {
  width: 90%;
  margin: 20px auto;
  /* background-color: var(--colorWhite); */
}

.fade-enter-active,
.fade-leave-active {
  /* opacity: 0; */
  transition: opacity 0.5s ease;
}
.fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
  opacity: 0;
  /* transition: opacity 0s ease; */
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
