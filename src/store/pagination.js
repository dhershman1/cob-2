import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePaginationStore = defineStore('pagination', () => {
  const currentPage = ref(1)
  const totalPages = ref(5)

  function nextPage () {
    if (currentPage.value < totalPages) {
      currentPage.value++
    }
  }

  function prevPage () {
    if (currentPage.value > 1) {
      currentPage.value--
    }
  }

  return {
    currentPage,
    totalPages,
    nextPage,
    prevPage
  }
})
