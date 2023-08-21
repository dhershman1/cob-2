import { createRouter, createWebHashHistory } from 'vue-router'

import About from './views/About.vue'
import Home from './views/Home.vue'
import Blueprints from './views/Blueprints.vue'
import Upload from './views/Upload.vue'
import Profile from './views/Profile.vue'
import Login from './views/Login.vue'
import Blueprint from './views/Blueprint.vue'

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
  component: Blueprints
}, {
  path: '/upload',
  name: 'upload',
  component: Upload
}, {
  path: '/profile',
  name: 'profile',
  component: Profile
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
  history: createWebHashHistory(),
  routes
})

export default router
