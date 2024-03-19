import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/aura-dark-noir/theme.css'
import Button from 'primevue/button'
import Menubar from 'primevue/menubar'
const app = createApp(App)

app.use(PrimeVue)
app.component('ButtonComponent', Button)
app.component('MenuBar', Menubar)

app.use(router)

app.mount('#app')
