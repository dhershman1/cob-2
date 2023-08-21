import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePaginationStore = defineStore('pagination', () => {
  // TODO: Make sure totalPages gets set by a db call
  const currentPage = ref(1)
  const totalPages = ref(5)

  // TODO: These functions will be replaced with server calls in the future
  function nextPage () {
    if (currentPage.value < totalPages.value) {
      currentPage.value++
    }
  }

  function prevPage () {
    if (currentPage.value > 1) {
      currentPage.value--
    }
  }

  function firstPage () {
    currentPage.value = 1
  }

  return {
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    firstPage
  }
})
