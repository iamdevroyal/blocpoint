<script setup lang="ts">
import { RouterView } from 'vue-router'
import PageShell from './components/layout/PageShell.vue'
import { useSeo } from './composables/useSeo'
useSeo({ title: 'BlocPoint | Africa\'s #1 AI and Blockchain powered stablecoin and digital assets integrated SoftPos payment rails for financial agents and customers', description: 'Africa\'s #1 AI and Blockchain powered stablecoin and digital assets integrated SoftPos payment rails for financial agents and customers' })
</script>
<template>
  <PageShell>
    <RouterView />
  </PageShell>
  </template>
