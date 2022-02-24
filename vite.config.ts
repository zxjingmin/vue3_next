import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import ElementPlus from 'unplugin-element-plus/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import viteCompression from 'vite-plugin-compression';

const port = 3000;

export default defineConfig(({ mode, command }) => {
  const port: number = parseInt(process.env.APP_PORT || '8000');
  const plugins = [
    vue(),
    AutoImport({
      imports: ['vue', 'vuex', 'vue-router'],
      resolvers: [ElementPlusResolver()],
      dts: 'src/auto-imports.d.ts',
    }),
    ElementPlus(),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: 'src/components.d.ts',
    }),
  ];

  command === 'build' && plugins.push(viteCompression({ threshold: 5000, verbose: false }));
  return {
    base: '/',
    plugins,
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/variables.scss" as *;\n',
        },
      },
    },
    server: {
      hostname: 'localhost',
      base: '/',
      port: port,
      host: 'localhost',
      open: true,
      proxy: {
        '/api/': {
          target: 'http://192.168.0.1x`:8080/',
          // target: 'http://localhost:8080/',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  };
});
