<template>
  <div class="filters__container">
    <div class="filter__inputs">
      <section class="filter__tags">
        <auto-complete
          for-id="tags"
          placeholder="Add Tag"
          :items="listedTags"
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
      <section class="filter__date-added">
        <label
          class="label-control"
          for="date-added"
        >
          <p>{{ $t('filters.by-added') }}</p>
          <input
            id="date-added"
            v-model="store.filters.dateAdded"
            name="date-added"
            type="date"
            class="control"
            @keyup.enter.prevent
          >
        </label>
      </section>
      <section class="filter__date-updated">
        <label
          class="label-control"
          for="date-updated"
        >
          <p>{{ $t('filters.by-updated') }}</p>
          <input
            id="date-updated"
            v-model="store.filters.dateUpdated"
            name="date-updated"
            type="date"
            class="control"
            @keyup.enter.prevent
          >
        </label>
      </section>
      <section class="filter__sorting">
        <label
          class="label-control"
          for="date-updated"
        >
          <p>{{ $t('filters.by-updated') }}</p>
          <select
            name="sortBy"
            :value="store.getSortKey()"
            @change="setSorting"
          >
            <option :value="null" />
            <option value="dateCreated|DESC">
              {{ `${$t('blueprint-info.date-created')} ${$t('descending')}` }}
            </option>
            <option value="dateCreated|ASC">
              {{ `${$t('blueprint-info.date-created')} ${$t('ascending')}` }}
            </option>
            <option value="dateUpdated|DESC">
              {{ `${$t('blueprint-info.date-updated')} ${$t('descending')}` }}
            </option>
            <option value="dateUpdated|ASC">
              {{ `${$t('blueprint-info.date-updated')} ${$t('ascending')}` }}
            </option>
            <option value="author|DESC">
              {{ `${$t('blueprint-info.author')} ${$t('descending')}` }}
            </option>
            <option value="author|ASC">
              {{ `${$t('blueprint-info.author')} ${$t('ascending')}` }}
            </option>
            <option value="name|DESC">
              {{ `${$t('name')} ${$t('descending')}` }}
            </option>
            <option value="name|ASC">
              {{ `${$t('name')} ${$t('ascending')}` }}
            </option>
          </select>
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
const listedTags = ['foo', 'food', 'bar', 'yolo', 'cool', 'beans', 'football']

function applyFilters () {
  router.replace({
    query: {
      author: store.filters.author,
      tags: store.getTagsValue(),
      blueprint: store.filters.name,
      dateAdded: store.filters.dateAdded,
      dateUpdated: store.filters.dateUpdated,
      sortBy: store.getSortKey()
    }
  })
}

function setSorting (e) {
  store.setSort(e.target.value)
}

onMounted(() => {
  store.routerToFilters(route.query)
})
</script>
