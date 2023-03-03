// https://v3.nuxtjs.org/api/configuration/nuxt.config
const base_url = 'http://localhost:3001/';
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  app: {
    head: {
      title: 'Framework Nuxt JS Custom',
      meta: [
        { name: 'description', content: 'Framework dasar nuxt3 js alphatech' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
      ],
      script: [
        { src: base_url + 'assets/js/script' }
      ]
    }
  },
  runtimeConfig: {
    currencyKey: process.env.CURRENCY_API_KEY,
    apiBase: 'http://api.workpro.id/',
    urlBase: base_url
  }
})
