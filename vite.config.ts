import path from 'path';
import { defineConfig, UserConfig } from 'vite';

import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig(({mode, command}) => {
    return {
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
            }
        },
        build: {
            rollupOptions: {
                // external: ['react', 'react-dom']
            },
        },
        optimizeDeps: {
    
        },
    }
})

