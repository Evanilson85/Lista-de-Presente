<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 105 105"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M68.9062 51.167L76.4429 43.6304L81.0571 48.2446L68.9062 60.3955L60.0366 51.5259L64.6509 46.9116L68.9062 51.167ZM26.25 78.75H52.5V85.3125H26.25V78.75ZM52.5 32.8125H26.25V26.25H52.5V32.8125ZM52.5 59.0625H26.25V52.5H52.5V59.0625ZM81.0571 21.9946L68.9062 34.1455L60.0366 25.2759L64.6509 20.6616L68.9062 24.917L76.4429 17.3804L81.0571 21.9946ZM59.2163 98.4375L65.7788 105H13.125V0H91.875V65.7788L85.3125 72.3413V6.5625H19.6875V98.4375H59.2163ZM104.026 74.4946L75.4688 103.103L61.6772 89.2603L66.2915 84.646L75.4688 93.772L99.4116 69.8804L104.026 74.4946Z"
      :fill="color"
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
