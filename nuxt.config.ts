import { DefineNuxtConfig } from "nuxt/config"
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Technovium Unlimited',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        // Add more meta tags below as needed
        { hid: 'description', name: 'description', content: 'Educatieve projecten, 3D omgevingen en spellen, gemaakt door ROC studenten en docenten.' },
        // Other meta tags like og:title, og:description, og:image for social sharing
        { property: 'og:title', content: 'Technovium Unlimited' },
        { property: 'og:description', content: 'Educatieve projecten, 3D omgevingen en spellen, gemaakt door ROC studenten en docenten.' },
        { property: 'og:image', content: 'https://technoviumunlimited.nl/img/fulllogo.png' },
        // Twitter card meta tags
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Technovium Unlimited' },
        { name: 'twitter:description', content: 'Educatieve projecten, 3D omgevingen en spellen, gemaakt door ROC studenten en docenten.' },
        { name: 'twitter:image', content: 'https://technoviumunlimited.nl/img/fulllogo.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/img/logo.svg' }, // Update the href with your favicon file name and extension
      ],
    },
  },
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
  //ssr:false, //for now we need later to fix this for SEO
  app: {
    head: {
      link: [
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' },
      ],
    },
  },
  //ssr:false, //for now we need later to fix this for SEO
  //modules: ['nuxt-unity-webgl'],
  modules: [
    // Load image optimization
    "@nuxt/image",

    //Load Unity Webgl
    "nuxt-unity-webgl"
  ],
  devtools: { enabled: true },
  components: true,
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  
  image: {
    // The screen sizes predefined by `@nuxt/image`:
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },
  }
})
