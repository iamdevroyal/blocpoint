<template>
  <div :class="['flex items-center justify-center rounded-2xl', sizeClass, colorClass]">
    <component :is="icon" :size="iconSize" stroke-width="2.5" />
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import { LucideIcon } from 'lucide-vue-next'

const props = defineProps<{
  icon: any
  size?: 'sm' | 'md' | 'lg'
  variant?: 'primary' | 'accent' | 'purple'
}>()

const sizeClass = computed(() => {
  if (props.size === 'sm') return 'w-10 h-10'
  if (props.size === 'lg') return 'w-16 h-16'
  return 'w-12 h-12'
})

const iconSize = computed(() => {
  if (props.size === 'sm') return 20
  if (props.size === 'lg') return 32
  return 24
})

const colorClass = computed(() => {
  if (props.variant === 'accent') return 'bg-[#00e69d]/10 text-[#00e69d]'
  if (props.variant === 'purple') return 'bg-[#40196d]/20 text-indigo-400'
  return 'bg-blue-500/10 text-blue-400'
})
</script>
