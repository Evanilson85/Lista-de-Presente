<template>
  <!-- width="105"
  height="105" -->
  <svg viewBox="0 0 105 105" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M87.5 8.75H17.5C12.6875 8.75 8.75 12.6875 8.75 17.5V96.25L26.25 78.75H87.5C92.3125 78.75 96.25 74.8125 96.25 70V17.5C96.25 12.6875 92.3125 8.75 87.5 8.75ZM87.5 70H22.75L17.5 75.25V17.5H87.5V70ZM45.8063 61.25L30.625 45.9375L36.75 39.7688L45.8063 48.8688L68.25 26.25L74.375 32.4187L45.8063 61.25Z"
      :fill="color"
    />
  </svg>
</template>

<script setup lang="ts">
defineProps({
  color: String,
})
</script>

<!-- #85B6FF -->
