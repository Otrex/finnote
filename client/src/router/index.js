/* eslint-disable */
import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/index';
import authRoute from './auth'
import noteRoute from './note'
import appRoute from './app'


import DefaultComponentLayout from '../layout/DefaultComponentLayout.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes : [
  	...authRoute,
    ...noteRoute,
    ...appRoute,
    {
      name : "Default",
      path : '/',
      component : DefaultComponentLayout
    }
  ]
});


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters["auth/isLoggedIn"]) {
      next()
      return
    }
    next('/signin')
  } else {
    next()
  }
})

export default router;