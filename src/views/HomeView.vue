<template>
  <main>
    <section class="headerList">
      <h2></h2>
      <button>
        <filterSvg color="#85B6FF" />
      </button>
    </section>
    <div>
      <list />
      <list />
      <list />
      <list />
    </div>
  </main>
</template>

<script setup lang="ts">
import filterSvg from '@/components/icones/filter.vue'
import list from '@/components/list/index.vue'
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
