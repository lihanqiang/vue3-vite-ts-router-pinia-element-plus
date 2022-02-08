// 配置pinia
import { defineStore } from 'pinia'

export const userStore = defineStore({
  id: 'user',
  state: () => ({
    count: 0,
    token: ''
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
    countPlus (num: Number = 0) {
      this.count += num
    },
    setToken (token: String) {
      this.token = token
    }
  }
})

export default userStore
