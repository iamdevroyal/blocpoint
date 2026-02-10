<template>
  <section class="py-24 relative overflow-hidden">
    <Container>
      <div class="rounded-[3rem] border border-border bg-surface p-8 lg:p-16 relative overflow-visible">
        <!-- Background Glow -->
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/20 blur-[100px] rounded-full"></div>
        <div class="absolute -bottom-24 -left-24 w-96 h-96 bg-green-500/10 blur-[100px] rounded-full"></div>
        
        <div class="relative z-10 text-center mb-16">
           <h2 class="text-3xl md:text-5xl font-bold mb-4 text-text-heading">Complete Payment Ecosystem</h2>
           <p class="text-lg text-text-muted">Everything you need to run a modern agency business.</p>
        </div>

        <div class="grid md:grid-cols-2 gap-16 lg:gap-24 max-w-5xl mx-auto perspective-1000">
          <!-- Left Column: Operations -->
          <div class="space-y-8">
            <div class="flex items-center gap-3 mb-8">
              <div class="w-3 h-3 rounded-full bg-green-400 shadow-[0_0_12px_rgba(74,222,128,0.5)]"></div>
              <h3 class="text-2xl font-bold text-text-heading">Daily Operations</h3>
            </div>
            
            <div class="space-y-4">
              <div 
                v-for="(e, i) in content.ecosystem.left" 
                :key="e"
                class="group relative"
              >
                <div class="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div 
                  class="relative flex items-center gap-4 p-4 rounded-2xl border border-border bg-surface backdrop-blur-sm transition-all duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:rotate-1 group-hover:bg-surface/80 group-hover:border-green-500/30 group-hover:shadow-xl"
                  :style="{ transitionDelay: `${i * 50}ms` }"
                >
                  <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform duration-300">
                    <component :is="getLeftIcon(i)" class="w-5 h-5" />
                  </div>
                  <span class="text-text font-medium">{{ e }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Growth -->
          <div class="space-y-8">
            <div class="flex items-center gap-3 mb-8 md:justify-end">
              <h3 class="text-2xl font-bold text-text-heading">Growth Tools</h3>
              <div class="w-3 h-3 rounded-full bg-indigo-400 shadow-[0_0_12px_rgba(129,140,248,0.5)]"></div>
            </div>

            <div class="space-y-4">
              <div 
                v-for="(e, i) in content.ecosystem.right" 
                :key="e"
                class="group relative"
              >
                <div class="absolute inset-0 bg-gradient-to-l from-indigo-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div 
                  class="relative flex items-center gap-4 p-4 rounded-2xl border border-border bg-surface backdrop-blur-sm transition-all duration-300 transform group-hover:-translate-y-1 group-hover:-translate-x-1 group-hover:-rotate-1 group-hover:bg-surface/80 group-hover:border-indigo-500/30 group-hover:shadow-xl md:flex-row-reverse md:text-right"
                  :style="{ transitionDelay: `${i * 50}ms` }"
                >
                  <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform duration-300">
                    <component :is="getRightIcon(i)" class="w-5 h-5" />
                  </div>
                  <span class="text-text font-medium">{{ e }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script lang="ts" setup>
import { site as content } from '../../content/siteContent'
import Container from '../ui/Container.vue'
import { 
  CreditCardIcon, 
  ArrowLeftRightIcon, 
  GiftIcon, 
  RepeatIcon,
  ShieldCheckIcon,
  TrendingUpIcon,
  CoinsIcon,
  ActivityIcon
} from 'lucide-vue-next'

const getLeftIcon = (i: number) => [CreditCardIcon, ArrowLeftRightIcon, GiftIcon, RepeatIcon][i]
const getRightIcon = (i: number) => [ShieldCheckIcon, TrendingUpIcon, CoinsIcon, ActivityIcon][i]
</script>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}
</style>
