import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const isAuthed = ref(false)
  const cred = ref('')
  const profile = ref({})

  async function getCredential () {
    return {}
  }

  return {
    isAuthed,
    cred,
    profile,
    getCredential
  }
})
