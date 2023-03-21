<template>
  <Instructions />
  <Box />
  <main>
    <section class="headerList">
      <h2></h2>
      <!-- <button @click="teste">
        <FilterSvg color="#85B6FF" />
      </button> -->
    </section>
    <v-container v-if="!newValueList" class="d-flex flex-column align-center justify-center">
      <h2 class="textNotFound">Carregando lista de presentes</h2>
      <spring-spinner :animation-duration="3000" :size="60" color="#ffff" />
    </v-container>
    <div v-else v-for="(item, index) in newValueList">
      <List :category="index" :list="item" />
    </div>
    <div>
      <List category="Presente que vamos ganhar" :list="newValueListActive" :giftSelect="true" />
    </div>
  </main>
</template>

<script setup lang="ts">
import Box from '@/components/box/index.vue'
import Instructions from '@/components/instructions/index.vue'
import FilterSvg from '@/components/icones/filter.vue'
import List from '@/components/list/index.vue'
import { SpringSpinner } from 'epic-spinners'
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
const toast = useToast()

const newValueList = ref<TypeObjs[]>([])
const newValueListActive = ref<TypeObjs[]>([])

onMounted(() => {
  listRequest()
})

const listRequest = async () => {
  const req = store.dispatch('getList')
  try {
    const { data } = await req
    convert(data)
  } catch (error) {
    toast.success('Ops algo deu errado, entre mais tarde', {
      timeout: 2000,
    })
    console.log(error)
  }
}


const convert = (dataItem: any) => {
  const lista = dataItem.reduce((obj: any, { category, name, active, id }: TypeObjs) => {
    if (!obj[category]) obj[category] = []
    if (!active) {
      obj[category].push({ name, category, id, active })
    }
    return obj
  }, {})
  newValueList.value = lista

  const listaActive = dataItem.filter((item: any) => item.active == true)
  newValueListActive.value = listaActive
}

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
.textNotFound {
  text-align: center;
  font-size: 1.2rem;
  margin: 20px 0;
  /* font-size: 1rem; */
  color: #71a9dd;
}
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
