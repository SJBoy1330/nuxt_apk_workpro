// https://v3.nuxtjs.org/api/configuration/nuxt.config
import { GlobalSettings } from "./environmentsetting";
const appEnv = process.env.NODE_ENV || 'development';
const base_url = GlobalSettings[appEnv].base_url;
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  publicRuntimeConfig: {
    base_url: GlobalSettings[appEnv].base_url
  },
  app: {
    head: {
      title: 'Framework Nuxt JS Custom',
      meta: [
        { name: 'description', content: 'Framework dasar nuxt3 js alphatech' }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: base_url + 'assets/vendor/swiperjs-6.6.2/swiper-bundle.min.css'
        },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css'
        },
        {
          rel: 'stylesheet',
          href: base_url + 'assets/css/style.css'
        },
        {
          rel: "stylesheet",
          href: "https://kit.fontawesome.com/b03824aa26.css"
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
        },
      ],
      script: [

        {
          src: base_url + 'assets/js/jquery-3.3.1.min.js'
        },
        {
          src: base_url + 'assets/js/popper.min.js'
        },
        {
          src: base_url + 'assets/vendor/bootstrap-5/js/bootstrap.bundle.min.js'
        },
        {
          src: base_url + 'assets/js/main.js'
        },
        {
          src: base_url + 'assets/js/pwa-services.js',
        },
        {
          src: base_url + 'assets/js/app.js'
        },
        {
          src: base_url + 'assets/js/script.js'
        },
        {
          src: base_url + 'assets/js/page/editprofile.js'
        }
      ]
    }
  }
})
