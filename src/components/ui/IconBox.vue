<template>
  <div class="p-3 bg-surface border border-border rounded-xl inline-flex items-center justify-center">
    <component :is="icon" class="w-6 h-6 text-primary" />
  </div>
</template>

<script lang="ts" setup>
import type { Component } from 'vue'

defineProps<{
  icon: Component
}>()
</script>
