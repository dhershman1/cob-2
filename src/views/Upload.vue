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
              <p>{{ $t('preview') }}</p>
              <parsed-content
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
        </form>
      </template>
    </basic-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BasicCard from '../components/cards/Basic.vue'
import ParsedContent from '../components/cards/ParsedContent.vue'

const title = ref('')
const description = ref('')
const bpStr = ref('')
</script>

<style scoped>
fieldset {
  border: none;
}

.marked-preview .card {
  text-align: left;
}

.control,
.marked-preview {
  width: 95%;
}

.marked-preview {
  margin: auto;
}

.upload {
  display: flex;
  text-align: center;
  justify-content: center;
  align-content: center;
}

.subtext {
  font-size: 12px;
  color: var(--dark-grey);
}
</style>
