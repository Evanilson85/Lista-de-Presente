import { createApp } from 'vue'
import { createStore } from 'vuex'
import { list } from './list/index'

export const store = createStore({
  modules: {
    list,
  },
})
