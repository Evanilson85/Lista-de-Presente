<template>
  <main>
    <section class="headerList">
      <h2></h2>
      <!-- <button @click="teste">
        <FilterSvg color="#85B6FF" />
      </button> -->
    </section>
    <div v-for="(item, index) in newValueList">
      <List :category="index" :list="item" />
    </div>
    <div>
      <List category="Presente que vamos ganhar" :list="newValueListActive" :giftSelect="true" />
    </div>
  </main>
</template>

<script setup lang="ts">
import FilterSvg from '@/components/icones/filter.vue'
import List from '@/components/list/index.vue'
import { onMounted, computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useToast } from 'vue-toastification'

interface TypeObjs {
  category: string
  name: string
  active: boolean
  id: number | string
}

const store = useStore()

const list = computed(() => {
  return store.getters.getAllList
})

const newValueList = ref<TypeObjs[]>([])
const newValueListActive = ref<TypeObjs[]>([])

onMounted(() => {
  const lista = list.value.reduce((obj: any, { category, name, active, id }: TypeObjs) => {
    if (!obj[category]) obj[category] = []
    if (!active) {
      obj[category].push({ name, category, id, active })
    }
    return obj
  }, {})
  newValueList.value = lista

  const listaActive = list.value.filter((item: any) => item.active == true)
  newValueListActive.value = listaActive
})

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

.tes {
  background-color: red;
  margin: 20px;
}
</style>
