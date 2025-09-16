import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Layout from '@/views/Layout'
import Login from '@/views/Login'
import Me from '@/views/Me'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/Layout', component: Layout },
    { path: '/Login', component: Login },
    { path: '/Me', component: Me }
  ]
})

export default router
