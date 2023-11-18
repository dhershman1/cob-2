import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBlueprintStore = defineStore('blueprint', () => {
  // State
  const blueprint = ref({
    name: '',
    thumbnail: '',
    tags: [],
    info: {
      author: '',
      dateCreated: '',
      dateUpdated: '',
      favorites: 0,
      version: ''
    },
    details: '',
    changelog: '',
    extras: {}
  })
  const allBlueprints = ref([])

  // Mutations
  function setBlueprint (bp) {
    blueprint.value = { ...blueprint.value, ...bp }
  }

  // Action
  function fetchBlueprint (id) {
    console.log(id)

    setBlueprint({
      name: 'Test BP',
      thumbnail: '',
      tags: ['hello', 'store'],
      info: {
        author: 'killparadise',
        dateCreated: 'A year ago',
        dateUpdated: '10 days ago',
        favorites: 78,
        version: '1.1.4'
      },
      details: '# Details',
      changelog: '# Changelog',
      extras: {}
    })
  }

  async function fetchBlueprints () {
    const bps = await axios.get('/api/blueprints')

    console.log(bps)
    allBlueprints.value = bps.data
  }

  return {
    allBlueprints,
    blueprint,
    setBlueprint,
    fetchBlueprint,
    fetchBlueprints
  }
})
