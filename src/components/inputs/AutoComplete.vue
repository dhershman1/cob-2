<!-- eslint-disable vuejs-accessibility/no-static-element-interactions, vuejs-accessibility/click-events-have-key-events, vuejs-accessibility/label-has-for, vue/no-v-html -->
<template>
  <div class="autocomplete">
    <label :for="props.forId">
      <p>{{ $t('filters.by-tag') }}</p>
    </label>
    <input
      :id="props.forId"
      v-model="inputValue"
      class="control"
      :placeholder="props.placeholder"
      type="text"
      @focusout="focusout"
      @focus="focus"
      @keydown.prevent.enter="chooseItem"
      @keydown.prevent.tab="chooseItem"
      @keydown.native.down="moveDown"
      @keydown.native.up="moveUp"
    >
    <ul
      v-if="searchMatch.length > 0"
      :class="{
        'autocomplete-list': true,
        [props.forId + '-list']: true
      }"
    >
      <li
        v-for="(result, index) in searchMatch"
        :key="index"
        :class="{ active: selectedIndex === index }"
        @click="selectItem(index), chooseItem(index)"
        v-html="highlightWord(result)"
      />
    </ul>
  </div>
</template>

<script setup>
import { difference, fuzzySearch } from 'kyanite'
import { computed, ref, watch } from 'vue'

// Definitions
const emit = defineEmits(['selectItem'])
const props = defineProps({
  forId: {
    type: String,
    required: true
  },
  items: {
    type: Array,
    required: true
  },
  placeholder: {
    type: String,
    required: false,
    default: ''
  },
  currentWords: {
    type: Array,
    required: false,
    default: () => []
  }
})

// Ref Data
const searchMatch = ref([])
const inputValue = ref('')
const selectedIndex = ref(0)
const clickedChooseItem = ref(false)

// Computed
const listToSearch = computed(() => {
  if (typeof props.items !== 'undefined' && props.items.length > 0) {
    return props.items
  } else {
    return []
  }
})
const filteredList = computed(() => {
  return difference([listToSearch.value, props.currentWords])
})

// Watcher
watch(inputValue, () => {
  focus()
  selectedIndex.value = 0
})

// Methods
function highlightWord (word) {
  const regex = new RegExp(`(${inputValue.value})`, 'g')

  return word.replace(regex, '<mark>$1</mark>')
}

function moveUp () {
  if (selectedIndex.value !== -1) {
    selectedIndex.value--
  }
}

function moveDown () {
  if (selectedIndex.value < searchMatch.value.length - 1) {
    selectedIndex.value++
  }
}

function chooseItem () {
  clickedChooseItem.value = true

  if (selectedIndex.value !== -1 && searchMatch.value.length > 0) {
    inputValue.value = ''
    emit('selectItem', searchMatch.value[selectedIndex.value])
    selectedIndex.value = -1
  }
}

function selectItem (i) {
  selectedIndex.value = i
  chooseItem()
}

function focusout () {
  setTimeout(() => {
    if (!clickedChooseItem.value) {
      searchMatch.value = []
      selectedIndex.value = -1
    }
    clickedChooseItem.value = false
  }, 100)
}

function focus () {
  searchMatch.value = []

  if (inputValue.value) {
    searchMatch.value = filteredList.value.filter(
      w =>
        w === inputValue.value || fuzzySearch(inputValue.value, w))
  }

  if (searchMatch.value.length === 1 &&
    inputValue.value === searchMatch.value[0]) {
    searchMatch.value = []
  }
}
</script>
