<template>
  <div class="filters__container">
    <div class="filter__inputs">
      <section class="filter__tags">
        <auto-complete
          for-id="tags"
          placeholder="Add Tag"
          :items="store.allTags"
          :current-words="store.filters.tags"
          @select-item="store.addTag"
        />
        <section class="tags-containter">
          <ul class="tags">
            <li
              v-for="(tag, i) in store.filters.tags"
              :key="i"
              class="tag"
            >
              <span class="tag__title">{{ tag }}</span>
              <button
                type="button"
                class="tag__close"
                @click="store.removeTag(tag)"
              >
                {{ $t('x') }}
              </button>
            </li>
          </ul>
        </section>
      </section>
      <section class="filter__name">
        <label
          class="label-control"
          for="blueprint-filter"
        >
          <p>{{ $t('filters.by-blueprint') }}</p>
          <input
            id="blueprint-filter"
            v-model="store.filters.name"
            name="blueprint-filter"
            type="text"
            class="control"
            @keyup.enter.prevent
          >
        </label>
      </section>
      <section class="filter__author">
        <label
          class="label-control"
          for="author-filter"
        >
          <p>{{ $t('filters.by-author') }}</p>
          <input
            id="author-filter"
            v-model="store.filters.author"
            name="author-filter"
            type="text"
            class="control"
            @keyup.enter.prevent
          >
        </label>
      </section>
      <section class="filter__favorites">
        <label
          class="label-control"
          for="favorites"
        >
          <input
            v-model="store.filters.favorites"
            type="checkbox"
            name="favorites"
          >
          {{ $t('filters.by-favorites') }}
        </label>
      </section>
      <section class="filter__sorting">
        <label
          class="label-control"
          for="date-updated"
        >
          <p>{{ $t('filters.sort') }}</p>
          <select
            name="sortBy"
            :value="store.sorting.by"
            @change="setSorting"
          >
            <option :value="null" />
            <option value="dateCreated">
              {{ `${$t('blueprint-info.date-created')}` }}
            </option>
            <option value="dateUpdated">
              {{ `${$t('blueprint-info.date-updated')}` }}
            </option>
            <option value="author">
              {{ `${$t('blueprint-info.author')}` }}
            </option>
            <option value="name">
              {{ `${$t('name')}` }}
            </option>
          </select>
          <div>
            <label for="sortDesc">
              <input
                id="sortDesc"
                v-model="store.sorting.direction"
                type="radio"
                name="sortDirecton"
                value="DESC"
              >
              {{ $t('descending') }}
            </label>
          </div>
          <div>
            <label for="sortAsc">
              <input
                id="sortAsc"
                v-model="store.sorting.direction"
                type="radio"
                name="sortDirecton"
                value="ASC"
              >
              {{ $t('ascending') }}
            </label>
          </div>
        </label>
      </section>
    </div>
    <section class="apply-filters">
      <button
        class="btn btn__primary"
        type="button"
        @click="applyFilters()"
        @keyup.enter="applyFilters()"
      >
        {{ $t('apply') }}
      </button>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import AutoComplete from './inputs/AutoComplete.vue'
import { useFilterStore } from '../stores/filters'

const route = useRoute()
const router = useRouter()
const store = useFilterStore()

function applyFilters () {
  router.replace({
    query: {
      author: store.filters.author,
      tags: store.getTagsValue(),
      blueprint: store.filters.name,
      dateAdded: store.filters.dateAdded,
      dateUpdated: store.filters.dateUpdated,
      sortBy: store.sorting.by,
      sortDir: store.sorting.direction,
      favorites: store.filters.favorites
    }
  })
}

function setSorting (e) {
  if (e.target.name === 'sortBy') {
    if (!e.target.value) {
      store.resetSorting()
    }
    store.setSort(e.target.value, null)
  } else {
    store.setSort(null, e.target.value)
  }
}

onMounted(() => {
  store.routerToFilters(route.query)
})
</script>

<style scoped>
.filter__inputs section {
  margin-top: 0.5rem;
}

.filter__sorting select {
  margin: 0.4rem 0;
}
</style>
