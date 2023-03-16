<template>
  <div class="containerList">
    <div class="dflex">
      <hr />
      <h2>Eletrodomestico</h2>
      <hr />
    </div>
    <section>
      <div
        v-for="{ id, name, active } in list"
        :key="id"
        :class="active ? 'selectGift success divSucess' : 'selectGift'"
        @click="selectGift(id)"
      >
        <p>{{ name }}</p>
        <div class="giftIcon">
          <GiftOpen class="svg" color="#85B6FF" v-if="!active" />
          <Gift class="svg" color="#FF9900" v-else />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
// import { Button } from 'primevue/button';
// import Button from 'primevue/button'
import { useToast } from 'vue-toastification'
import GiftOpen from '../icones/giftOpen.vue'
import Gift from '../icones/gift.vue'
import { ref } from 'vue'
import { useStore } from 'vuex'

interface Itens {
  name: string
  id: number
  active: boolean
}

const store = useStore()

const list = ref<Itens[]>([
  {
    name: 'Tv',
    id: 1,
    active: false,
  },
  {
    name: 'Celular',
    id: 2,
    active: false,
  },
  {
    name: 'Geladeira',
    id: 3,
    active: false,
  },
  {
    name: 'PC',
    id: 4,
    active: false,
  },
])

const toast = useToast()

const selectGift = (id: number) => {
  const newList = list.value.map((item) => {
    if (id == item.id) {
      item.active = !item.active

      const filter = store.getters.getListCheck.filter((element: any) => element.id !== item.id)

      if (item.active) {
        toast.success(`${item.name} selecionado`, {
          timeout: 2000,
        })
        store.commit('setListCheck', [...store.getters.getListCheck, item])
        console.log(store.getters.getListCheck, 'dsad')
      } else {
        store.commit('setListCheck', filter)
      }
    }
    return item
  })

  console.log(newList)
}
</script>

<style scoped>
.containerList {
  background: #fff;
  padding: 4px 5px;
  border-radius: 5px;
  margin-bottom: 25px;
}

.selectGift {
  align-items: center;
  justify-content: space-between;
  display: flex;
  height: 50px;
  padding: 0 20px;
  border-radius: 5px 5px 0 0;
  border-bottom: 1px solid var(--textList);
  margin: 20px 0;
  transition: 0.1s ease-in-out;
  border: none;
  background: #f4f8f7;
  border: none;
}

p {
  color: var(--textSuccess);
  font-weight: 600;
  line-height: 27px;
  font-size: 1.1rem;
}

.selectGift:not(.success) p {
  color: #777e8a;
  color: #dc3545;
  color: var(--textList);
}

h2 {
  margin: 20px 0;
  font-size: 1rem;
  color: #71a9dd;
}

.divSucess {
  border-bottom: initial;
  border-radius: 5px;
}

hr {
  flex: 1;
  margin: 0px 10px;
  height: 1px;
  border: none;
  background: #71a9dd;
}
</style>
