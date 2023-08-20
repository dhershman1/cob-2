<template>
  <div>
    <section class="tags-input">
      <span v-for="tag in tags" class="tags-input__tag">
        <span>{{ tag }}</span>
        <button type="button" class="tags-input__remove" @click="removeTag(tag)">&times;</button>
      </span>
      <input
        class="tags-input__text"
        placeholder="Add Tag"
        @keydown.enter.prevent="addTag"
        v-model="newTag"
      >
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
