import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import Particles from "particles.vue3";

import '@/styles/common.scss'



const app = createApp(App)

app.use(Particles);
app.use(createPinia())
app.use(router)


app.mount('#app')
