<template>
  <div class="upload">
    <basic-card
      size="lg"
      :title="$t('new-bp')"
      subtitle="Create a new Blueprint to put on your account"
      separator
      lg-title
    >
      <template #content>
        <form
          class="bp__form"
          @change="hasChanges = true"
          @submit.prevent="sendForm"
        >
          <fieldset>
            <label for="title">
              <p>{{ $t('bp-form.labels.title') }} <span class="required">*</span></p>
              <input
                id="title"
                v-model="title"
                class="input__field control"
                name="title"
                type="text"
                required
              >
            </label>
          </fieldset>
          <fieldset>
            <text-with-preview
              id="description"
              v-model="description"
              :label="$t('bp-form.labels.description')"
              :text-limit="2000"
              required
            />
          </fieldset>
          <fieldset>
            <text-with-preview
              id="changelog"
              v-model="changelog"
              :label="$t('bp-form.labels.changelog')"
              :text-limit="2000"
            />
          </fieldset>
          <fieldset>
            <label for="bp-str">
              <p>{{ $t('bp-form.labels.bp-str') }} <span class="required">*</span></p>
              <textarea
                id="bp-str"
                v-model="bpStr"
                class="input__field control"
                name="bp-str"
                type="text"
                required
              />
            </label>
          </fieldset>
          <fieldset>
            <label for="bp-photo">
              <p>{{ $t('bp-form.labels.upload-screenie') }}</p>
              <input
                id="bp-photo"
                class="input__field control control__file"
                name="bp-photo"
                type="file"
                accept="image/*"
                @change="onFileChange"
              >
            </label>
            <div class="img__preview">
              <img
                v-if="imgURL"
                :src="imgURL"
                alt="Preview of uploaded image"
              >
            </div>
          </fieldset>
          <div class="btn__container">
            <button
              class="btn btn__primary btn--lg"
              type="submit"
            >
              <i class="icofont-diskette" />
              {{ $t('save') }}
            </button>
            <button
              class="btn btn__default btn--lg"
              type="button"
              @click="onCancel"
            >
              <i class="icofont-close-line" />
              {{ $t('cancel') }}
            </button>
          </div>
        </form>
      </template>
    </basic-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter, onBeforeRouteLeave } from 'vue-router'
import { useI18n } from 'vue-i18n'
import BasicCard from '../components/cards/Basic.vue'
import TextWithPreview from '../components/inputs/TextWithPreview.vue'

const { t } = useI18n()
const router = useRouter()
const title = ref('')
const description = ref('')
const changelog = ref('')
const bpStr = ref('')
const bpPhoto = ref('')
const imgURL = ref('')
const hasChanges = ref(false)

function onFileChange (e) {
  const file = e.target.files[0]

  bpPhoto.value = file
  imgURL.value = URL.createObjectURL(file)
}

function onCancel () {
  router.push({
    name: 'blueprints'
  })
}

function sendForm () {
  console.log('form sent')
}

onBeforeRouteLeave(() => {
  if (!hasChanges.value) {
    return true
  }

  const answer = window.confirm(t('confirm'))

  if (!answer) {
    return false
  }
})
</script>

<style scoped>
.bp__form {
  display: flex;
  flex-direction: column;
}

fieldset {
  border: none;
}

fieldset button {
  margin-top: 1rem;
}

.control {
  padding: 0.3rem 0.3rem;
  width: 100%;
}

.upload {
  display: flex;
  justify-content: center;
  align-content: center;
}

.img__preview {
  margin-top: 1rem;
}

.img__preview img {
  max-width: 500px;
  max-height: 500px;
}

.control__file {
  padding: 1.5rem 0.3rem;
  border-width: 2px;
}

.subtext {
  font-size: 12px;
  color: var(--dark-grey);
}
</style>
