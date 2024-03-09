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
      linkLineSignIn: process.env.LINK_LINE_SIGN_IN,
      blogLink: process.env.BLOG_LINK,
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
        { name:'google-adsense-account', content:'ca-pub-6651283997191475' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/app/himawari.ico' }
      ],
    }
    
  }
})
