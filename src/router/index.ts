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
import { IRouterList } from '../types/routerType'

// 动态路由
export const dynamicRoutes: Array<IRouterList> = [{
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

//静态路由
export const staticRoutes: Array<IRouterList> = [
  {
    name: "login",
    path: '/login',
    component: () => import('../components/login.vue'),
    hidden: true //导航菜单忽略选项
  },
  {
    name: "redirect",
    path: '/',
    component: Home,
    redirect: '/welcome',
    hidden: true,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: staticRoutes
})

export default router
