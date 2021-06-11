/*
 * @Description: 
 */
/*
 * @Description: 
 */
import {
  staticRoutes,
  dynamicRoutes
} from '../../router'
import { IRouterList } from '../../types/routerType'

const common = {
  state: {
    routes: [], //完整路由表
    tagList: [], // tag标签
  },

  mutations: {
    SET_ROUTES: (state: any, routes: Array<IRouterList>) => {
      // 完整的路由表
      state.routes = [...staticRoutes,...routes]
    },
    //设置标签
    SET_TAGLIST: (state: any, data: any) => {
      state.tagList.push(data)
    },
    //清除所有标签
    DEL_ALL_TAGLIST: (state: any) => {
      state.tagList = []
    },
    //删除标签
    DEL_TAGLIST(state: any, data: any) {
      state.tagList.splice(data.index, 1);
    },
    //删除其他标签
    DEL_OTHER_TAGLIST(state: any, data: any) {
      state.tagList = data;
    },
  },

  actions: {
    // 用户名登录
    generateRoutes({
      commit
    }: any):Promise<Array<IRouterList>> {
      return new Promise(resolve => {
        commit('SET_ROUTES', dynamicRoutes)
        resolve(dynamicRoutes)
      })
    }
  }
}

export default common