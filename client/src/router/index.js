import Vue from 'vue'
import Router from 'vue-router'

import Welcome from '@/pages/Welcome'
import Budget from '@/pages/Budget'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/budget',
      name: 'Budget',
      component: Budget
    }
  ]
})
