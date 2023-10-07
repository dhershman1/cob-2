import { createRouter, createWebHistory } from 'vue-router'

import About from './views/About.vue'
import Blueprints from './views/Blueprints.vue'
import Upload from './views/Upload.vue'
import Login from './views/Login.vue'
import Blueprint from './views/Blueprint.vue'

const routes = [{
  path: '/',
  redirect: '/blueprints'
}, {
  path: '/about',
  name: 'about',
  component: About
}, {
  path: '/blueprints/:id?',
  name: 'blueprints',
  component: Blueprints
}, {
  path: '/upload',
  name: 'upload',
  component: Upload
}, {
  path: '/login',
  name: 'login',
  component: Login
}, {
  path: '/blueprint/:id',
  name: 'blueprint',
  component: Blueprint
}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
