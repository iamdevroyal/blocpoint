<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import PageShell from './components/layout/PageShell.vue'
import Preloader from './components/ui/Preloader.vue'
import { useSeo } from './composables/useSeo'

useSeo({ 
  title: 'Blocpoint | Africa\'s #1 AI and Blockchain powered stablecoin and digital assets integrated SoftPos payment rails for financial agents and customers', 
  description: 'Africa\'s #1 AI and Blockchain powered stablecoin and digital assets integrated SoftPos payment rails for financial agents and customers' 
})

const loading = ref(true)

onMounted(() => {
  // Ensure the preloader shows for at least a brief moment or until window is fully loaded
  const minLoadTime = 1500
  const start = Date.now()

  const hidePreloader = () => {
    const elapsed = Date.now() - start
    const remaining = Math.max(0, minLoadTime - elapsed)
    
    setTimeout(() => {
      loading.value = false
    }, remaining)
  }

  if (document.readyState === 'complete') {
    hidePreloader()
  } else {
    window.addEventListener('load', hidePreloader)
  }
})
</script>

<template>
  <Preloader :loading="loading" />
  <PageShell>
    <RouterView />
  </PageShell>
</template>
