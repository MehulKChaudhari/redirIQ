import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '^/[a-zA-Z0-9]{6}$': 'http://localhost:3000',
    },
  },
});