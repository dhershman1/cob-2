<template>
  <div class="pagination">
    <ul>
      <span @click="paginationStore.firstPage()">
        <li>First Page</li>
      </span>
      <span @click="paginationStore.prevPage()">
        <li>Previous</li>
      </span>
      <p>Page {{ paginationStore.currentPage }}</p>
      <span @click="paginationStore.nextPage()">
        <li>Next</li>
      </span>
    </ul>
  </div>
</template>

<script setup>
import { usePaginationStore } from '../store/pagination.js'

const paginationStore = usePaginationStore()
</script>
