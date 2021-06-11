/*
 * @Description: 
 */
import { createStore } from 'vuex'
import common from './modules/common'
import getters from './getters'

const store =  createStore({
  state() {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    common,
  },
  getters
})
export default store
