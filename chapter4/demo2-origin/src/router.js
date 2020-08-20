import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import Home from './views/Home.vue'
import List from './views/List.vue'
import User from './views/User.vue'
import Add from './views/Add.vue'

// const List = () => import(/* webpackChunkName: "list" */ './views/List.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        {
          path: 'list',
          name: 'list',
          component: List
        },
        {
          path: 'user',
          name: 'user',
          component: User
        },
      ]
    },
    {
      path: '/add',
      name: 'add',
      component: Add
    },
  ]
})
