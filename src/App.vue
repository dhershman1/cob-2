<template>
  <div class="container">
    <header class="navbar">
      <div class="brand">
        <router-link to="/">
          {{ $t('cob') }}
        </router-link>
      </div>
      <div class="navbar__links">
        <router-link to="/">
          {{ $t('nav.home') }}
        </router-link>
        <router-link to="/blueprints">
          {{ $t('nav.blueprints') }}
        </router-link>
        <router-link to="/about">
          {{ $t('nav.about') }}
        </router-link>
        <router-link to="/upload">
          {{ $t('nav.upload') }}
        </router-link>
        <router-link to="/profile">
          {{ $t('nav.profile') }}
        </router-link>
      </div>
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
