import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _287cd84d = () => interopDefault(import('..\\pages\\Charts.vue' /* webpackChunkName: "pages_Charts" */))
const _05ad5a30 = () => interopDefault(import('..\\pages\\GoogleMaps.vue' /* webpackChunkName: "pages_GoogleMaps" */))
const _a16e0c32 = () => interopDefault(import('..\\pages\\Widgets.vue' /* webpackChunkName: "pages_Widgets" */))
const _6bbd0552 = () => interopDefault(import('..\\pages\\base\\Breadcrumbs.vue' /* webpackChunkName: "pages_base_Breadcrumbs" */))
const _16fff1aa = () => interopDefault(import('..\\pages\\base\\Cards.vue' /* webpackChunkName: "pages_base_Cards" */))
const _3ad9644c = () => interopDefault(import('..\\pages\\base\\Carousels.vue' /* webpackChunkName: "pages_base_Carousels" */))
const _008a18a6 = () => interopDefault(import('..\\pages\\base\\Collapses.vue' /* webpackChunkName: "pages_base_Collapses" */))
const _43df4b90 = () => interopDefault(import('..\\pages\\base\\Jumbotrons.vue' /* webpackChunkName: "pages_base_Jumbotrons" */))
const _34de05db = () => interopDefault(import('..\\pages\\base\\ListGroups.vue' /* webpackChunkName: "pages_base_ListGroups" */))
const _0d073e2c = () => interopDefault(import('..\\pages\\base\\Navbars.vue' /* webpackChunkName: "pages_base_Navbars" */))
const _9f00998e = () => interopDefault(import('..\\pages\\base\\Navs.vue' /* webpackChunkName: "pages_base_Navs" */))
const _7f979c20 = () => interopDefault(import('..\\pages\\base\\Paginations.vue' /* webpackChunkName: "pages_base_Paginations" */))
const _0f743e77 = () => interopDefault(import('..\\pages\\base\\Popovers.vue' /* webpackChunkName: "pages_base_Popovers" */))
const _157942d4 = () => interopDefault(import('..\\pages\\base\\ProgressBars.vue' /* webpackChunkName: "pages_base_ProgressBars" */))
const _505f962a = () => interopDefault(import('..\\pages\\base\\Switches.vue' /* webpackChunkName: "pages_base_Switches" */))
const _04b457f2 = () => interopDefault(import('..\\pages\\base\\Tabs.vue' /* webpackChunkName: "pages_base_Tabs" */))
const _7d90f7d9 = () => interopDefault(import('..\\pages\\base\\Tooltips.vue' /* webpackChunkName: "pages_base_Tooltips" */))
const _b3bb869a = () => interopDefault(import('..\\pages\\buttons\\BrandButtons.vue' /* webpackChunkName: "pages_buttons_BrandButtons" */))
const _25db705f = () => interopDefault(import('..\\pages\\buttons\\ButtonGroups.vue' /* webpackChunkName: "pages_buttons_ButtonGroups" */))
const _1a2acace = () => interopDefault(import('..\\pages\\buttons\\Dropdowns.vue' /* webpackChunkName: "pages_buttons_Dropdowns" */))
const _560649db = () => interopDefault(import('..\\pages\\buttons\\StandardButtons.vue' /* webpackChunkName: "pages_buttons_StandardButtons" */))
const _75713aa4 = () => interopDefault(import('..\\pages\\charts\\BarExample.vue' /* webpackChunkName: "pages_charts_BarExample" */))
const _68a1d10b = () => interopDefault(import('..\\pages\\charts\\DoughnutExample.vue' /* webpackChunkName: "pages_charts_DoughnutExample" */))
const _07012359 = () => interopDefault(import('..\\pages\\charts\\LineExample.vue' /* webpackChunkName: "pages_charts_LineExample" */))
const _40b5e0ea = () => interopDefault(import('..\\pages\\charts\\PieExample.vue' /* webpackChunkName: "pages_charts_PieExample" */))
const _1206e1e8 = () => interopDefault(import('..\\pages\\charts\\PolarAreaExample.vue' /* webpackChunkName: "pages_charts_PolarAreaExample" */))
const _21d94491 = () => interopDefault(import('..\\pages\\charts\\RadarExample.vue' /* webpackChunkName: "pages_charts_RadarExample" */))
const _179bc4a0 = () => interopDefault(import('..\\pages\\dashboard\\CalloutChartExample.vue' /* webpackChunkName: "pages_dashboard_CalloutChartExample" */))
const _02763d53 = () => interopDefault(import('..\\pages\\dashboard\\CardBarChartExample.vue' /* webpackChunkName: "pages_dashboard_CardBarChartExample" */))
const _3ee234fd = () => interopDefault(import('..\\pages\\dashboard\\CardLine1ChartExample.vue' /* webpackChunkName: "pages_dashboard_CardLine1ChartExample" */))
const _e0e7da04 = () => interopDefault(import('..\\pages\\dashboard\\CardLine2ChartExample.vue' /* webpackChunkName: "pages_dashboard_CardLine2ChartExample" */))
const _3f941e02 = () => interopDefault(import('..\\pages\\dashboard\\CardLine3ChartExample.vue' /* webpackChunkName: "pages_dashboard_CardLine3ChartExample" */))
const _e293d8de = () => interopDefault(import('..\\pages\\dashboard\\MainChartExample.vue' /* webpackChunkName: "pages_dashboard_MainChartExample" */))
const _04a9c08e = () => interopDefault(import('..\\pages\\dashboard\\SocialBoxChartExample.vue' /* webpackChunkName: "pages_dashboard_SocialBoxChartExample" */))
const _3170084b = () => interopDefault(import('..\\pages\\editors\\CodeEditors.vue' /* webpackChunkName: "pages_editors_CodeEditors" */))
const _6bfd690b = () => interopDefault(import('..\\pages\\editors\\TextEditors.vue' /* webpackChunkName: "pages_editors_TextEditors" */))
const _47d408d6 = () => interopDefault(import('..\\pages\\forms\\AdvancedForms.vue' /* webpackChunkName: "pages_forms_AdvancedForms" */))
const _2545f670 = () => interopDefault(import('..\\pages\\forms\\BasicForms.vue' /* webpackChunkName: "pages_forms_BasicForms" */))
const _62a4fa1f = () => interopDefault(import('..\\pages\\forms\\ValidationForms.vue' /* webpackChunkName: "pages_forms_ValidationForms" */))
const _7d1143c5 = () => interopDefault(import('..\\pages\\icons\\CoreUIIcons.vue' /* webpackChunkName: "pages_icons_CoreUIIcons" */))
const _4cf82a65 = () => interopDefault(import('..\\pages\\icons\\Flags.vue' /* webpackChunkName: "pages_icons_Flags" */))
const _3a6945f2 = () => interopDefault(import('..\\pages\\icons\\FontAwesome.vue' /* webpackChunkName: "pages_icons_FontAwesome" */))
const _2a1b805c = () => interopDefault(import('..\\pages\\icons\\SimpleLineIcons.vue' /* webpackChunkName: "pages_icons_SimpleLineIcons" */))
const _61096277 = () => interopDefault(import('..\\pages\\notifications\\Alerts.vue' /* webpackChunkName: "pages_notifications_Alerts" */))
const _2f03a490 = () => interopDefault(import('..\\pages\\notifications\\Badges.vue' /* webpackChunkName: "pages_notifications_Badges" */))
const _cf13c874 = () => interopDefault(import('..\\pages\\notifications\\Modals.vue' /* webpackChunkName: "pages_notifications_Modals" */))
const _56c4f5ea = () => interopDefault(import('..\\pages\\notifications\\Toastr.vue' /* webpackChunkName: "pages_notifications_Toastr" */))
const _447b9f5d = () => interopDefault(import('..\\pages\\pages\\Login.vue' /* webpackChunkName: "pages_pages_Login" */))
const _6f99613d = () => interopDefault(import('..\\pages\\pages\\Page404.vue' /* webpackChunkName: "pages_pages_Page404" */))
const _b771830c = () => interopDefault(import('..\\pages\\pages\\Page500.vue' /* webpackChunkName: "pages_pages_Page500" */))
const _2c67605f = () => interopDefault(import('..\\pages\\pages\\Register.vue' /* webpackChunkName: "pages_pages_Register" */))
const _b88a2354 = () => interopDefault(import('..\\pages\\plugins\\Calendar.vue' /* webpackChunkName: "pages_plugins_Calendar" */))
const _a083fbb6 = () => interopDefault(import('..\\pages\\plugins\\Draggable.vue' /* webpackChunkName: "pages_plugins_Draggable" */))
const _f883f2dc = () => interopDefault(import('..\\pages\\plugins\\Spinners.vue' /* webpackChunkName: "pages_plugins_Spinners" */))
const _297b3677 = () => interopDefault(import('..\\pages\\tables\\DataTable.vue' /* webpackChunkName: "pages_tables_DataTable" */))
const _5e7c0c81 = () => interopDefault(import('..\\pages\\tables\\Table.vue' /* webpackChunkName: "pages_tables_Table" */))
const _74b124c2 = () => interopDefault(import('..\\pages\\tables\\Tables.vue' /* webpackChunkName: "pages_tables_Tables" */))
const _7d417f9e = () => interopDefault(import('..\\pages\\theme\\Colors.vue' /* webpackChunkName: "pages_theme_Colors" */))
const _f35b1132 = () => interopDefault(import('..\\pages\\theme\\ColorTheme.vue' /* webpackChunkName: "pages_theme_ColorTheme" */))
const _3aff2e77 = () => interopDefault(import('..\\pages\\theme\\ColorView.vue' /* webpackChunkName: "pages_theme_ColorView" */))
const _3e1cc3f0 = () => interopDefault(import('..\\pages\\theme\\Typography.vue' /* webpackChunkName: "pages_theme_Typography" */))
const _2ff5d4cb = () => interopDefault(import('..\\pages\\users\\User.vue' /* webpackChunkName: "pages_users_User" */))
const _5b1f3490 = () => interopDefault(import('..\\pages\\users\\Users.vue' /* webpackChunkName: "pages_users_Users" */))
const _6db142cd = () => interopDefault(import('..\\pages\\users\\UsersData.js' /* webpackChunkName: "pages_users_UsersData" */))
const _89c1d2a4 = () => interopDefault(import('..\\pages\\widgets\\Widget03.vue' /* webpackChunkName: "pages_widgets_Widget03" */))
const _fc700bc0 = () => interopDefault(import('..\\pages\\apps\\email\\Compose.vue' /* webpackChunkName: "pages_apps_email_Compose" */))
const _516d5694 = () => interopDefault(import('..\\pages\\apps\\email\\Inbox.vue' /* webpackChunkName: "pages_apps_email_Inbox" */))
const _fff573d6 = () => interopDefault(import('..\\pages\\apps\\email\\Message.vue' /* webpackChunkName: "pages_apps_email_Message" */))
const _fab1f226 = () => interopDefault(import('..\\pages\\apps\\invoicing\\Invoice.vue' /* webpackChunkName: "pages_apps_invoicing_Invoice" */))
const _103eb935 = () => interopDefault(import('..\\pages\\editors\\_examples.js' /* webpackChunkName: "pages_editors__examples" */))
const _5aee050d = () => interopDefault(import('..\\pages\\plugins\\_layouts.js' /* webpackChunkName: "pages_plugins__layouts" */))
const _13c49f9a = () => interopDefault(import('..\\pages\\tables\\_data.js' /* webpackChunkName: "pages_tables__data" */))
const _1421d2aa = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/Charts",
      component: _287cd84d,
      name: "Charts"
    }, {
      path: "/GoogleMaps",
      component: _05ad5a30,
      name: "GoogleMaps"
    }, {
      path: "/Widgets",
      component: _a16e0c32,
      name: "Widgets"
    }, {
      path: "/base/Breadcrumbs",
      component: _6bbd0552,
      name: "base-Breadcrumbs"
    }, {
      path: "/base/Cards",
      component: _16fff1aa,
      name: "base-Cards"
    }, {
      path: "/base/Carousels",
      component: _3ad9644c,
      name: "base-Carousels"
    }, {
      path: "/base/Collapses",
      component: _008a18a6,
      name: "base-Collapses"
    }, {
      path: "/base/Jumbotrons",
      component: _43df4b90,
      name: "base-Jumbotrons"
    }, {
      path: "/base/ListGroups",
      component: _34de05db,
      name: "base-ListGroups"
    }, {
      path: "/base/Navbars",
      component: _0d073e2c,
      name: "base-Navbars"
    }, {
      path: "/base/Navs",
      component: _9f00998e,
      name: "base-Navs"
    }, {
      path: "/base/Paginations",
      component: _7f979c20,
      name: "base-Paginations"
    }, {
      path: "/base/Popovers",
      component: _0f743e77,
      name: "base-Popovers"
    }, {
      path: "/base/ProgressBars",
      component: _157942d4,
      name: "base-ProgressBars"
    }, {
      path: "/base/Switches",
      component: _505f962a,
      name: "base-Switches"
    }, {
      path: "/base/Tabs",
      component: _04b457f2,
      name: "base-Tabs"
    }, {
      path: "/base/Tooltips",
      component: _7d90f7d9,
      name: "base-Tooltips"
    }, {
      path: "/buttons/BrandButtons",
      component: _b3bb869a,
      name: "buttons-BrandButtons"
    }, {
      path: "/buttons/ButtonGroups",
      component: _25db705f,
      name: "buttons-ButtonGroups"
    }, {
      path: "/buttons/Dropdowns",
      component: _1a2acace,
      name: "buttons-Dropdowns"
    }, {
      path: "/buttons/StandardButtons",
      component: _560649db,
      name: "buttons-StandardButtons"
    }, {
      path: "/charts/BarExample",
      component: _75713aa4,
      name: "charts-BarExample"
    }, {
      path: "/charts/DoughnutExample",
      component: _68a1d10b,
      name: "charts-DoughnutExample"
    }, {
      path: "/charts/LineExample",
      component: _07012359,
      name: "charts-LineExample"
    }, {
      path: "/charts/PieExample",
      component: _40b5e0ea,
      name: "charts-PieExample"
    }, {
      path: "/charts/PolarAreaExample",
      component: _1206e1e8,
      name: "charts-PolarAreaExample"
    }, {
      path: "/charts/RadarExample",
      component: _21d94491,
      name: "charts-RadarExample"
    }, {
      path: "/dashboard/CalloutChartExample",
      component: _179bc4a0,
      name: "dashboard-CalloutChartExample"
    }, {
      path: "/dashboard/CardBarChartExample",
      component: _02763d53,
      name: "dashboard-CardBarChartExample"
    }, {
      path: "/dashboard/CardLine1ChartExample",
      component: _3ee234fd,
      name: "dashboard-CardLine1ChartExample"
    }, {
      path: "/dashboard/CardLine2ChartExample",
      component: _e0e7da04,
      name: "dashboard-CardLine2ChartExample"
    }, {
      path: "/dashboard/CardLine3ChartExample",
      component: _3f941e02,
      name: "dashboard-CardLine3ChartExample"
    }, {
      path: "/dashboard/MainChartExample",
      component: _e293d8de,
      name: "dashboard-MainChartExample"
    }, {
      path: "/dashboard/SocialBoxChartExample",
      component: _04a9c08e,
      name: "dashboard-SocialBoxChartExample"
    }, {
      path: "/editors/CodeEditors",
      component: _3170084b,
      name: "editors-CodeEditors"
    }, {
      path: "/editors/TextEditors",
      component: _6bfd690b,
      name: "editors-TextEditors"
    }, {
      path: "/forms/AdvancedForms",
      component: _47d408d6,
      name: "forms-AdvancedForms"
    }, {
      path: "/forms/BasicForms",
      component: _2545f670,
      name: "forms-BasicForms"
    }, {
      path: "/forms/ValidationForms",
      component: _62a4fa1f,
      name: "forms-ValidationForms"
    }, {
      path: "/icons/CoreUIIcons",
      component: _7d1143c5,
      name: "icons-CoreUIIcons"
    }, {
      path: "/icons/Flags",
      component: _4cf82a65,
      name: "icons-Flags"
    }, {
      path: "/icons/FontAwesome",
      component: _3a6945f2,
      name: "icons-FontAwesome"
    }, {
      path: "/icons/SimpleLineIcons",
      component: _2a1b805c,
      name: "icons-SimpleLineIcons"
    }, {
      path: "/notifications/Alerts",
      component: _61096277,
      name: "notifications-Alerts"
    }, {
      path: "/notifications/Badges",
      component: _2f03a490,
      name: "notifications-Badges"
    }, {
      path: "/notifications/Modals",
      component: _cf13c874,
      name: "notifications-Modals"
    }, {
      path: "/notifications/Toastr",
      component: _56c4f5ea,
      name: "notifications-Toastr"
    }, {
      path: "/pages/Login",
      component: _447b9f5d,
      name: "pages-Login"
    }, {
      path: "/pages/Page404",
      component: _6f99613d,
      name: "pages-Page404"
    }, {
      path: "/pages/Page500",
      component: _b771830c,
      name: "pages-Page500"
    }, {
      path: "/pages/Register",
      component: _2c67605f,
      name: "pages-Register"
    }, {
      path: "/plugins/Calendar",
      component: _b88a2354,
      name: "plugins-Calendar"
    }, {
      path: "/plugins/Draggable",
      component: _a083fbb6,
      name: "plugins-Draggable"
    }, {
      path: "/plugins/Spinners",
      component: _f883f2dc,
      name: "plugins-Spinners"
    }, {
      path: "/tables/DataTable",
      component: _297b3677,
      name: "tables-DataTable"
    }, {
      path: "/tables/Table",
      component: _5e7c0c81,
      name: "tables-Table"
    }, {
      path: "/tables/Tables",
      component: _74b124c2,
      name: "tables-Tables"
    }, {
      path: "/theme/Colors",
      component: _7d417f9e,
      name: "theme-Colors"
    }, {
      path: "/theme/ColorTheme",
      component: _f35b1132,
      name: "theme-ColorTheme"
    }, {
      path: "/theme/ColorView",
      component: _3aff2e77,
      name: "theme-ColorView"
    }, {
      path: "/theme/Typography",
      component: _3e1cc3f0,
      name: "theme-Typography"
    }, {
      path: "/users/User",
      component: _2ff5d4cb,
      name: "users-User"
    }, {
      path: "/users/Users",
      component: _5b1f3490,
      name: "users-Users"
    }, {
      path: "/users/UsersData",
      component: _6db142cd,
      name: "users-UsersData"
    }, {
      path: "/widgets/Widget03",
      component: _89c1d2a4,
      name: "widgets-Widget03"
    }, {
      path: "/apps/email/Compose",
      component: _fc700bc0,
      name: "apps-email-Compose"
    }, {
      path: "/apps/email/Inbox",
      component: _516d5694,
      name: "apps-email-Inbox"
    }, {
      path: "/apps/email/Message",
      component: _fff573d6,
      name: "apps-email-Message"
    }, {
      path: "/apps/invoicing/Invoice",
      component: _fab1f226,
      name: "apps-invoicing-Invoice"
    }, {
      path: "/editors/:examples?",
      component: _103eb935,
      name: "editors-examples"
    }, {
      path: "/plugins/:layouts?",
      component: _5aee050d,
      name: "plugins-layouts"
    }, {
      path: "/tables/:data?",
      component: _13c49f9a,
      name: "tables-data"
    }, {
      path: "/",
      component: _1421d2aa,
      name: "index"
    }],

    fallback: false
  })
}
