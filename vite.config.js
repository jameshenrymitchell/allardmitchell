import { sveltekit } from '@sveltejs/kit/vite'

const config = {
  plugins: [sveltekit()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "src/scss/variables.scss" as *;'
      }
    }
  }
}

export default config