import { reject } from 'kyanite'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFilterStore = defineStore('filters', () => {
  const allTags = ref([])
  // State
  const filters = ref({
    author: '',
    dateCreated: '',
    dateUpdated: '',
    name: '',
    tags: []
  })
  const sorting = ref({
    by: '',
    direction: ''
  })

  // Mutations
  function addTag (value) {
    if (filters.value.tags.includes(value) || value.trim().length === 0) {
      return
    }

    filters.value.tags.push(value)
  }

  function removeTag (value) {
    filters.value.tags = reject(tag => tag === value, filters.value.tags)
  }

  function setFilter (key, value) {
    filters.value[key] = value
  }

  function routerToFilters (query) {
    const entries = Object.entries(query)

    for (const [key, value] of entries) {
      if (key === 'blueprint') {
        filters.value.name = value
      } else if (key === 'sortBy') {
        setSort(value)
      } else if (key === 'tags') {
        filters.value.tags = value.split('|')
      } else {
        filters.value[key] = value
      }
    }
  }

  function setSort (sortKey) {
    if (sortKey === '' || sortKey == null) {
      return
    }

    const [by, direction] = sortKey.split('|')

    sorting.value = {
      by,
      direction
    }
  }

  function resetFilters () {
    filters.value = {
      author: '',
      dateCreated: '',
      dateUpdated: '',
      name: '',
      tags: []
    }
  }

  function resetSorting () {
    sorting.value = {
      by: '',
      direction: ''
    }
  }

  function resetAll () {
    resetFilters()
    resetSorting()
  }

  // Getters
  function getSortKey () {
    if (!sorting.value.by || !sorting.value.direction) {
      return ''
    }

    return `${sorting.value.by}|${sorting.value.direction}`
  }

  function getTagsValue () {
    if (!filters.value.tags.length) {
      return ''
    }

    return filters.value.tags.join('|')
  }
  // Actions

  async function fetchTags () {
    // TODO: Make request to backend to get a list of all tags
    allTags.value = ['foo', 'food', 'bar', 'yolo', 'cool', 'beans', 'football']
  }

  return {
    // State
    allTags,
    filters,
    sorting,
    // Mutations
    addTag,
    removeTag,
    resetAll,
    resetFilters,
    resetSorting,
    routerToFilters,
    setFilter,
    setSort,
    // Getters
    getSortKey,
    getTagsValue,
    // Actions
    fetchTags
  }
})
