import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react(), tsconfigPaths()],
  build: {
    lib: {
      entry: 'lib/index.ts',
      name: 'react-shorts-component', // Replace with your library name
      fileName: format => `react-shorts-component.${format}.js`,
      formats: ['es', 'cjs'], // Support for both ESM and CommonJS
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
})
