import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})

import './assets/main.css'

import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

const options = {
  // You can set your default options here
  position: 'top-right',
  timeout: 5000,
  closeOnClick: false,
  pauseOnFocusLoss: false,
  pauseOnHover: false,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: 'button',
  icon: true,
  rtl: false,
  transition: 'Vue-Toastification__bounce',
  maxToasts: 2,
  newestOnTop: true,
}

const app = createApp(App)

app.use(router)
app.use(store)
app.use(vuetify)
app.use(Toast, options)

app.mount('#app')
