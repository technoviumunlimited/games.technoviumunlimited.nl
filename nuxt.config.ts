import { DefineNuxtConfig } from "nuxt/config"
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      FIREBASE_APP_KEY: process.env.FIREBASE_APP_KEY,
      AUTH_DOMAIN: process.env.AUTH_DOMAIN,
      STORAGE_BUCKET: process.env.STORAGE_BUCKET,
      MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
      APP_ID: process.env.APP_ID,
      PROJECT_ID: process.env.PROJECT_ID,

    }
  },
  //modules: ['nuxt-unity-webgl'],
  devtools: { enabled: true },
  components: true,
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  
})
