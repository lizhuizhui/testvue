import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import monacoEditorPlugin from 'vite-plugin-monaco-editor'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    monacoEditorPlugin({
      languages: [
        'javascript',
        'typescript',
        'html',
        'css',
        'json',
        'java',
        'sql',
        'groovy',
        'shell',
        'python'
      ]
    }),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: false
        })
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
