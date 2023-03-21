<template>
  <div class="containerList">
    <div class="dflex">
      <hr />
      <h2>{{ category }}</h2>
      <hr />
    </div>
    <section>
      <div
        v-for="{ id, name, active } in list"
        :key="id"
        :class="active ? 'selectGift' : 'selectGift'"
      >
        <p :class="giftSelect ? 'selectDisabled' : ''">{{ name }}</p>
        <div class="giftIcon">
          <!-- <GiftActive class="svg" color="#FF9900" v-if="giftSelect && active" />
          <GiftOpen class="svg" color="#85B6FF" v-else-if="!giftSelect && !active" />
          <Gift class="svg" color="#FF9900" v-else /> -->
          <DeleteModal :name="name" :id="id" />
          <!-- <v-btn @click="selectGift(id, active, name)" color="error" variant="flat">
            Deletar
          </v-btn> -->
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { useToast } from 'vue-toastification'
import { useStore } from 'vuex'
import DeleteModal from './deleteModal.vue'

const props = defineProps({
  category: {
    type: [String, Number],
    required: true,
  },
  list: {
    type: Object,
    required: true,
  },
  giftSelect: {
    type: Boolean,
    default: false,
  },
})

const store = useStore()

const toast = useToast()

const selectGift = (id: number, active: boolean, name: string) => {
  return
  if (props.giftSelect) {
    toast.warning(`Ops! Alguem ja selecionou ${name}. `, {
      timeout: 2000,
    })
    return
  }

  const newList = props.list.map((item: any) => {
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

.selectDisabled {
  text-decoration: line-through;
}
</style>
