<template>
  <v-row justify="end">
    <button @click="dialog = true"><span>Confirmar Presente</span> <ListIcon /></button>
    <v-dialog v-model="dialog" width="800">
      <v-card>
        <v-card-title>
          <span class="text-h5 title" justify="center">Presente selecionados</span>

          <ul class="list">
            <li class="listItem" v-for="{ id, name } in list" :key="id">
              <Confirm /> <span> {{ name }}</span>
            </li>
          </ul>
        </v-card-title>
        <v-card-text>
          <half-circle-spinner
            v-if="load"
            :animation-duration="2000"
            :size="70"
            color="#71a9dd"
            class="mx-auto my-4"
          />
          <div v-else>
            <p class="message">Se quiser pode enviar para os noivos uma messagem 😊😁</p>
            <FormModal @closeModal="closeModal" @sendUpdate="sendUpdate" />
          </div>
        </v-card-text>
        <!-- <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="#F44336" variant="text" @click="dialog = false"> Fechar </v-btn>
          <v-btn color="green-darken-1" variant="text" @click="dialog = false"> Confirmar </v-btn>
        </v-card-actions> -->
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { HalfCircleSpinner } from 'epic-spinners'
import { useStore } from 'vuex'
import FormModal from '@/components/form/formModal.vue'
import ListIcon from '@/components/icones/list.vue'
import Confirm from '@/components/icones/confirm.vue'
import { useToast } from 'vue-toastification'

const store = useStore()

const list = computed(() => {
  return store.getters.getListCheck
})
const dialog = ref(false)
const load = ref(false)
const toast = useToast()

const closeModal = (value: boolean) => {
  dialog.value = value
}

const sendUpdate = async (value: any) => {
  load.value = true

  const newList = list.value.map((item: any) => {
    const json = {
      id: item.id,
      name: item.name,
      email: '',
      check: true,
      // "category": item.category,
      category: '',
      sendRequestEmail: true,
      message: value.message,
      nameUser: `${value.name} nos presenteou com ${item.name}`,
      hideDisplay: false,
    }

    return json
  })

  try {
    const result = await store.dispatch('updateListCheck', newList)
    console.log(result)
    load.value = false
    closeModal(false)
    store.commit('setListCheck', [])
    toast.success(`Obrigado pelo presente `, {
      timeout: 2000,
    })
  } catch (error) {
    toast.error(`Ops! tente novamente`, {
      timeout: 2000,
    })
    load.value = false
  }
}
</script>

<style scoped>
.title {
  color: #71a9dd;
  font-weight: 800;
  margin-bottom: 20px;
}

button {
  height: 40px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #ffffff;
  color: #71a9dd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row-reverse;
}

button span {
  margin: 0 10px;
}

.message {
  margin: 5px 0 20px;
  color: #71a9dd;
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
}

.list {
  margin: 30px 0;
}

.listItem {
  background-color: #f4f8f7;
  display: flex;
  align-items: center;
  margin: 5px 0px;
  border-radius: 5px;
  height: 40px;
  padding: 1px 5px;
}

.listItem span {
  margin: 0 10px;
  color: #71a9dd;
  font-weight: 400;
  font-size: 16px;
  line-height: 27px;
}
</style>
