<template>
  <div class="header">
    <div class="containerHeader">
      <h1>Lista de Presentes de Casamento do Evanilson e Laura</h1>
      <Burguer @changeMenu="changeMenuValue" v-if="tokenAuth" />
    </div>
  </div>
  <Menu v-if="tokenAuth" v-model:open="valueCheckedMenu" @close="changeMenuValue" />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Burguer from './burguer/index.vue'
import Menu from './menu/index.vue'
import { useStore } from 'vuex'

const store = useStore()
let valueCheckedMenu = ref(false)

const changeMenuValue = (value: boolean) => {
  valueCheckedMenu.value = value
}

const tokenAuth = computed(() => {
  return store.getters.getToken
})
</script>

<style scoped>
.header {
  height: 70px;
  background-color: var(--main);
  display: flex;
  align-items: center;
}

.containerHeader {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 20px;
}

.header h1 {
  font-size: 1.2rem;
  color: var(--colorWhite);
  text-align: center;
}
</style>
