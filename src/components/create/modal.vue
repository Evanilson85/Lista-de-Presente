<template>
  <div class="text-center">
    <v-btn class="ma-2" color="#71a9dd" @click="dialog = true">
      <svg
        width="24"
        height="24"
        viewBox="0 0 105 105"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M48.125 83.125V56.875H21.875V48.125H48.125V21.875H56.875V48.125H83.125V56.875H56.875V83.125H48.125Z"
          fill="#fff"
        />
      </svg>
    </v-btn>
    <v-dialog v-model="dialog">
      <v-card>
        <v-card-text>
          <Form />
        </v-card-text>
        <!-- <v-card-actions>
          <v-btn color="primary" block @click="dialog = false">Cancelar</v-btn>
          <v-btn color="primary" block @click="dialog = false">Criar</v-btn>
        </v-card-actions> -->
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts" setup>
import Form from './form.vue'
import { ref } from 'vue'

const dialog = ref(false)
</script>
