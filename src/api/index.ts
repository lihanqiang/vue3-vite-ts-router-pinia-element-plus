import axios from 'axios'
import router from '@/router'
import { ElMessage } from 'element-plus'
import userStore from '@/store/user'
const store = userStore()

// 全局的 axios 默认值
axios.defaults.baseURL = (window as any).BASE_URL
axios.defaults.timeout = 12000
axios.defaults.headers.post['Access-Control-Allow-Origin-Type'] = '*' // 允许跨域

axios.interceptors.request.use(function (config: any) {
  // 若是有做鉴权token, 就给头部带上token
  if (store.token) {
    config.headers.Authorization = store.token
  }
  return config
}, (error: { data: { error: { message: any } } }) => {
  return Promise.reject(error.data.error.message)
})

axios.interceptors.response.use(function (config: any) {
  if (config.status === 200 || config.status === 204) {
    return Promise.resolve(config)
  } else {
    return Promise.reject(config)
  }

  // return config
},
function (error: { response: { status: any } }) {
  // return Promise.reject(error)

  if (error.response.status) {
    switch (error.response.status) {
      // 401: 未登录
      // 未登录则跳转登录页面，并携带当前页面的路径
      // 在登录成功后返回当前页面，这一步需要在登录页操作。
      case 401:
        router.replace({
          path: '/login',
          query: {
            // redirect: router.currentRoute.fullPath
          }
        })
        break
        // 403 token过期
        // 登录过期对用户进行提示
        // 清除本地token和清空pinia中token对象
        // 跳转登录页面
      case 403:
        // ElMessage('登录过期，请重新登录')
        // 清除token
        // store.dispatch('FedLogOut').then(() => {
        //   // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
        //   router.replace({
        //     path: '/login',
        //     query: {
        //       // redirect: router.currentRoute.fullPath
        //     }
        //   })
        // })
        break

        // 404请求不存在
      case 404:
        ElMessage.error('网络请求不存在')
        break
    }
    return Promise.reject(error.response)
  } else {
    // 处理断网的情况
    // eg:请求超时或断网时，更新state的network状态
    // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
    // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
    // store.commit('changeNetwork', false)
  }
}
)

export default axios
