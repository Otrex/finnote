/* eslint-disable */
require('./utils/compact')
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faBell, faCheckSquare, faBars,
	faUserPlus, faPlusSquare, faSquare, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBars)
library.add(faUserPlus)
library.add(faUserSecret)
library.add(faPlusSquare)
library.add(faCheckSquare)
library.add(faSquare)
library.add(faBell)
library.add(faTimes)

Vue.component('ico', FontAwesomeIcon)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
