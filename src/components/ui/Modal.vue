<template>
  <div v-if="open" class="fixed inset-0 z-50" aria-modal="true" role="dialog">
    <div class="absolute inset-0 bg-black/50" @click="emit('close')"></div>
    <div class="absolute inset-0 flex items-center justify-center p-4">
      <div
        class="glass gradient-border noise w-full max-w-lg rounded-2xl p-0 overflow-hidden"
        @keyup.esc="emit('close')"
        tabindex="0"
      >
        <div class="flex items-center justify-between px-6 py-4 border-b border-neutral-800">
          <div class="text-sm font-semibold">{{ title }}</div>
          <button class="p-2 rounded-xl hover:bg-neutral-800" aria-label="Close" @click="emit('close')">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>
        <div class="p-6">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps<{ open: boolean; title?: string }>()
const emit = defineEmits<{ close: [] }>()
</script>
