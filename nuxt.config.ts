// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  css: ['~/assets/css/main.css'],
  build: {
    transpile: ['vuetify'],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  },
  ssr:true
})
