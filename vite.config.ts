import path from 'path';
import { defineConfig } from 'vite';

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
        }
    },
    build: {
        
    },
    optimizeDeps: {

    }
})
