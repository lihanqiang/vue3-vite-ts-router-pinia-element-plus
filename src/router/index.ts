import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router/menus'
import useUserStore from '@/store/user'

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  userStore.clearToken() // 取消请求
  next()
})

export default router
