import App from './App.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { createApp } from "vue";


export const app = createApp(App)
app.AOS = new AOS.init({});

app.use(AOS).mount('#app')