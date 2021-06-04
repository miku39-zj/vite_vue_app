/*
 * @Author: your name
 * @Date: 2021-04-30 16:04:00
 * @LastEditTime: 2021-04-30 16:15:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vite-project\src\utils\request.ts
 */
import Axios from 'axios'
import router from '../router/index'
import { ElMessage, ElMessageBox } from 'element-plus'

let baseURL = ' '

if (process.env.NODE_ENV == 'development') {
  baseURL = 'http://127.0.0.1:6003/';
} else {
  // api的base_url

}
const axios = Axios.create({
  baseURL,
  timeout: 180000 // 请求超时 20s
})

// 前置拦截器（发起请求之前的拦截）
axios.interceptors.request.use(
  response => {
    /**
     * 根据你的项目实际情况来对 config 做处理
     * 这里对 config 不做任何处理，直接返回
     */
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

// 后置拦截器（获取到响应时的拦截）
axios.interceptors.response.use(
  response => {
    /**
     * 根据你的项目实际情况来对 response 和 error 做处理
     * 这里对 response 和 error 不做任何处理，直接返回
     */
    if (response.status == 200) {
      const res = response.data;
      if ("code" in res) {
        if (res.code !== 0 && res.code !== -1) {

          ElMessage({
            message: res.msg,
            type: 'error',
            duration: 3 * 1000
          });
          return Promise.reject(res)
        }
      }
      return Promise.resolve(res)

    }
    return response
  },
  error => {
    let res = error.response;
    if (res) {

      switch (res.status) {
        case 401:

          ElMessageBox.confirm('会话已超时', '会话提醒', {
            confirmButtonText: '重新登录',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            router.push({
              path: '/login'
            });

          })

          break;
        case 403:
          ElMessage({
            message: "没有权限访问",
            type: 'error',
            duration: 3 * 1000
          });
        default:

          ElMessage({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
          });
          break;

      }
    } else {
      ElMessage({
        message: "网络连接失败",
        type: 'error',
        duration: 5 * 1000
      });
    }
    return Promise.reject(error)
  }
)

export default axios
