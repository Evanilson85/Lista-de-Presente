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
          <v-btn color="red-lighten-1" block variant="flat" @click="dialog = false">Deletar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const propsItem = defineProps({
  id: {
    type: [String, Number],
  },
  name: {
    type: String,
  },
})
const dialog = ref(false)
</script>
