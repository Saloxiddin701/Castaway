import { createApp } from 'vue'
import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

createApp(App).mount('#app')
new createApp(AOS.init())
