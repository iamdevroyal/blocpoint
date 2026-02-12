<template>
  <section class="py-24 relative overflow-hidden">
    <!-- Decorative background -->
    <div class="absolute inset-0 bg-neutral-900/30"></div>
    <div class="absolute -right-64 top-1/2 w-96 h-96 bg-indigo-900/20 blur-[120px] rounded-full"></div>

    <Container class="relative z-10">
      <div class="text-center mb-16">
         <h2 class="text-3xl md:text-5xl font-bold mb-6">Built for Everyone</h2>
         <p class="text-lg text-neutral-400">From digital natives to neighborhood agents, we have you covered.</p>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <BentoCard 
          v-for="(u, i) in content.useCases" 
          :key="u.title" 
          class="hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500 animate-bounce-slow"
          :style="{ animationDelay: `${i * 0.2}s` }"
        >
          <template #icon>
            <IconBox :icon="getIcon(i) as Component" />
          </template>
          <template #title>{{ u.title }}</template>
          <template #description>{{ u.desc }}</template>
        </BentoCard>
      </div>
    </Container>
  </section>
</template>

<script lang="ts" setup>
import { site as content } from '../../content/siteContent'
import Container from '../ui/Container.vue'
import BentoCard from '../ui/BentoCard.vue'
import IconBox from '../ui/IconBox.vue'
import { StoreIcon, MapPinIcon, TrendingUpIcon } from 'lucide-vue-next'
import { type Component } from 'vue'

const getIcon = (i: number) => [StoreIcon, MapPinIcon, TrendingUpIcon][i]
</script>

<style scoped>
@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
}

.animate-bounce-slow {
  animation: bounce-slow 4s ease-in-out infinite;
}
</style>
