import Vue from 'vue'
import VueCookie from 'vue-cookies'

import App from './App.vue'
import {router} from './routes'
import store from './store'

import {getCookie} from "./methods/cookies";

Vue.use(VueCookie)



router.beforeEach((to, from, next) => {
  if(!getCookie('user_session') && to.path !== '/login') {
    next({path: '/login'})
  }else if(getCookie('user_session') && to.path === '/login'){
    next({path: '/'})
  }
  next()
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})


