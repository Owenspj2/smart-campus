import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 按需导入element-plus
    // 通过这两个element-plus的配置,可以直接使用组件,不用手动导入
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       // 自动导入定制化样式文件进行样式覆盖
  //       // 自动导入scss文件
  //       additionalData: `
  //         @use "@/styles/element/index.scss" as *;
  //         @use "@/styles/var.scss" as *;
  //       `,
  //     },
  //   }
  // }
})
