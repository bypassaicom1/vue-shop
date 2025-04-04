import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from "path"
// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [vue()],
  server: {
    port: 8091,

  },
  resolve:{
    alias:{
      "@":resolve(__dirname,"./src")
    }
  }
 
})
