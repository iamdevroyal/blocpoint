<template>
  <section class="py-24" id="pricing">
    <Container>
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-5xl font-bold mb-6 text-text-heading">Choose Your Tier</h2>
        <p class="text-lg text-text-muted">Scale your agency business with clear, transparent levels.</p>
      </div>

      <div class="grid md:grid-cols-3 gap-8 perspective-1000">
        <BentoCard 
          v-for="(p, i) in content.pricing" 
          :key="p.tier" 
          class="relative group transition-all duration-500 hover:-translate-y-2"
          :class="[i === 2 ? 'border-primary/30 bg-primary/5' : '']"
        >
          <!-- Glowing Border for Tier 3 -->
          <div v-if="i === 2" class="absolute inset-0 rounded-3xl bg-primary/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          <template #icon>
            <div :class="['w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110', i === 2 ? 'bg-primary text-white shadow-lg shadow-indigo-500/30' : 'bg-surface text-text-muted']">
              <component :is="getIcon(i)" class="w-6 h-6" />
            </div>
          </template>
          <template #title>
             <span :class="i === 2 ? 'text-primary' : 'text-text-heading'">{{ p.tier.split('—')[0] }}</span>
             <span class="block text-sm font-normal text-text-muted mt-1">{{ p.tier.split('—')[1] }}</span>
          </template>
          <template #description>
             <ul class="space-y-4 mt-4">
               <li v-for="b in p.bullets" :key="b" class="flex items-start gap-3 group/item">
                 <CheckCircleIcon :class="['w-5 h-5 flex-shrink-0 transition-colors duration-300', i === 2 ? 'text-primary group-hover/item:text-indigo-300' : 'text-text-muted group-hover/item:text-text']" />
                 <span :class="['transition-colors duration-300', i === 2 ? 'text-text' : 'text-text-muted group-hover/item:text-text']">{{ b }}</span>
               </li>
             </ul>
          </template>
          <template #footer>
            <Button 
              :variant="i === 2 ? 'primary' : 'secondary'" 
              class="w-full transition-transform duration-300 active:scale-95"
              @click="goToOnboarding"
            >
              {{ i === 2 ? 'Apply for Tier 3' : 'Get Started' }}
            </Button>
          </template>
        </BentoCard>
      </div>
      <div class="text-xs text-text-muted mt-8 text-center">{{ content.pricingDisclaimer }}</div>
    </Container>
  </section>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { site as content } from '../../content/siteContent'
import Container from '../ui/Container.vue'
import BentoCard from '../ui/BentoCard.vue'
import Button from '../ui/Button.vue'
import { CheckCircleIcon, UserIcon, ShieldIcon, CrownIcon } from 'lucide-vue-next'

const router = useRouter()
const getIcon = (i: number) => [UserIcon, ShieldIcon, CrownIcon][i]

const goToOnboarding = () => {
  router.push('/agent-onboarding')
}
</script>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}
</style>
