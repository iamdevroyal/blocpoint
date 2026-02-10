<template>
  <div class="glass noise gradient-border rounded-2xl p-6">
    <div v-if="variant==='feature'" class="space-y-3">
      <div class="flex items-center gap-3">
        <div v-if="icon" class="w-8 h-8 rounded-xl bg-neutral-800 flex items-center justify-center">
          <component :is="icon" class="w-5 h-5" />
        </div>
        <div class="font-semibold">{{ title }}</div>
      </div>
      <p class="text-sm text-neutral-300">{{ description }}</p>
      <div v-if="$slots.footer" class="pt-2">
        <slot name="footer" />
      </div>
    </div>
    <div v-else-if="variant==='stat'" class="space-y-1 text-center">
      <div class="text-3xl font-extrabold"><slot /></div>
      <div class="text-sm text-neutral-300">{{ title }}</div>
    </div>
    <div v-else class="space-y-2">
      <div class="font-semibold">{{ title }}</div>
      <ul class="text-sm text-neutral-300 space-y-1">
        <li v-for="item in items" :key="item" class="flex gap-2"><span>•</span><span>{{ item }}</span></li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
defineProps<{
  variant?: 'feature'|'stat'|'list'
  title?: string
  description?: string
  items?: string[]
  icon?: any
}>()
</script>
