/*
 * @Description: 
 */
const { Interface } = require("node:readline");
import Home from '../components/Home.vue'

/*
 * @Description: 
 */
interface IRouter {
  id?: number | string
  name: string
  path: string
  redirect?: string | {name: string}
  meta?: {
      icon: string
      title: string
      hidden?: boolean
      permission?: Array<string>
  }
  hidden?: boolean
}

export interface IRouterList extends IRouter {
  component: (() => Promise<typeof import('*.vue')>) | typeof Home
  children?: Array<IRouterList>
}