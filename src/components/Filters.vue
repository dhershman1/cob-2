<template>
  <div>
    <section class="tags-input">
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
      <label for="tags">Add Tag
        <input
          v-model="newTag"
          name="tags"
          type="text"
          @keyup.enter.prevent="addTag"
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
