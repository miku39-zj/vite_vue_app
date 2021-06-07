/*
 * @Description: 
 */
import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw
} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('../components/login.vue'),
    redirect: '/login',
    meta: {

    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/login.vue') // 懒加载组件
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
