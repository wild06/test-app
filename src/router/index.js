import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Layout/home.vue'
import Login from '@/views/Login'
import Me from '@/views/Layout/me.vue'
import Cart from '@/views/Layout/cart.vue'
import Message from '@/views/Layout/message.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        { path: '/home', component: Home },
        { path: '/cart', component: Cart },
        { path: '/message', component: Message },
        { path: '/me', component: Me }
      ]
    },
    { path: '/login', component: Login }
  ]
})

export default router
