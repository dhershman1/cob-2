<template>
  <div class="filters">
    <section class="tags-filter">
      <label for="tags">
        <p>Filter by Tags</p>
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
              x
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
        <p>Filter by Blueprint</p>
        <input
          id="blueprint-filter"
          name="blueprint-filter"
          type="text"
          class="control"
        >
      </label>
    </section>
    <section class="author-filter">
      <label
        class="label-control"
        for="author-filter"
      >
        <p>Filter by Author</p>
        <input
          id="author-filter"
          name="author-filter"
          type="text"
          class="control"
        >
      </label>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const tags = ref([])
const newTag = ref('')

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
</script>

<style scoped>
.filters {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.filters .control {
  padding: 0.5rem;
}
</style>
