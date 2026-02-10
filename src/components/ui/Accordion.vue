<template>
  <div class="space-y-2">
    <div v-for="(item, i) in items" :key="i" class="glass rounded-2xl border border-neutral-700">
      <button class="w-full flex items-center justify-between px-4 py-3 text-left" @click="toggle(i)">
        <span class="font-semibold">{{ item.title }}</span>
        <span class="text-neutral-400">{{ openIndex === i ? '−' : '+' }}</span>
      </button>
      <div v-if="openIndex === i" class="px-4 pb-4 text-sm text-neutral-300">
        <slot name="content" :item="item">{{ item.content }}</slot>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
export interface AccordionItem { title: string; content: string }
const props = defineProps<{ items: AccordionItem[] }>()
const openIndex = ref<number|null>(null)
const toggle = (i: number) => {
  openIndex.value = openIndex.value === i ? null : i
}
</script>
