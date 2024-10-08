// nuxt.config.js
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Sophie Bleau | PhD Student in Algebraic Geometry and Quantum Physics | University of Edinburgh',
      meta: [
        { hid: 'description', name: 'description', content: 'Welcome to the official website of Sophie Bleau, PhD student at the University of Edinburgh, exploring advanced topics in Algebraic Geometry and Quantum Physics.' }
      ],
    }
  },

  css: ['~/assets/css/main.css', 'primevue/resources/themes/aura-light-green/theme.css'],

  modules: ['@nuxt/image', 'nuxt-primevue', "shadcn-nuxt"],

  primevue: {
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  vite: {
    build: {
        rollupOptions: {
            external: '/images/Spiral-2.png'
        }
    }
  },

  compatibilityDate: '2024-08-13'
});