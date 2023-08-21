<template>
  <div class="pagination">
    <ul>
      <button
        type="button"
        @click="paginationStore.firstPage()"
        @keydown.enter="paginationStore.firstPage()"
      >
        <li>First Page</li>
      </button>
      <button
        type="button"
        @click="paginationStore.prevPage()"
        @keydown.enter="paginationStore.firstPage()"
      >
        <li>Previous</li>
      </button>
      <p>Page {{ paginationStore.currentPage }}</p>
      <button
        type="button"
        @click="paginationStore.nextPage()"
        @keydown.enter="paginationStore.firstPage()"
      >
        <li>Next</li>
      </button>
    </ul>
  </div>
</template>

<script setup>
import { usePaginationStore } from '../stores/pagination.js'

const paginationStore = usePaginationStore()
</script>
