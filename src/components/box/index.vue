<template>
  <div class="containerBox">
    <div class="boxContainer active" ref="gift" @click="changeItens('gift')">Presente</div>
    <div class="boxContainer" ref="pix" @click="changeItens('pix')">PIX</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const gift = ref<Object>('gift')
const pix = ref<Object>('pix')

const changeItens = (value: string): any => {
  const itemGift = gift.value as HTMLDivElement
  const itemPix = pix.value as HTMLDivElement
  if(value === 'gift') {
    itemGift.classList.add('active')
    itemPix.classList.remove('active')
  } else {
    itemPix.classList.add('active')
    itemGift.classList.remove('active')
  }

}
</script>

<style scoped>
.containerBox {
  /* background-color: var(--colorWhite); */
  margin: 20px 0;
  display: flex;
  align-items: center;
  /* justify-content: center; */
}
.boxContainer {
  width: 70px;
  width: 100%;
  height: 70px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 20px 20px 0;

  width: 30%;
  height: 50px;

  background: var(--colorWhite);
  color: var(--main);
  border: 1px solid;
}

.active {
  background-color: var(--main);
  color: var(--colorWhite);
}
</style>
