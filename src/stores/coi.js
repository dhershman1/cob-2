import { defineStore } from 'pinia'
import { ref } from 'vue'

// This store is mostly for holding game details
// Eventually COI might have an API we can use here
// For now it will need to be manually maintained
export const useGameStore = defineStore('coi', () => {
  const versions = ref(new Set([
    '0.5.0',
    '0.5.1',
    '0.5.2',
    '0.5.3',
    '0.5.4',
    '0.5.5'
  ]))

  return {
    versions
  }
})
