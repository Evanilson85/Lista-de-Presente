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
          <p class="message">Se quiser pode enviar para os noivos uma messagem 😊😁</p>
          <FormModal @closeModal="closeModal" />
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
import { useStore } from 'vuex'
import FormModal from '@/components/form/formModal.vue'
import ListIcon from '@/components/icones/list.vue'
import Confirm from '@/components/icones/confirm.vue'

const store = useStore()

const list = computed(() => {
  return store.getters.getListCheck
})
const dialog = ref(false)

const closeModal = (value: boolean) => {
  dialog.value = value
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
