<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="card card--full">
    <div class="card__content">
      <div v-html="parsedContent" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { marked } from 'marked'
import DOMPurify from 'dompurify'
// This cards purpose is for containing and displaying HTML from Marked
const props = defineProps({
  content: {
    type: String,
    required: true
  }
})
const parsedContent = computed(() => {
  // This is a controlled sanatized html insert so we can disable our rule
  return DOMPurify.sanitize(marked.parse(props.content))
})

</script>
