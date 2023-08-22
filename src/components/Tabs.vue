<template>
  <section class="tabs">
    <div class="tab">
      <span class="tab--active">Tab 1</span>
    </div>
    <div class="tab">
      <span>Tab 2</span>
    </div>
    <div class="tab">
      <span>Tab 3</span>
    </div>
  </section>
</template>

<script setup>
  import { ref, defineProps } from 'vue'

  const props = defineProps({
    tabs: {
      type:
    }
  })

  const selectedTab = ref(0)
</script>
