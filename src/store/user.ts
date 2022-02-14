// 配置pinia
import { defineStore, StoreDefinition } from 'pinia'
import { Canceler } from 'axios'

// 以下都可以
type cancelTokenArr = Array<Canceler>
// type cancelTokenArr = Canceler[]
// interface cancelTokenArr {
//   [index: number]: Canceler
// }

export const useUserStore: StoreDefinition = defineStore({
  id: 'user',
  state: () => ({
    count: 0,
    token: '',
    // 取消请求token数组
    cancelTokenArr: [] as cancelTokenArr
  }),
  getters: {
    // 一个基本的 Getter： 计算 count 的平方
    countPow2 (state: any) {
      return state.count ** 2
    }
  },
  actions: {
    increment () {
      this.count++
    },
    setToken (token: string) {
      this.token = token
    },
    pushToken (cancelToken: Canceler) {
      this.cancelTokenArr.push(cancelToken)
    },
    clearToken () {
      this.cancelTokenArr.forEach((canceler: Canceler) => {
        canceler('路由跳转取消请求')
      })
      this.cancelTokenArr = []
    }
  }
})

export default useUserStore
