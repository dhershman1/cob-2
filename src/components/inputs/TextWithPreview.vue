<template>
  <div>
    <label :for="props.id">
      <p>{{ props.label }} <span
        v-if="props.required"
        class="required"
      >*</span></p>
      <i18n-t
        keypath="supports-md"
        class="subtext"
        tag="p"
      >
        <a
          class="link"
          href="https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax"
          target="_blank"
        >{{ $t('markdown') }}</a>
      </i18n-t>
      <textarea
        :id="props.id"
        :value="props.modelValue"
        class="input__field control"
        :name="props.id"
        type="text"
        rows="10"
        :maxlength="props.textLimit"
        :required="props.required"
        @input="updateValue($event.target.value)"
      />
      <p class="subtext">
        {{ charLimiter }}
      </p>
    </label>
    <button
      type="button"
      class="btn btn__primary"
      @click="showPreview = !showPreview"
    >
      {{ previewText }}
    </button>
    <transition name="slide-fade">
      <div
        v-if="showPreview"
        class="marked-preview"
      >
        <p>
          {{ `${props.label} ${$t('preview')}` }}
        </p>
        <parsed-content
          class="desc__preview"
          :content="props.modelValue"
        />
      </div>
    </transition>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import ParsedContent from '../cards/ParsedContent.vue'

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: false,
    default: ''
  },
  textLimit: {
    type: Number,
    default: 1200
  },
  modelValue: {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['update:modelValue'])

const { t } = useI18n()
const showPreview = ref(false)

const charLimiter = computed(() => {
  const chars = props.modelValue.length

  return `${(props.textLimit - chars)}/${props.textLimit}`
})
const previewText = computed(() => {
  return showPreview.value ? t('hide-preview') : t('preview')
})

function updateValue (value) {
  emit('update:modelValue', value)
}
</script>

<style scoped>
.subtext {
  font-size: 12px;
  color: var(--dark-grey);
}

.marked-preview {
  transition: all .2s ease-in-out;
  height: 200px;
  margin-bottom: 2rem;
}

.desc__preview {
  overflow: auto;
  height: 100%;
}

.control {
  padding: 0.3rem 0.3rem;
  width: 100%;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.2s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
