<template>
  <div class="header">
    <div class="containerHeader">
      <h1>Lista de Presente dos Noivos</h1>

      <Burguer @changeMenu="changeMenuValue" />
    </div>
  </div>
  <Menu :open="valueCheckedMenu" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Burguer from './burguer/index.vue'
import Menu from './menu/index.vue'

let valueCheckedMenu = ref(false)

const changeMenuValue = (value: boolean) => {
  valueCheckedMenu.value = value
}
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
}
</style>
