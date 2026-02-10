<template>
  <button
    :class="[
      'group relative inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 text-sm md:px-8 md:py-4 md:text-base font-bold tracking-wide transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-neutral-900',
      variantClass,
      disabled ? 'opacity-60 pointer-events-none' : 'hover:-translate-y-0.5 hover:shadow-lg'
    ]"
    :disabled="disabled"
  >
    <div v-if="variant === 'glow'" class="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-70 blur transition duration-200 group-hover:opacity-100"></div>
    <span class="relative flex items-center gap-2">
      <slot />
      <slot name="icon" />
    </span>
  </button>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
const props = defineProps<{ variant?: 'primary'|'secondary'|'ghost'|'glow'; disabled?: boolean }>()
const variantClass = computed(() => {
  if (props.variant === 'secondary') return 'bg-white/10 backdrop-blur-md text-text border border-white/10 hover:bg-white/20'
  if (props.variant === 'ghost') return 'bg-transparent text-text hover:text-indigo-300'
  if (props.variant === 'glow') return 'bg-neutral-900 text-white'
  return 'bg-[#40196d] text-white hover:bg-[#522585] shadow-indigo-900/50 shadow-md'
})
</script>
