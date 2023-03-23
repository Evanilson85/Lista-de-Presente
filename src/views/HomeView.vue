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
    <v-container v-if="show" class="d-flex flex-column align-center justify-center">
      <h2 class="textNotFound">Carregando lista de presentes</h2>
      <spring-spinner :animation-duration="3000" :size="60" color="#ffff" />
    </v-container>
    <div v-else v-for="(item, index) in newValueList">
      <List v-if="item?.length > 0 " :category="index" :list="item" />
        <!-- {{ item }} -->
    </div>
    <div>
      <List category="Presente que vamos ganhar" :list="newValueListcheck" :giftSelect="true" />
    </div>
  </main>
</template>

<script setup lang="ts">
import Box from '@/components/box/index.vue'
import Instructions from '@/components/instructions/index.vue'
import FilterSvg from '@/components/icones/filter.vue'
import List from '@/components/list/index.vue'
import { SpringSpinner } from 'epic-spinners'
import { onMounted, computed, ref, watch } from 'vue'
import { useStore } from 'vuex'
import { useToast } from 'vue-toastification'

interface TypeObjs {
  category: string
  name: string
  check: boolean
  id: number | string
}

const store = useStore()
const toast = useToast()

const newValueList = ref<TypeObjs[]>([])
const newValueListcheck = ref<TypeObjs[]>([])
const show = ref(true)
const requestFail = ref(false)
// const updatePage = store.getters.getUpadatePage

const updatePage = computed(() => {
  return store.getters.getUpadatePage
})

onMounted(() => {
  // console.log(updatePage)
  listRequest()
})

const listRequest = async () => {
  const req = store.dispatch('getList')
  try {
    const { data } = await req
    convert(data)
    show.value = false
    requestFail.value = false
  } catch (error) {
    toast.warning('Ops algo deu errado, aguarde a conexão', {
      timeout: 2000,
    })
    requestFail.value = true
    // console.log(error)
  }
}

const convert = (dataItem: any) => {
  const lista = dataItem.reduce((obj: any, { category, name, check, id }: TypeObjs) => {
    if (!obj[category]) obj[category] = []
    if (!check) {
      obj[category].push({ name, category, id, check })
    }
    return obj
  }, {})
  newValueList.value = lista

  const listacheck = dataItem.filter((item: any) => item.check == true)
  newValueListcheck.value = listacheck
}

watch(requestFail, (item) => {
  let interVal = setInterval(() => {
    if (!show.value) return
    listRequest()
  }, 3000)

  if (!item) {
    clearInterval(interVal)
  }
})

watch(updatePage, item => {
  listRequest()
})

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
