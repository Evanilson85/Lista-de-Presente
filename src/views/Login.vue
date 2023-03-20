<template>
  <div class="main">
    <div class="container">
      <div class="bckContainer">
        <h1 class="title">Lista de Presente</h1>
      </div>
      <div class="containerCp">
        <transition name="horizontal">
          <Login />
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Login from '@/components/login/index.vue'

//  beforeRouteEnter(to, from, next) {
//     next(vm => {
//         if(window.uid) vm.router.push({ name: 'Home'})
//     })
// }
</script>

<style scoped>
.main {
  background-color: var(--container);
  height: 100vh;
  width: 100%;
  display: flex;
}
.main h1 {
  font-size: 2em;
  margin-top: 2em;
  margin-left: 1.4em;
  color: var(--colorWhite);
}
.main .container .bckContainer {
  display: none;
  background: var(--main);
  /* background: url('../assets/login/image.png') no-repeat var(--main) bottom; */
  height: 100%;
  width: 50%;
}
.main .container .containerCp {
  height: 100vh;
}
@media (min-width: 768px) {
  .main {
    background-color: var(--container);
  }
  .main .container {
    max-width: 1020px;
    margin: auto;
    height: calc(100vh);
    display: flex;
  }
  .main .container .bckContainer {
    display: block;
  }
  .main .container .containerCp {
    height: 100%;
  }
}
</style>
