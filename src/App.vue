<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <div class="container">
    <header>
      <div class="navbar__full">
        <div class="brand">
          <router-link
            class="brand brand--lg-view"
            to="/blueprints"
          >
            {{ $t('cob') }}
          </router-link>
          <router-link
            class="brand brand--sm-view"
            to="/blueprints"
          >
            {{ $t('cob-ac') }}
          </router-link>
        </div>
        <nav class="navbar">
          <ul class="navbar__links">
            <li>
              <router-link to="/blueprints">
                {{ $t('nav.blueprints') }}
              </router-link>
            </li>
            <li v-if="store.isAuthed">
              <router-link to="/blueprints/abc123">
                {{ $t('nav.my-bp') }}
              </router-link>
            </li>
            <li>
              <router-link to="/about">
                {{ $t('nav.about') }}
              </router-link>
            </li>
            <li v-if="store.isAuthed">
              <router-link to="/upload">
                {{ $t('nav.upload') }}
              </router-link>
            </li>
            <li v-if="store.isAuthed">
              <router-link to="/logout">
                {{ $t('nav.logout') }}
              </router-link>
            </li>
            <li v-else>
              <router-link to="/login">
                {{ $t('nav.login') }}
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
      <input
        id="nav-toggle"
        type="checkbox"
        class="nav-toggle"
      >
      <label
        for="nav-toggle"
        class="toggle-label"
      >
        <span />
      </label>
      <nav class="navbar__mobile">
        <ul>
          <li>
            <router-link to="/blueprints">
              {{ $t('nav.blueprints') }}
            </router-link>
          </li>
          <li v-if="store.isAuthed">
            <router-link to="/blueprints">
              {{ $t('nav.my-bp') }}
            </router-link>
          </li>
          <li>
            <router-link to="/about">
              {{ $t('nav.about') }}
            </router-link>
          </li>
          <li v-if="store.isAuthed">
            <router-link to="/upload">
              {{ $t('nav.upload') }}
            </router-link>
          </li>
          <li v-if="store.isAuthed">
            <router-link to="/logout">
              {{ $t('nav.logout') }}
            </router-link>
          </li>
          <li v-else>
            <router-link to="/login">
              {{ $t('nav.login') }}
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <i18n-t
        keypath="made-with"
        tag="p"
      >
        <a
          class="link"
          href="https://github.com/dhershman1"
          target="_blank"
        >{{ $t('my-name') }}</a>
      </i18n-t>
    </footer>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useAuthStore } from './stores/auth'
import { useFilterStore } from './stores/filters'

const store = useAuthStore()
const filterStore = useFilterStore()

onMounted(async () => {
  await filterStore.fetchTags()
})
</script>
