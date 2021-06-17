/*
 * @Description: 
 */
import router from './index'
import store from '../store/index'

import NProgress from 'nprogress'
import { IRouterList } from '../types/routerType'


NProgress.inc(0.2)
NProgress.configure({
  easing: 'ease',
  speed: 1000,
  showSpinner: false
})

router.beforeEach(async (to: any, from: any, next: any) => {
  NProgress.start()
  if (to.path == '/login') {
    return next();
  }

  if (store.getters.common_routes.length > 0) {
    return next()
  }
  await store.dispatch('generateRoutes').then(res => {
    const accessRoutes = res
    // vue-router3的addRoutes(添加数组) 变成了 vue-router4的addRoute(添加对象)
    accessRoutes.forEach((Route: IRouterList) => {
      router.addRoute(Route)
    });
  })

  next({
    ...to,
    replace: true
  })
  // router.addRoutes(accessRoutes);
  // next()
})

router.afterEach(() => {
  NProgress.done()
})