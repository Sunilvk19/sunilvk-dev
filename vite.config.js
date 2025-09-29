import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: "/sunilvk-dev/",
  plugins: [react()],
});
