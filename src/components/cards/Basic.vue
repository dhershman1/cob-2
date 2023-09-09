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
  lgTitle: {
    type: Boolean,
    default: false
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
  let classes = 'card__title'

  if (props.separator) {
    classes += ' separator'
  }

  if (props.lgTitle) {
    classes += ' card__title--lg'
  }

  return classes
})
</script>

<style scoped>
.separator {
  border-bottom: 1px solid var(--grey);
}

.separator p {
  padding-bottom: 0.5rem;
}

.card__title.card__title--lg {
  font-size: 30px;
}

.separator ~ .card__subtitle {
  padding-top: 0.5rem;
}
</style>
