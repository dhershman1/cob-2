import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTagsStore = defineStore('tags', () => {
  // Used for keeping track of all tags in DB
  const allTags = ref(new Set())
  // Used for keeping track of tags not yet selected
  const availableTags = ref(new Set())
  // Used for keeping track of tags the user has selected
  const selectedTags = ref(new Set())

  function addTag (value) {
    if (selectedTags.value.has(value) || value.trim().length === 0) {
      return
    }

    selectedTags.value.add(value)
  }

  function removeTag (value) {
    selectedTags.value.delete(value)
  }

  function clearSelectedTags () {
    selectedTags.value.clear()
  }

  function resetAvailableTags () {
    availableTags.value = new Set(Array.from(allTags.value))
  }

  async function fetchTags () {
    // TODO: Make request to backend to get a list of all tags
    allTags.value = new Set(['foo', 'food', 'bar', 'yolo', 'cool', 'beans', 'football'])
    availableTags.value = new Set(['foo', 'food', 'bar', 'yolo', 'cool', 'beans', 'football'])
  }

  return {
    allTags,
    addTag,
    availableTags,
    clearSelectedTags,
    fetchTags,
    removeTag,
    resetAvailableTags,
    selectedTags
  }
})
