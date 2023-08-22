<template>
  <div class="blueprint">
    <div class="blueprint__cards">
      <div class="blueprint__thumbnail">
        <basic-card :title="$t('preview')">
          <template #content>
            <img
              alt="Blueprint Thumbnail"
              :src="thumbnail"
            >
          </template>
        </basic-card>
      </div>
      <div class="blueprint__tags">
        <basic-card :title="$t('tags')">
          <template #content>
            <ul class="tags">
              <li
                v-for="(t, i) of blueprintStore.blueprint.tags"
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
                    {{ $t('blueprint-info.author') }}
                  </td>
                  <td>{{ blueprintInfo.author }}</td>
                </tr>
                <tr>
                  <td>
                    <i class="icofont-calendar" />
                    {{ $t('blueprint-info.date-created') }}
                  </td>
                  <td>{{ blueprintInfo.dateCreated }}</td>
                </tr>
                <tr>
                  <td>
                    <i class="icofont-clock-time" />
                    {{ $t('blueprint-info.date-updated') }}
                  </td>
                  <td>{{ blueprintInfo.dateUpdated }}</td>
                </tr>
                <tr>
                  <td>
                    <i class="icofont-heart" />
                    {{ $t('blueprint-info.favorites') }}
                  </td>
                  <td>{{ blueprintInfo.favorites }}</td>
                </tr>
                <tr>
                  <td>
                    <i class="icofont-label" />
                    {{ $t('blueprint-info.version') }}
                  </td>
                  <td>{{ blueprintInfo.version }}</td>
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
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import BasicCard from '../components/cards/Basic.vue'
import Tabs from '../components/Tabs.vue'
import noImgUrl from '../assets/imgs/no-image.png'
import { useBlueprintStore } from '../stores/blueprint'

const route = useRoute()
const blueprintStore = useBlueprintStore()

onMounted(async () => {
  await blueprintStore.fetchBlueprint(route.params.id)
})

const tabsList = computed(() => {
  return [
    {
      title: 'Details',
      data: blueprintStore.blueprint.details
    }, {
      title: 'Changelog',
      data: blueprintStore.blueprint.changelog
    }
  ]
})
const thumbnail = computed(() => {
  return blueprintStore.blueprint.thumbnail || noImgUrl
})
const blueprintInfo = computed(() => {
  return blueprintStore.blueprint.info
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
