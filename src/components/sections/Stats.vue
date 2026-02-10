<template>
  <section class="py-12 border-y border-white/5 bg-white/5">
    <Container>
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="s in content.stats" :key="s.label" class="text-center group">
          <div class="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
             <span v-if="['Instant', 'Zero'].includes(s.value)" class="text-indigo-400">{{ s.value }}</span>
             <span v-else>{{ s.value }}</span>
          </div>
          <div class="text-sm text-neutral-400 uppercase tracking-wider font-medium">{{ s.label }}</div>
        </div>
      </div>
    </Container>
  </section>
</template>
<script lang="ts" setup>
import { site as content } from '../../content/siteContent'
import Container from '../ui/Container.vue'
</script>
