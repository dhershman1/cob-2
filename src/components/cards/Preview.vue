<template>
  <div class="preview">
    <section class="meta">
      <div
        class="photo"
        :style="photoStyles"
      />
      <ul class="details">
        <li class="author">
          <a href="#">{{ fakeData.author }}</a>
        </li>
        <li class="date">
          {{ fakeData.date }}
        </li>
        <li class="tags">
          <ul>
            <li
              v-for="t of fakeData.tags"
              :key="t.name"
            >
              <a href="#">{{ t.name }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </section>
    <section class="description">
      <slot name="preview-content" />
      <p class="read-more">
        <a href="#">{{ $t('visit') }}</a>
      </p>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import noImgUrl from '../../assets/imgs/no-image.png'

// TODO: Replace Fake Data
const fakeData = computed(() => {
  return {
    author: 'Killparadise',
    date: 'May 6th, 2022',
    tags: [
      { name: 'cool' },
      { name: 'beans' },
      { name: 'vikings' }
    ],
    thumbnail: null
  }
})
const photoStyles = computed(() => {
  if (fakeData.value.thumbnail) {
    return `background-image: url(${this.fakeData.thumbnail});`
  }

  return `background-image: url(${noImgUrl});`
})
</script>
