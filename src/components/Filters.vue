<template>
  <div class="filters__container">
    <div class="filters">
      <section class="tags-filter">
        <label for="tags">
          <p>{{ $t('filters.by-tag') }}</p>
          <input
            v-model="newTag"
            placeholder="Add Tag"
            name="tags"
            class="control tag-input"
            type="text"
            @keyup.enter.prevent="addTag"
          >
        </label>
        <section class="tags-containter">
          <ul class="tags">
            <li
              v-for="(tag, i) in tags"
              :key="i"
              class="tag"
            >
              <span class="tag__title">{{ tag }}</span>
              <button
                type="button"
                class="tag__close"
                @click="removeTag(tag)"
              >
                {{ $t('x') }}
              </button>
            </li>
          </ul>
        </section>
      </section>
      <section class="name-filter">
        <label
          class="label-control"
          for="blueprint-filter"
        >
          <p>{{ $t('filters.by-blueprint') }}</p>
          <input
            id="blueprint-filter"
            v-model="blueprintName"
            name="blueprint-filter"
            type="text"
            class="control"
            @keyup.enter.prevent
          >
        </label>
      </section>
      <section class="author-filter">
        <label
          class="label-control"
          for="author-filter"
        >
          <p>{{ $t('filters.by-author') }}</p>
          <input
            id="author-filter"
            v-model="author"
            name="author-filter"
            type="text"
            class="control"
            @keyup.enter.prevent
          >
        </label>
      </section>
    </div>
    <section class="apply-filters">
      <button
        class="btn btn__primary"
        type="button"
        @click="applyFilters()"
        @keyup.enter="applyFilters()"
      >
        {{ $t('apply') }}
      </button>
    </section>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const tags = ref([])
const newTag = ref('')
const author = ref('')
const blueprintName = ref('')

onMounted(() => {
  tags.value = route.query.tags ? route.query.tags.split('|') : []
  author.value = route.query.author || ''
  blueprintName.value = route.query.blueprint || ''
})

function addTag () {
  if (tags.value.includes(newTag.value) || newTag.value.trim().length === 0) {
    return
  }

  tags.value.push(newTag.value)
  newTag.value = ''
}

function removeTag (tag) {
  tags.value = tags.value.filter(t => t !== tag)
}

function applyFilters () {
  router.replace({
    query: {
      author: author.value,
      tags: tags.value.join('|'),
      blueprint: blueprintName.value
    }
  })
}
</script>

<style scoped>
.filters {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.filters .control {
  padding: 0.5rem;
}

.filters__container {
  display: grid;
  grid-auto-rows: auto;
}

.apply-filters {
  width: 100%;
  text-align: center;
  padding: 0.5rem;
}
</style>
