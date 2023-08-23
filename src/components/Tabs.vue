<template>
  <div class="tabs__container">
    <div class="tabs">
      <div class="tab__buttons">
        <button
          v-for="(tab, i) in props.tabs"
          :key="i"
          class="tab"
          @click="setTab(i)"
          @keyup.tab="setTab(i)"
        >
          <span :class="{ 'tab--active': i === selectedTab }">
            {{ tab.title }}
          </span>
        </button>
      </div>
      <div class="tab__content">
        <parsed-content
          v-if="parseContent"
          :content="selectedData"
        />
        <basic-card v-else>
          <template #content>
            <p>{{ selectedData }}</p>
          </template>
        </basic-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import ParsedContent from './cards/ParsedContent.vue'
import BasicCard from './cards/Basic.vue'

const props = defineProps({
  tabs: {
    type: Object,
    required: true
  },
  // Tell this component to expect markdown content
  parseContent: {
    type: Boolean,
    required: false
  }
})
const selectedTab = ref(0)
const selectedData = computed(() => {
  return props.tabs[selectedTab.value].data
})
function setTab (i) {
  selectedTab.value = i
}
</script>

<style scoped>
.tabs button {
  border: none;
}
</style>
