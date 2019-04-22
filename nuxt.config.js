const path = require('path')
const pkg = require('./package')
const changeLoaderOptions = (loaders) => {
  if (loaders) {
    for (const loader of loaders) {
      if (loader.loader === 'sass-loader') {
        Object.assign(loader.options, {
          includePaths: ['./assets']
        })
      }
    }
  }
}

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#42A5CC' },

  /*
  ** Global CSS
  */
  css: [
    /* Import Bootstrap Vue Styles */
    'bootstrap-vue/dist/bootstrap-vue.css',
    // CoreUI Icons Set
    '@coreui/icons/css/coreui-icons.min.css',
    /* Import Flag Icons Set */
    'flag-icon-css/css/flag-icon.min.css',
    // Import Main styles for this application
    { src: 'assets/scss/style.scss', lang: 'scss' },
    /* Import Font Awesome Icons Set */
    { src: 'font-awesome/scss/font-awesome.scss', lang: 'scss' },
    /* Import Simple Line Icons Set */
    { src: 'simple-line-icons/scss/simple-line-icons.scss', lang: 'scss' },
    // lib css
    'codemirror/lib/codemirror.css',
    // merge css
    'codemirror/addon/merge/merge.css',
    // theme css
    'codemirror/theme/base16-dark.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/nuxt-codemirror-plugin.js', ssr: false },
    { src: '~plugins/vue-tables-2.js', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    vendor: ['vue-tables-2'],
    extend(config, { isDev, isClient }) {
      config.resolve.alias.shared = path.resolve(__dirname, 'shared')

      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })

        const vueLoader = config.module.rules.find(
          ({ loader }) => loader === 'vue-loader')
        const { options: { loaders } } = vueLoader || { options: {} }

        if (loaders) {
          for (const loader of Object.values(loaders)) {
            changeLoaderOptions(Array.isArray(loader) ? loader : [loader])
          }
        }

        config.module.rules.forEach(rule => changeLoaderOptions(rule.use))
      }
    }
  }
}
