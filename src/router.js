import { createRouter, createWebHistory } from 'vue-router'

import About from './views/About.vue'
import Blueprints from './views/Blueprints.vue'
import Upload from './views/Upload.vue'
import Profile from './views/Profile.vue'
import Login from './views/Login.vue'
import Blueprint from './views/Blueprint.vue'
import Favorites from './views/Favorites.vue'

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
  path: '/profile/:id?',
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
}, {
  path: '/favorites',
  name: 'favorites',
  component: Favorites
}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
