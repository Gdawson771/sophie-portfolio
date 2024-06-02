// nuxt.config.js
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css','primevue/resources/themes/aura-light-green/theme.css'],
  modules: [
    '@nuxt/image',
    'nuxt-primevue'
  ],
  primevue: {
      /* Options */
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
  }
});
