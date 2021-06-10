/*
 * @Description: 
 */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'
import './assets/css/global.css'
import svgIcon from './components/svgIcon.vue';
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import 'nprogress/nprogress.css'

const app = createApp(App)
app.component('svg-icon', svgIcon)
app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')

