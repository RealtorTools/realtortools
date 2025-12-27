// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      title: 'RealtorTools - AI-Powered Suite for Real Estate Professionals',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'RealtorTools provides AI-powered tools for real estate professionals: CMAForge for market analysis, ListingReels for property videos, and ListingPhoto for photo enhancement.',
        },
        { name: 'og:title', content: 'RealtorTools - AI for Real Estate' },
        {
          name: 'og:description',
          content: 'AI-powered tools for real estate professionals',
        },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: 'https://realtortools.com' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  modules: [],

  compatibilityDate: '2024-12-27',
});
