<template>
  <Header v-if="$route.meta.login" />
  <div class="app">
    <main class="container" v-if="$route.meta.login">
      <RouterView />
    </main>
    <RouterView v-else />
    <transition name="fade" class="app">
      <BoxConfirm  v-if="list.length > 0" :item="list" />
    </transition>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import { RouterView } from 'vue-router'
import Header from '@/components/header/index.vue'
import BoxConfirm from '@/components/boxConfirm/index.vue'

const store = useStore()

const list = computed(() => {
  return store.getters.getListCheck
})

const tokenLocal = localStorage.getItem('Token')

if (tokenLocal) {
  store.commit('setToken', tokenLocal)
}
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
