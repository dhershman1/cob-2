<template>
  <div class="blueprint">
    <div class="blueprint__cards">
      <div class="blueprint__thumbnail">
        <img
          alt="Blueprint Thumbnail"
          :src="noImgUrl"
        >
      </div>
      <div class="blueprint__tags" />
      <div class="blueprint__info" />
    </div>
  </div>
</template>

<script setup>
import noImgUrl from '../assets/imgs/no-image.png'
</script>

<style scoped>
.blueprint {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.blueprint__cards {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
}

.blueprint__thumbnail {
  padding: 0.25rem;
  border: 1px solid var(--darkgrey);
  border-radius: 4px;
  max-width: 100%;
  height: auto;
}

.blueprint__tags {

}
</style>
