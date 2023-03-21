<template>
  <div>
    <v-container class="px-0 d-flex justify-end">
      <v-btn @click="deslogar" color="red-lighten-1"> Sair </v-btn>
    </v-container>
    <Create />
    <h2>Presentes criados</h2>
    <v-container class="d-flex justify-center mx-auto" v-if="newValueList.length < 1">
      <spring-spinner :animation-duration="2000" :size="60" color="#ffff" />
    </v-container>
    <!-- <spring-spinner  :animation-duration="2000" :size="60" color="#ffff" /> -->
    <div v-for="(item, index) in newValueList" v-else>
      <ListGift :category="index" :list="item" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Create from '@/components/create/createItem.vue'
import ListGift from '@/components/create/listGift.vue'
import { SpringSpinner } from 'epic-spinners'
import { onMounted, computed, ref } from 'vue'
import { useStore } from 'vuex'
import { useToast } from 'vue-toastification'
import router from '@/router'

interface TypeObjs {
  category: string
  name: string
  active: boolean
  id: number | string
}

const store = useStore()
const newValueList = ref<TypeObjs[]>([])
// const list = computed(() => {
//   return store.getters.getAllList
// })

onMounted(() => {
  listRequest()
})

const listRequest = async () => {
  const req = store.dispatch('getList')
  try {
    const { data } = await req
    convert(data)
  } catch (error) {
    console.log(error)
  }
}

const convert = (item: any) => {
  const lista = item.reduce((obj: any, { category, name, active, id }: TypeObjs) => {
    if (!obj[category]) obj[category] = []
    obj[category].push({ name, category, id, active })

    return obj
  }, {})
  newValueList.value = lista
}

const deslogar = () => {
  localStorage.clear()
  store.commit('setToken', '')
  router.push('/')
}
</script>

<style scoped>
h2 {
  font-size: 1rem;
  color: var(--main);
  margin: 20px auto;
}

.con {
  background: #fff;
  border-radius: 5px;
}
</style>
