<template>
  <div class="menu">
    <input
      type="checkbox"
      v-model="checked"
      @click="$emit('changeMenu', !checked)"
      id="checkbox-menu"
    />
    <label for="checkbox-menu">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// defineProps({
//   // checked: {}
// })

const checked = ref(false)
</script>

<style scoped>
.menu {
  height: 100%;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
}

#checkbox-menu {
  position: absolute;
  opacity: 0;
}

label {
  cursor: pointer;
  position: relative;
  display: block;
  height: 22px;
  width: 30px;
  margin: 0;
}

label span {
  position: absolute;
  display: block;
  height: 2px;
  width: 100%;
  border-radius: 30px;
  background: var(--colorWhite);
  transition: 0.25s ease-in-out;
}

label span:nth-child(1) {
  top: 0;
}

label span:nth-child(2) {
  top: 8px;
  width: 80%;
  right: 0;
}

label span:nth-child(3) {
  top: 16px;
}

#checkbox-menu:checked + label span:nth-child(1) {
  transform: rotate(-45deg);
  top: 8px;
}

#checkbox-menu:checked + label span:nth-child(2) {
  opacity: 0;
}

#checkbox-menu:checked + label span:nth-child(3) {
  transform: rotate(45deg);
  top: 8px;
}

@media (min-width: 769px) {
  .menu,
  label {
    display: none;
  }
}
</style>
