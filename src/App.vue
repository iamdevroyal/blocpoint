<script setup lang="ts">
import { RouterView } from 'vue-router'
import PageShell from './components/layout/PageShell.vue'
import { useSeo } from './composables/useSeo'
useSeo({ title: 'BlocPoint', description: 'Agent-first Financial Liquidity Hub' })
</script>
<template>
  <PageShell>
    <RouterView />
  </PageShell>
  </template>
