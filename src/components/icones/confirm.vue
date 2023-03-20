<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 105 105"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M52.5 91.875C74.2462 91.875 91.875 74.2462 91.875 52.5C91.875 30.7538 74.2462 13.125 52.5 13.125C30.7538 13.125 13.125 30.7538 13.125 52.5C13.125 74.2462 30.7538 91.875 52.5 91.875Z"
      :stroke="color"
      stroke-width="8.75"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M35 52.5L48.125 65.625L70 43.75"
      :stroke="color"
      stroke-width="8.75"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup lang="ts">
defineProps({
  color: {
    type: String,
    required: false,
    default: '#4ECB71',
  },
  size: {
    type: String,
    required: false,
    default: '24',
  },
})
</script>
