<template>
  <div class="home">
    <account-card />
    <div class="news">
      <basic-card
        :title="'Filters?'"
      >
        <template #content>
          <p>Hewwo</p>
        </template>
      </basic-card>
    </div>
    <div class="previews">
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
import AccountCard from '../components/cards/Account.vue'
import BasicCard from '../components/cards/Basic.vue'
import Pagination from '../components/Pagination.vue'
import PreviewCard from '../components/cards/Preview.vue'
</script>

<style scoped>
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
