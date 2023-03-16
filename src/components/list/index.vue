<template>
  <!-- <section class="headerList">
    <h2></h2>
    <button>
      <filterSvg color="#85B6FF" />
    </button>
  </section> -->
  <!-- <Button label="Submit" /> -->
  <div class="containerList">
    <div class="dflex">
      <hr />
      <h2>Eletrodomestico</h2>
      <hr />
    </div>
    <section>
      <div
        v-for="{ id, name, active } in list"
        :key="id"
        :class="active ? 'selectGift success divSucess' : 'selectGift'"
        @click="selectGift(id)"
      >
        <p>{{ name }}</p>
        <div class="giftIcon">
          <giftOpen class="svg" color="#85B6FF" v-if="!active" />
          <gift class="svg" color="#FF9900" v-else />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
// import { Button } from 'primevue/button';
import Button from 'primevue/button'

import giftOpen from '../icones/giftOpen.vue'
import gift from '../icones/gift.vue'
import { ref } from 'vue'
interface Itens {
  name: string
  id: number
  active: boolean
}

const list = ref<Itens[]>([
  {
    name: 'Tv',
    id: 1,
    active: true,
  },
  {
    name: 'Celular',
    id: 2,
    active: false,
  },
  {
    name: 'Geladeira',
    id: 3,
    active: false,
  },
  {
    name: 'PC',
    id: 4,
    active: false,
  },
])

const selectGift = (id: number) => {
  const newList = list.value.map((item) => {
    if (id == item.id) {
      item.active = !item.active
    }
    return item
  })

  console.log(newList)
}
</script>

<style scoped>
.containerList {
  background: #fff;
  padding: 4px 5px;
  border-radius: 5px;
  margin-bottom: 25px;
}

/* .selectGift {
  align-items: center;
  justify-content: space-between;
  background: #f4f8f7;
  display: flex;
  height: 50px;
  padding: 0 20px;
  border-radius: 5px 5px 0 0;
  border-bottom: 1px solid #71a9dd;
} */
.selectGift {
  align-items: center;
  justify-content: space-between;
  /* background: #71a9dd; */
  display: flex;
  height: 50px;
  padding: 0 20px;
  border-radius: 5px 5px 0 0;
  border-bottom: 1px solid var(--textList);

  margin: 20px 0;
  transition: 0.1s ease-in-out;

  border: none;
  background: #f4f8f7;
  border: none;
}

p {
  color: var(--textSuccess);
  font-weight: 600;
  /* font-size: 16px; */
  line-height: 27px;
  font-size: 1.1rem;
}

.selectGift:not(.success) p {
  color: #777e8a;
  color: #dc3545;
  color: var(--textList);
}

h2 {
  margin: 20px 0;
  font-size: 1rem;
  /* font-weight: 500; */
  /* line-height: 44px; */
  color: #71a9dd;
}

.divSucess {
  border-bottom: initial;
  border-radius: 5px;
}

.giftIcon {
}
.giftIcon .svg {
  /* width: 20px; */
}

hr {
  flex: 1;
  margin: 0px 10px;

  height: 1px;
  border: none;
  background: #71a9dd;
}
</style>
