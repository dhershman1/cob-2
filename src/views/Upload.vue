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
        <form class="bp__form">
          <fieldset>
            <label for="title">
              <p>{{ $t('bp-form.labels.title') }}</p>
              <input
                id="title"
                v-model="title"
                class="input__field control"
                name="title"
                type="text"
              >
            </label>
          </fieldset>
          <fieldset>
            <label for="description">
              <p>{{ $t('bp-form.labels.description') }}</p>
              <p class="subtext">Supports <a
                class="link"
                href="https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax"
                target="_blank"
              >markdown</a> syntax</p>
              <textarea
                id="description"
                v-model="description"
                class="input__field control"
                name="description"
                type="text"
                rows="10"
              />
            </label>
            <div class="marked-preview">
              <p>{{ `${$t('bp-form.labels.description')} ${$t('preview')}` }}</p>
              <parsed-content
                class="desc__preview"
                :content="description"
              />
            </div>
          </fieldset>
          <fieldset>
            <label for="bp-str">
              <p>{{ $t('bp-form.labels.bp-str') }}</p>
              <textarea
                id="bp-str"
                v-model="bpStr"
                class="input__field control"
                name="bp-str"
                type="text"
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
              type="button"
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
import { useRouter } from 'vue-router'
import BasicCard from '../components/cards/Basic.vue'
import ParsedContent from '../components/cards/ParsedContent.vue'

const router = useRouter()
const title = ref('')
const description = ref('')
const bpStr = ref('')
const bpPhoto = ref('')
const imgURL = ref('')

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
</script>

<style scoped>
.bp__form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

fieldset {
  width: 90%;
  border: none;
}

.control {
  padding: 0;
  width: 100%;
}

.marked-preview {
  height: 200px;
  margin-bottom: 2rem;
}

.desc__preview {
  overflow: auto;
  height: 100%;
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
  padding: 1.5rem 0;
  border-width: 2px;
}

.subtext {
  font-size: 12px;
  color: var(--dark-grey);
}
</style>
