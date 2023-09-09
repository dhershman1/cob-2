<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <div class="wrap">
    <basic-card
      size="sm"
      title="Login/Register"
      subtitle="Login or create a Cob account"
      :separator="true"
    >
      <template
        #content
      >
        <form>
          <div class="input__container">
            <i class="icofont-worker input__icon" />
            <input
              v-model="username"
              class="input__field control"
              title="Username"
              type="text"
              placeholder="Username"
              name="username"
            >
          </div>
          <div class="input__container">
            <i class="icofont-lock input__icon" />
            <input
              v-model="password"
              class="input__field control"
              title="Password"
              type="password"
              placeholder="Password"
              name="password"
            >
          </div>
          <div class="btn__container">
            <button
              class="btn btn__primary"
              type="button"
              @click="auth.loginUser(username, password)"
            >
              {{ $t('login') }}
            </button>
            <button
              class="btn btn__primary"
              type="button"
              @click="auth.registerUser(username, password)"
            >
              {{ $t('register') }}
            </button>
          </div>
        </form>
      </template>
    </basic-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BasicCard from '../components/cards/Basic.vue'
import { useAuthStore } from '../stores/auth.js'

const auth = useAuthStore()
const username = ref('')
const password = ref('')
</script>

<style scoped>
.wrap {
  display: flex;
  justify-content: center;
}

.btn__container {
  display: flex;
  justify-content: center;
  column-gap: 1rem;
  padding-bottom: 1rem;
}

.input__container {
  display: flex;
  width: 100%;
  padding: 1rem;
  justify-content: center;
}

.input__field {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  padding: 0.3rem;
}

.input__icon {
  padding: 0.36rem;
  background: var(--dark-grey);
  color: var(--white);
  text-align: center;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}
</style>
