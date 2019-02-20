import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '..\\node_modules\\bootstrap\\dist\\css\\bootstrap.css'

import '..\\node_modules\\bootstrap-vue\\dist\\bootstrap-vue.css'

import '..\\node_modules\\@coreui\\icons\\css\\coreui-icons.min.css'

import '..\\node_modules\\flag-icon-css\\css\\flag-icon.min.css'

import '..\\assets\\scss\\style.scss'

import '..\\node_modules\\font-awesome\\scss\\font-awesome.scss'

import '..\\node_modules\\simple-line-icons\\scss\\simple-line-icons.scss'

import '..\\node_modules\\codemirror\\lib\\codemirror.css'

import '..\\node_modules\\codemirror\\addon\\merge\\merge.css'

import '..\\node_modules\\codemirror\\theme\\base16-dark.css'

import _6f6c098b from '..\\layouts\\default.vue'
import _ab0f42e6 from '..\\layouts\\DefaultAside.vue'
import _151e77ee from '..\\layouts\\DefaultHeaderDropdown.vue'
import _7987d37e from '..\\layouts\\DefaultHeaderDropdownAccnt.vue'
import _7a386eb0 from '..\\layouts\\DefaultHeaderDropdownMssgs.vue'
import _7a44b8a7 from '..\\layouts\\DefaultHeaderDropdownNotif.vue'
import _7a92e505 from '..\\layouts\\DefaultHeaderDropdownTasks.vue'

const layouts = { "_default": _6f6c098b,"_DefaultAside": _ab0f42e6,"_DefaultHeaderDropdown": _151e77ee,"_DefaultHeaderDropdownAccnt": _7987d37e,"_DefaultHeaderDropdownMssgs": _7a386eb0,"_DefaultHeaderDropdownNotif": _7a44b8a7,"_DefaultHeaderDropdownTasks": _7a92e505 }

export default {
  head: {"title":"nuxt-coreui-pro","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"My good Nuxt.js project"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"}],"style":[],"script":[]},

  render(h, props) {
    const loadingEl = h('NuxtLoading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll')
          })
        }
      }
    }, [ templateEl ])

    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,
      transitionEl
    ])
  },
  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: ''
  }),
  beforeCreate() {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created() {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (process.client) {
      window.$nuxt = this
      this.refreshOnlineStatus()
      // Setup the listeners
      window.addEventListener('online', this.refreshOnlineStatus)
      window.addEventListener('offline', this.refreshOnlineStatus)
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },

  mounted() {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },

  computed: {
    isOffline() {
      return !this.isOnline
    }
  },
  methods: {
    refreshOnlineStatus() {
      if (process.client) {
        if (typeof window.navigator.onLine === 'undefined') {
          // If the browser doesn't support connection status reports
          // assume that we are online because most apps' only react
          // when they now that the connection has been interrupted
          this.isOnline = true
        } else {
          this.isOnline = window.navigator.onLine
        }
      }
    },

    errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },

    setLayout(layout) {
      if(layout && typeof layout !== 'string') throw new Error('[nuxt] Avoid using non-string value as layout property.')

      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      this.layoutName = layout
      this.layout = layouts['_' + layout]
      return this.layout
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      return Promise.resolve(layouts['_' + layout])
    }
  },
  components: {
    NuxtLoading
  }
}
