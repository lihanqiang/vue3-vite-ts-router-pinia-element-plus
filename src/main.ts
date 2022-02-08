import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from '@/router'
// 由于 Vue 3 不再支持 IE11，Element Plus 也不再支持 IE 浏览器。
// bug: 按需引入element-plus ElMessage无样式，需要引入对应组件样式，可能后面unplugin-vue-components插件会更新修复这个bug
import 'element-plus/theme-chalk/el-message.css'
import '@/styles/index.scss'

const app = createApp(App)
app
  .use(router)
  .use(createPinia())
  .mount('#app')
