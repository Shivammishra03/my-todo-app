// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
  ],

  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },

  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "~/assets/css/main.css"
  ],

  imports: {
    dirs: ["./stores"],
  },

  compatibilityDate: "2024-10-19"
})