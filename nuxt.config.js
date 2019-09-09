module.exports = {
  mode: 'universal',

  /*
   * Server property
   */
  server: {
    port: 3000,
    host: '0.0.0.0'
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
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Material+Icons'
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.10.1/css/all.css'
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
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],

  /*
   * Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/google-analytics',
    '@nuxtjs/moment'
  ],

  /*
   * Axios module configuration
   * See https://axios.nuxtjs.org/options
   */
  axios: {},

  /*
   * Google Analytics module configuration
   */
  googleAnalytics: {
    id: 'UA-94124239-1'
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
