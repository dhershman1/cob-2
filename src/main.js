import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'

import './assets/css/main.css'
import './assets/css/cards.css'
import './assets/css/pagination.css'
import './assets/icofont.min.css'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(router)
app.mount('#app')
