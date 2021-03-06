const appEnv = require(`./app.env.${process.env.NODE_ENV}`)

module.exports = {
  ssr: true,

  /*
   * Nuxt.js Telemetry settings
   */
  telemetry: false,

  /*
   * Server property
   */
  server: {
    port: appEnv.server.port,
    host: appEnv.server.host
  },

  /*
   * Headers of the page
   */
  head: {
    titleTemplate: '%s - Joonsang.com',
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Nanum%20Gothic:400,700,800|Lato:300,400|Poppins:300,400,800'
      }
    ]
  },

  /*
   * Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   * Global CSS
   */
  css: [],

  /*
   * Plugins to load before mounting the App
   */
  plugins: [],

  /*
   * Nuxt.js build-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],

  /*
   * Nuxt.js modules
   */
  modules: [
    '@nuxtjs/google-analytics',
    '@nuxtjs/moment',
    '@nuxtjs/vuetify',
    [
      'nuxt-i18n',
      {
        locales: ['kr', 'en'],
        defaultLocale: 'kr',
        vueI18n: {
          fallbackLocale: 'kr',
          messages: {
            kr: require('./locales/kr.json'),
            en: require('./locales/en.json')
          }
        }
      }
    ]
  ],

  /*
   * Google Analytics module configuration
   * https://github.com/nuxt-community/analytics-module
   */
  googleAnalytics: {
    id: appEnv.googleAnalytics.id
  },

  /*
   * vuetify module configuration
   * https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: '#ff7597',
          accent: '#ff0266',
          secondary: '#2a2a2a',
          info: '#26a69a',
          warning: '#ffc107',
          error: '#dd2c00',
          success: '#00e676'
        }
      }
    },
    defaultAssets: {
      font: {
        family: 'Roboto'
      },
      icons: 'mdi'
    }
  },

  /*
   * Build configuration
   */
  build: {
    /*
     * You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
