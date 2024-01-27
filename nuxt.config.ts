// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt'],
  css: ['~/assets/css/main.css'],
  build: {
    transpile: ['vuetify'],
  },
  runtimeConfig: {
    public: {
      contactLink: process.env.CONTACT_LINK,
      lineChannelId: process.env.LINE_CHANNEL_ID,
      linkLineSignIn: process.env.LINK_LINE_SIGN_IN 
    }
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    }
  },
  app: {
    baseURL: '/app/',
    head: {
      title:'Himawari Project',
      htmlAttrs: {
        lang: 'ja', prefix: 'og: https://ogp.me/ns#'
      },
      meta: [
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Himawari Project' },
        { property: 'og:image', content: '/app/himawari.ico', },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/app/himawari.ico' }
      ],
    }
    
  }
})
