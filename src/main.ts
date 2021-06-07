/*
 * @Description: 
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './assets/css/global.css'
import ElementPlus from 'element-plus'

const app = createApp(App)
.use(router)
.use(ElementPlus)
.mount('#app')

