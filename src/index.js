import Vue from 'vue'
import Vuetify from 'vuetify'
import VueMeta from 'vue-meta'
import VueRouter from 'vue-router'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'
import VueAnalytics from 'vue-analytics'
import VueScrollTo from 'vue-scrollto'

import App from './App.vue'
import routes from './routes.js'

import '../node_modules/vuetify/dist/vuetify.min.css'

Vue.component('icon', Icon)
Vue.use(Vuetify)
Vue.use(VueRouter)
Vue.use(VueMeta)
Vue.use(VueScrollTo)

const router = new VueRouter({ routes: routes, mode: 'history' })

Vue.use(VueAnalytics, {
  id: 'UA-98270549-3',
  router
})

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
