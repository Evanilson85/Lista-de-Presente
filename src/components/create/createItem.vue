<template>
  <div>
    <v-container class="bg-grey-lighten-5 rounded">
      <v-row justify="space-between">
        <v-col cols="8" class="d-flex align-center" color="#fff">
          <h2>Criar lista de Presente</h2>
        </v-col>
        <v-col class="d-flex justify-center" cols="4">
          <Modal />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import Modal from './modal.vue'
</script>

<style scoped>
h2 {
  font-size: 1rem;
  color: var(--main);
}

.con {
  background: #fff;
  border-radius: 5px;
}
</style>
