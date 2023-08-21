<template>
  <div :class="cardClass">
    <section
      v-show="props.title"
      class="card__title"
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
</script>
