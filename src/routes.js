import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import LoginPage from './components/LoginPage.vue'


Vue.use(VueRouter)

const routes = [
    {path: '/', component: Home, name: 'home'},
    {path: '/login', component: LoginPage}
]

export const router = new VueRouter({
    mode: 'history',
    routes
})
