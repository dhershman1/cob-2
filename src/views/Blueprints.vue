<template>
  <div class="blueprints">
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
    <div class="previews">
      <div>
        <preview-card>
          <template #preview-content>
            <h1>Tavern Build LORUM IPSUM EXTRA TEXT OMG</h1>
            <h2>It's a Tavern! Whoa!</h2>
            <p>Something something, booze and unlimited power!</p>
          </template>
        </preview-card>
      </div>
      <div>
        <preview-card>
          <template #preview-content>
            <h1>Tavern Build</h1>
            <h2>It's a Tavern! Whoa!</h2>
            <p>Something something, booze and unlimited power!</p>
          </template>
        </preview-card>
      </div>
      <div>
        <preview-card>
          <template #preview-content>
            <h1>Tavern Build</h1>
            <h2>It's a Tavern! Whoa!</h2>
            <p>Something something, booze and unlimited power!</p>
          </template>
        </preview-card>
      </div>
    </div>
    <pagination />
  </div>
</template>

<script setup>
import BasicCard from '../components/cards/Basic.vue'
import Filters from '../components/Filters.vue'
import Pagination from '../components/Pagination.vue'
import PreviewCard from '../components/cards/Preview.vue'
</script>

<style scoped>
.previews {
  grid-area: previews;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1rem;
}

.filters {
  grid-area: filters;
}

.filters__container {
  display: grid;
  column-gap: 1rem;
}

/* Media Tags */
@media only screen and (max-width: 768px) {
  .previews {
    grid-template-columns: 0fr;
    column-gap: 0;
  }
}
</style>
