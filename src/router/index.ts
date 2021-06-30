/*
 * @Description: 
 */
import {
  createRouter,
  createWebHashHistory,
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
    icon: 'home'
  },
  children: [{
    path: '/welcome',
    component: () => import('../components/Welcome.vue'),
    name: 'welcome',
    meta: {
      title: "欢迎页",
      icon: 'home',
    }
  }]
},
{
  path: '/',
  component: Home,
  name: 'component',
  meta: {
    title: "组件",
    icon: 'component'
  },
  children: [{
    path: '/lottie',
    component: () => import('../views/Lottie/lottie.vue'),
    name: 'lottie',
    meta: {
      title: "动画",
      icon: 'mooncloud',
    }
  },
  {
    path: '/VirtualList',
    component: () => import('../views/VirtualList/index.vue'),
    name: 'VirtualList',
    meta: {
      title: "虚拟列表",
      icon: 'rain',
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
    component: () => import('../components/Home.vue'),
    redirect: '/welcome',
    hidden: true,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: staticRoutes
})

export default router
