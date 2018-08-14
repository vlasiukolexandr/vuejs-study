import Vue from 'vue'
import VueCookie from 'vue-cookies'

import App from './App.vue'
import {router} from './routes'
import store from './store'

import {getCookie} from "./methods/cookies";
import moment from 'moment'

Vue.use(VueCookie)

Vue.filter('formatDate', value => {
  if (value)
    return moment(String(value)).format('MM/DD/YYYY hh:mm')
})

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


