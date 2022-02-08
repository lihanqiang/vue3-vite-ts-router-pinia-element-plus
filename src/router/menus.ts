import { RouteRecordRaw } from 'vue-router'

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '@/views/Home/index.vue')
  },
  {
    path: '/Hello',
    name: 'Hello',
    component: () => import(/* webpackChunkName: "Hello" */ '@/components/HelloWorld.vue')
  },
  { path: '/', redirect: { name: 'Home' } }
]
