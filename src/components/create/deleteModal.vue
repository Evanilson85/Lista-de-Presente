<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="auto">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props" color="red-lighten-1" variant="flat"> Deletar </v-btn>
      </template>

      <v-card>
        <v-card-text class="d-flex align-center flex-column">
          Deseja Deletar <span class="secondary">{{ name }}.</span>
          <div>
            id: <span>{{ id }}</span>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-btn color="red-lighten-1" block variant="flat" @click="deleteItem(id)">Deletar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useToast } from 'vue-toastification'

const store = useStore()
const toast = useToast()
const dialog = ref(false)
const propsItem = defineProps({
  id: {
    type: [String, Number],
  },
  name: {
    type: String,
  },
})

const deleteItem =async (paramsId: string) => {
  
  try {
    const result = await store.dispatch('deleteGift', paramsId)
    console.log(result)
    dialog.value = false
    toast.success('deletado com sucesso')
  } catch (error) {
    console.log(error)
    toast.error('error ao deletar presente')
  }

}
</script>
