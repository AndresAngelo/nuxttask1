//import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({

  css: ['vuetify/lib/styles/main.css', '~/assets/css/main.css'],
  build: {
    transpile: ['vuetify'],
  },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],

  devtools: { enabled: false },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  }
  
})
