<template>
  <div class="modal-wrapper" v-if="show">
    <div class="modal-mask" @click="close"></div>
    <transition name="modal">
      <div class="modal-container">
        <div class="modal-header">
          <h3>{{ title }}</h3>
          <button @click="close">X</button>
        </div>
        <div class="modal-body">
          <p>{{ body }}</p>
        </div>
      </div>
    </transition>
  </div>
  <button @click="show = !show">Abrir Modal</button>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  name: 'Modal',
  setup() {
    const show = ref(false)

    function close() {
      show.value = false
    }

    return {
      show,
      close,
    }
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
}
</script>

<style>
.modal-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-mask {
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.modal-container {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
