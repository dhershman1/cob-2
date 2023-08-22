<template>
  <div class="blueprint">
    <div class="blueprint__cards">
      <div class="blueprint__thumbnail">
        <basic-card :title="$t('preview')">
          <template #content>
            <img
              alt="Blueprint Thumbnail"
              :src="noImgUrl"
            >
          </template>
        </basic-card>
      </div>
      <div class="blueprint__tags">
        <basic-card :title="$t('tags')">
          <template #content>
            <ul class="tags">
              <li
                v-for="(t, i) of ['cool', 'beans', 'macho']"
                :key="i"
                class="tag"
              >
                {{ t }}
              </li>
            </ul>
          </template>
        </basic-card>
      </div>
      <div class="blueprint__info">
        <basic-card :title="$t('info')">
          <template #content>
            <table class="blueprint__info__table">
              <tbody>
                <tr>
                  <td>
                    <i class="icofont-male" />
                    Author
                  </td>
                  <td>Killparadise</td>
                </tr>
                <tr>
                  <td><i class="icofont-calendar" />Created</td>
                  <td>A year ago</td>
                </tr>
                <tr>
                  <td><i class="icofont-clock-time" />Last Updated</td>
                  <td>10 Days Ago</td>
                </tr>
                <tr>
                  <td><i class="icofont-heart" />Favorites</td>
                  <td>7</td>
                </tr>
                <tr>
                  <td><i class="icofont-label" />Version</td>
                  <td>1.1.0</td>
                </tr>
              </tbody>
            </table>
          </template>
        </basic-card>
      </div>
    </div>
    <div class="blueprint__details">
      <tabs :tabs="tabsList" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import BasicCard from '../components/cards/Basic.vue'
import Tabs from '../components/Tabs.vue'
import noImgUrl from '../assets/imgs/no-image.png'

const tabsList = computed(() => {
  return [
    {
      title: 'Details',
      data: '### Hello Content'
    }, {
      title: 'Changelog',
      data: 'Goodbye Content'
    }
  ]
})
</script>

<style scoped>
.blueprint {
  display: grid;
  grid-template-columns: 20% 80%;
  column-gap: 1rem;
}

.blueprint__cards {
  display: grid;
  row-gap: 1rem;
}

.blueprint__thumbnail {
  border: 1px solid var(--darkgrey);
  border-radius: 4px;
  max-width: 100%;
}

.blueprint__tags {
  max-width: 100%;
}

.blueprint__info__table {
  font-size: 14px;
  display: grid;
  justify-content: center;
  box-sizing: border-box;
  border-collapse: collapse;
  column-span: all;
}

.blueprint__info__table td {
  padding: 0.5rem 1rem;
  border-bottom: 1px solid var(--dark-grey);
}

.blueprint__info__table i {
  padding-right: 0.2rem;
}

.blueprint__info__table tr:last-child td {
  padding: 0.5rem 1rem;
  border-bottom: none;
}

.blueprint__info__table td:last-child {
  padding: 0.5rem 1rem;
  border-bottom: 1px solid var(--dark-grey);
}
</style>
