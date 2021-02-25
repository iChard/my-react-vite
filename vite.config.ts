import path from 'path';
import * as PostScss from 'postcss-scss';
import { defineConfig, UserConfig } from 'vite';

import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [reactRefresh()],
    
    alias: [{
        find: "@",
        replacement: path.resolve(__dirname, "src")
    }],
    css: {
        modules: {
            scopeBehaviour: 'local',
            generateScopedName: '[name]_[local]_[hash:base64:5]',
            hashPrefix: 'prefix',
            localsConvention: 'camelCaseOnly'
        },
        postcss: path.resolve(__dirname, './postcss.config.js'),

    },
    publicDir: './public',
    json: {
        stringify: true
    },
    logLevel: 'info',
    server: {
        host: '127.0.0.1',
        port: 3000,
        proxy: {
            '/api': {
                target: 'https://jsonplaceholder.typicode.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
            '^/fallback/.*': {
                target: 'http://jsonplaceholder.typicode.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/fallback/, ''),
            }
        }
    },
    build: {
        rollupOptions: {
            // external: ['react', 'react-dom']
        },
        assetsInlineLimit: 4096,// 小于这个值会被内联为base64，以减少http请求
        cssCodeSplit: true,// 当为false时整个项目的所有chunk的css都被打包到一个css文件中
        minify: 'terser',
    },
    optimizeDeps: {

    },
    esbuild: {

    },
    
})

