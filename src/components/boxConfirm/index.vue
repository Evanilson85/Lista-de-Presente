<template>
  <div class="box visible">
    <p>
      <Strong>{{ item.length }}</Strong> Selecionado
    </p>
    <modal />
  </div>
</template>

<script lang="ts" setup>
import modal from '@/components/modal/index.vue'
import { ref } from 'vue'

const refValue = ref<boolean>(false)
defineProps({
  item: {
    type: Array,
    required: true,
  },
})

const handleChangeModal = () => {
  console.log(refValue.value)
  refValue.value = !refValue.value
  console.log(refValue.value)
}
</script>

<style scoped>
.box {
  background-color: #4ec76b;
  width: 98%;
  margin: 0 1% 1%;
  height: 57px;
  position: fixed;
  bottom: 0%;
  z-index: 0;
  visibility: collapse;
  transition: 0.1s ease-in-out;
  border-radius: 5px 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px 20px;
}

.box p {
  color: #fff;
}

.box button {
  height: 40px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #ffffff;
  color: #71a9dd;
}

.visible {
  visibility: visible;
}
</style>
