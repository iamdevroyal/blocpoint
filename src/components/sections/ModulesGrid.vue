<template>
  <section class="py-24 relative overflow-hidden" id="modules">
    <!-- Background Elements -->
    <div class="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent"></div>
    
    <Container>
      <div class="text-center max-w-2xl mx-auto mb-16">
        <h2 class="text-3xl md:text-5xl font-bold mb-6">Everything You Need to Power Your Business</h2>
        <p class="text-lg text-neutral-400">Complete suite of tools for the modern agent ecosystem.</p>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        <BentoCard 
          v-for="(m, i) in content.modules" 
          :key="m.title" 
          :class="[
            i === 0 || i === 6 ? 'lg:col-span-2' : '',
            'animate-rock'
          ]"
          :style="{ animationDelay: `${i * -0.5}s`, animationDuration: `${4 + (i % 3)}s` }"
        >
          <template #icon>
            <IconBox :icon="getIcon(i) as Component" />
          </template>
          <template #title>{{ m.title }}</template>
          <template #description>{{ m.desc }}</template>
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
import { type Component } from 'vue'
import { 
  CreditCardIcon, 
  ArrowLeftRightIcon, 
  WalletIcon, 
  TrendingUpIcon, 
  ShieldCheckIcon, 
  GiftIcon, 
  CoinsIcon, 
  ActivityIcon, 
  AlertOctagonIcon, 
  FileTextIcon 
} from 'lucide-vue-next'

const icons = [
  CreditCardIcon, ArrowLeftRightIcon, WalletIcon, TrendingUpIcon, 
  ShieldCheckIcon, GiftIcon, CoinsIcon, ActivityIcon, 
  AlertOctagonIcon, FileTextIcon
]

const getIcon = (index: number) => icons[index % icons.length]
</script>

<style scoped>
@keyframes rock {
  0%, 100% { transform: rotate(-1deg); }
  50% { transform: rotate(1deg); }
}

.animate-rock {
  animation: rock ease-in-out infinite;
  transform-origin: bottom center;
}
</style>
