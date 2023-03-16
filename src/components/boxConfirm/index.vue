<template>
  <div class="box visible">
    <p><Strong>1</Strong> Selecionado</p>
    <button @click="teste">Comfirmar Presente</button>
  </div>
</template>

<script lang="ts" setup>

let nome = 'evanilson'

const teste = () => {
  nome = 'teste123'
}

</script>

<style scoped>
.box {
  background-color: #4ec76b;
  width: 98%;
  margin: 0 1%;
  height: 90px;
  position: fixed;
  bottom: 0%;
  z-index: 0;
  visibility: collapse;
  transition: 0.1s ease-in-out;
  border-radius: 5px 5px 0 0;
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
