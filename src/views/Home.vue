<template>
  <div class="home">
    <basic-card :title="'News'">
        <template #content>
          <p>News</p>
        </template>
    </basic-card>
    <basic-card :title="'Most Recent Blueprints'">
      <template #content>
        <p>Most Recent Blueprints</p>
      </template>
    </basic-card>
  </div>
</template>

<script setup>
import BasicCard from '../components/cards/Basic.vue'
</script>

<style scoped>
.card:first {
  margin-top: inherit;
}

.card {
  margin-top: 1rem;
}

.previews {
  grid-area: previews;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 1rem;
}

.news {
  grid-area: news;
}
</style>
