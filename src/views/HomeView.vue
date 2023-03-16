<template>
  <main>
    <section class="headerList">
      <h2></h2>
      <button @click="teste">
        <FilterSvg color="#85B6FF" />
      </button>
    </section>
    <div>
      <List />
      <List />
      <List />
      <List />
    </div>
  </main>
</template>

<script setup lang="ts">
import FilterSvg from '@/components/icones/filter.vue'
import List from '@/components/list/index.vue'

import { useToast } from 'vue-toastification'
const teste = () => {
  const toast = useToast()

  // Use it!

  // or with options
  toast.success('My toast content', {
    timeout: 2000,
  })
}
</script>

<style scoped>
.main {
  /* background-color: var(--colorWhite); */
}

.headerList {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.headerList button {
  width: 35px;
  background-color: #ff000000;
  border: none;
}
</style>
