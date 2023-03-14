<template>
  <div :class="open ? 'menuContainer open' : 'menuContainer'">
    <nav>
      <ul>
        <!-- <router-link tag="li" :to="{ name: 'Home' }">
          <h3>Home</h3>
        </router-link>
        <router-link tag="li" :to="{ name: 'About' }">
          <h3>About</h3>
        </router-link> -->
        <li>
          <h3>Presentes</h3>
        </li>
        <li>
          <h3>Pix</h3>
        </li>
        <li>
          <h3>Messagens</h3>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
defineProps({
  open: Boolean,
})
</script>

<style scoped>
.menuContainer {
  height: calc(100vh - 70px);
  width: 70%;
  position: fixed;
  background-color: var(--colorWhite);
  left: -75%;
  bottom: 0;
  /* box-shadow: 0 0 10px #000; */
  transition: all 0.4s cubic-bezier(0.4, 0, 0, 1);
  /* -webkit-transform: translate(-280px, 0);
	 transform: translate(-280px, 0);
	 */
}
.menuContainer nav {
  height: 100%;
  width: 100%;
}
.menuContainer nav ul {
  padding: 0;
  margin: 0;
  list-style: none;
  height: 100%;
}
.menuContainer nav ul .menuDisplay {
  display: none;
}
.menuContainer nav ul li {
  height: 50px;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 5px 5px 5px 30px;
  margin: 0px auto;
  color: var(--main);
  font-weight: bold;
  cursor: pointer;
}
.menuContainer nav ul li h3 {
  font-size: 16px;
  font-weight: bold;
  margin: 0;
}
.menuContainer nav ul li:hover {
  background-color: var(--main);
  color: var(--colorWhite);
}
.open {
  left: 0%;
}
@media (min-width: 769px) {
  .menuContainer {
    position: relative;
    left: 0;
    width: 100%;
    top: 0;
    background: transparent;
    height: 100%;
    box-shadow: none;
  }
  .menuContainer ul {
    display: flex;
    /* width: 40%;
		 */
    margin: 0 0 0 auto !important;
    align-items: center;
  }
  .menuContainer ul .menuDisplay {
    display: block !important;
  }
  .menuContainer ul li {
    width: 100px !important;
    /* background: chartreuse;
		 */
  }
  .menuContainer ul li h3 {
    color: var(--colorWhite);
  }
  .menuContainer ul li h3:hover {
    color: #ccc;
  }
}
</style>
