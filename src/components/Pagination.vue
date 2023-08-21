<template>
  <div class="pagination">
    <ul>
      <button
        type="button"
        class="btn btn__primary"
        @click="paginationStore.firstPage()"
        @keydown.enter="paginationStore.firstPage()"
      >
        <li>{{ $t('pagination.first-page') }}</li>
      </button>
      <button
        type="button"
        class="btn btn__primary"
        @click="paginationStore.prevPage()"
        @keydown.enter="paginationStore.firstPage()"
      >
        <li>{{ $t('pagination.prev') }}</li>
      </button>
      <p>{{ $t('pagination.page') }} {{ paginationStore.currentPage }}</p>
      <button
        type="button"
        class="btn btn__primary"
        @click="paginationStore.nextPage()"
        @keydown.enter="paginationStore.firstPage()"
      >
        <li>{{ $t('pagination.next') }}</li>
      </button>
    </ul>
  </div>
</template>

<script setup>
import { usePaginationStore } from '../stores/pagination.js'

const paginationStore = usePaginationStore()
</script>
