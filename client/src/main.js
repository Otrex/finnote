/* eslint-disable */

import Vue from './config'
import router from './router/index'
import store from "./store/index"
import App from './App'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, store,
  components: { App },
  template: '<App/>'
})
