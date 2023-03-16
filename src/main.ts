import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/saga-blue/theme.css' //theme
import 'primevue/resources/primevue.min.css' //core CSS
import 'primeicons/primeicons.css' //icons
import './assets/main.css'

import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

const options = {
  // You can set your default options here
  position: "top-right",
  timeout: 5000,
  closeOnClick: false,
  pauseOnFocusLoss: false,
  pauseOnHover: false,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: "button",
  icon: true,
  rtl: false,
  transition: "Vue-Toastification__bounce",
  maxToasts: 2,
  newestOnTop: true
}

const app = createApp(App)

app.use(router)
app.use(PrimeVue)
app.use(Toast, options)

app.mount('#app')
