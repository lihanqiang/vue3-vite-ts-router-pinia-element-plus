import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '@/router'
// 由于 Vue 3 不再支持 IE11，Element Plus 也不再支持 IE 浏览器。
// 要兼容IE11请使用Vue v2.x版本
// bug: 按需引入element-plus ElMessage无样式，需要引入对应组件样式，可能后面unplugin-vue-components插件会更新修复这个bug
import 'element-plus/theme-chalk/el-message.css'
import '@/styles/index.scss'
// icon组件还需单独再引入
// import { UserFilled, Lock, Right } from "@element-plus/icons-vue";
// 如：<el-icon><right /></el-icon>

const app = createApp(App)
app
  .use(router)
  .use(createPinia())
  .mount('#app')
