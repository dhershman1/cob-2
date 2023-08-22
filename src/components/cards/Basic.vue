<template>
  <div :class="cardClass">
    <section
      v-show="props.title"
      :class="titleClass"
    >
      <p>{{ props.title }}</p>
    </section>
    <section
      v-show="props.subtitle"
      class="card__subtitle"
    >
      <p>{{ props.subtitle }}</p>
    </section>
    <section class="card__content">
      <slot name="content" />
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: null
  },
  subtitle: {
    type: String,
    default: null
  },
  separator: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'full',
    validator (value) {
      return ['full', 'sm', 'md', 'lg'].includes(value)
    }
  }
})
const cardClass = computed(() => {
  return `card card--${props.size}`
})
const titleClass = computed(() => {
  if (props.separator) {
    return 'card__title separator'
  }

  return 'card__title'
})
</script>

<style scoped>
.separator {
  border-bottom: 1px solid var(--grey);
}
</style>
