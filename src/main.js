import { createApp } from 'vue'
import App from "./App"
import router from "./router"
import { createPinia } from "pinia"
import './styles/element/index.scss'
import ElementPlus from 'element-plus'

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.use(ElementPlus)
app.mount('#app')
