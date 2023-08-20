import { createRouter, createWebHashHistory } from 'vue-router'

import About from './views/About.vue'
import Home from './views/Home.vue'

const routes = [{
  path: '/',
  name: 'home',
  component: Home
}, {
  path: '/about',
  name: 'about',
  component: About
}, {
  path: '/blueprints',
  name: 'blueprints',
  component: () => import(/* webpackChunkName: "blueprints" */ './views/Blueprints.vue')
}, {
  path: '/upload',
  name: 'upload',
  component: () => import(/* webpackChunkName: "upload" */ './views/Upload.vue')
}, {
  path: '/profile',
  name: 'profile',
  component: () => import(/* webpackChunkName: "profile" */ './views/Profile.vue')
}, {
  path: '/login',
  name: 'login',
  component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
}
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
