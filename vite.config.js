import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  base: '/',  // <-- set this to '/' for custom domain root
  plugins: [react()],
});
