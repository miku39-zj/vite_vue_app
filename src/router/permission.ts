/*
 * @Description: 
 */
import router from './index'
import store from '../store/index'

import NProgress from 'nprogress'


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
  const accessRoutes = await store.dispatch('generateRoutes')
  console.log(router,"router");
  console.log(accessRoutes,213);
  router.addRoute(accessRoutes)

  // 继续路由切换,确保addRoutes完成
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