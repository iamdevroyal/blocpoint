import { createApp } from 'vue'
import { router } from './router'
import './style.css'
import App from './App.vue'
import { createHead } from '@vueuse/head'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

// Toast configuration
const toastOptions = {
    position: 'top-right',
    timeout: 4000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: false,
    closeButton: 'button',
    icon: true,
    rtl: false,
}

const app = createApp(App)
const head = createHead()
app.use(router)
app.use(head)
app.use(Toast, toastOptions)
app.mount('#app')
