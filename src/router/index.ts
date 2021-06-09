/*
 * @Description: 
 */
/*
 * @Description: 
 */
import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw
} from 'vue-router'
import Home from '../components/Home.vue'


export const dynamicRoutes = [{
  path: '/',
  component: Home,
  name: 'home',
  meta: {
    title: "首页",
    icon: 'el-icon-s-home'
  },
  children: [{
    path: '/welcome',
    component: () => import('@/components/Welcome.vue'),
    name: 'welcome',
    meta: {
      title: "欢迎页",
      icon: 'el-icon-s-home',
    }
  }]
},
]

const staticRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('../components/login.vue'),
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/login.vue'),
    meta: {
      title: '登录',
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: staticRoutes
})

export default router
