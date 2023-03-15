<template>
  <section class="headerList">
    <h2>lista</h2>
    <button>
      <filterSvg color="#85B6FF" />
    </button>
  </section>
  <div class="containerList">
    <section>
      <div
        v-for="{ id, name, active } in list"
        :key="id"
        :class="active ? 'selectGift success divSucess' : 'selectGift'"
        @click="selectGift(id)"
      >
        <p>{{ name }}</p>
        <div class="giftIcon">
          <gift class="svg" color="#85B6FF"  />
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import filterSvg from '../icones/filter.vue'
import gift from '../icones/gift.vue';
import { ref } from 'vue'
interface Itens {
  name: string,
  id: number,
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

  const newList = list.value.map(item => {
    if(id == item.id) {
      item.active = !item.active
    }
    return item
  })

  console.log(newList)

}
</script>

<style scoped>
.headerList {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.headerList button {
  width: 35px;
  background-color: #ff000000;
  border: none;
}

.containerList {
  background: #fff;
  padding: 4px 5px;
  border-radius: 5px;
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
  border-bottom: 1px solid #71a9dd;
  margin: 20px 0;
  transition: .1s ease-in-out;
}

p {
  color: #777e8a;
  font-weight: 400;
  /* font-size: 16px; */
  line-height: 27px;
  font-size: 1.1rem;
}

h2 {
  margin: 20px 0;
  font-size: 26px;
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
</style>
