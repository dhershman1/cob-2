import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import i18n from './i18n'
import App from './App.vue'

import './assets/css/main.css'
import './assets/css/navbar.css'
import './assets/css/cards.css'
import './assets/css/pagination.css'
import './assets/css/inputs.css'
import './assets/css/button.css'
import './assets/css/tabs.css'
import './assets/css/autocomplete.css'
import './assets/css/filters.css'
import './assets/icofont.min.css'

const pinia = createPinia()
const app = createApp(App)

app.use(i18n)
app.use(pinia)
app.use(router)
app.mount('#app')
