import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
const { geoserverHost } = require('./public/setting')

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode === 'development'
  const proxyHost = isDev ? 'http://localhost:8080/' : geoserverHost
  return {
    base: './', // 打包路径
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      }),
      vue()
    ],
    sourcemap: isDev,
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '~': resolve(__dirname, 'public')
      }
      // 导入时想要省略的扩展名列表。注意，不 建议忽略自定义导入类型的扩展名（例如：.vue），因为它会影响 IDE 和类型支持。
      // extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
    },
    css: {
      postcss: {
        plugins: [
          require('autoprefixer')
        ]
      }
    },
    optimizeDeps: {
      // include: ['axios'],
    },
    build: {
      target: 'modules',
      outDir: 'dist',
      assetsDir: 'assets',
      minify: 'terser' // 混淆器
    },
    server: {
      cors: true,
      open: false,
      host: '0.0.0.0',
      port: 9999,
      proxy: {
        '/geoserver': {
          target: proxyHost, // 代理接口
          changeOrigin: true
        },
        '/geoserver_cobalt': {
          target: proxyHost,
          changeOrigin: true
        },
        '/terrain': {
          target: proxyHost,
          changeOrigin: true
        }
      }
    }
  }
})
