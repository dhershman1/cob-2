<template>
  <div class="profile">
    <div class="filters">
      <basic-card
        subtitle="Fitler down your blueprints and sort the results"
        :title="'Search'"
      >
        <template #content>
          <filters />
        </template>
      </basic-card>
    </div>
    <div class="profile__tabs">
      <tabs
        :parse-content="false"
        :tabs="tabsList"
      >
        <template #content>
          <p>test</p>
        </template>
      </tabs>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import Tabs from '../components/Tabs.vue'
import BasicCard from '../components/cards/Basic.vue'
import Filters from '../components/Filters.vue'

const tabsList = computed(() => {
  return [
    {
      title: 'My Blueprints',
      data: 'Hello'
    }, {
      title: 'Favorites',
      data: 'Goodbye'
    }
  ]
})
</script>

<style scoped>
.profile {
  display: grid;
  grid-template-columns: 15% 85%;
  column-gap: 1rem;
}
</style>
