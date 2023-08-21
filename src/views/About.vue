<template>
  <div class="about">
    <basic-card title="About Cob">
      <template #content>
        <h2>{{ $t('what-is-cob') }}</h2>
        <p>{{ $t('cob-about') }}</p>
      </template>
    </basic-card>
  </div>
</template>

<script setup>
import BasicCard from '../components/cards/Basic.vue'
</script>
