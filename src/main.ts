import { createApp } from 'vue'
import { router } from './router'
import './style.css'
import App from './App.vue'
import { createHead } from '@vueuse/head'

const app = createApp(App)
const head = createHead()
app.use(router)
app.use(head)
app.mount('#app')
