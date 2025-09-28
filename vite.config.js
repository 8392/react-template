import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig(() => {
  const alias = {
    '@': fileURLToPath(new URL('./src', import.meta.url)),
  }

  return {
    plugins: [
      react(),
      tailwindcss(),
    ],
    resolve: {
      alias,
      extensions: ['.js', '.jsx', '.tsx', '.ts', '.json', '.css', '.scss'],
    },
  }
})
