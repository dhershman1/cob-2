import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  // FIXME: Make sure to set this back to false after dev
  const isAuthed = ref(true)
  const cred = ref('')
  const profile = ref({})
  const account = ref({
    username: '',
    settings: {},
    email: '',
    github: ''
  })

  /**
 * Take a key and value pair to update the account state object with
 * @param {String} key The account key we want to change
 * @param {Any} value The value to set that account key to
 */
  function updateAccountByKey (key, value) {
    if (!key) {
      throw new Error('Key must have a value')
    }

    account.value[key] = value
  }

  /**
   * Take a new account object and attempts to merge it with the current state
   * @param {Object} newAcc The new account object to merge with the current one
   */
  function updateAccount (newAcc) {
    account.value = { ...account.value, ...newAcc }
  }

  function resetAccount () {
    account.value = {
      username: '',
      settings: {},
      email: '',
      github: ''
    }
  }

  async function getCredential () {
    return {}
  }

  async function fetchAccount (id) {
    // Make an attempt to the backend to fetch this users account
    // Based on login
    const fakeAccount = {
      username: 'Killparadise',
      settings: {},
      email: 'test.email@testing.com',
      github: 'https://github.com/dhershman1'
    }

    updateAccount(fakeAccount)

    return fakeAccount
  }

  async function loginUser (username, password) {
    // TODO: Make an attempt to log the user in
    // FIXME: For now we will just fetch account

    const user = await fetchAccount()

    isAuthed.value = true

    return user
  }

  async function logoutUser () {
    // TODO: Make logout request to backend

    isAuthed.value = false
    resetAccount()
  }

  async function registerUser (username, password) {
    console.log(username, password)
    // TODO: Make a request to our backend to attempt and register this user
    return true
  }

  return {
    account,
    isAuthed,
    cred,
    fetchAccount,
    getCredential,
    loginUser,
    logoutUser,
    profile,
    registerUser,
    updateAccount,
    updateAccountByKey
  }
})
