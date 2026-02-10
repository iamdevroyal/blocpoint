<template>
  <section class="py-16">
    <Container>
      <h2 class="text-2xl font-bold mb-6">Choose the access tier you need</h2>
      <div class="glass gradient-border noise rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.1)]">
        <div class="grid md:grid-cols-4 text-sm bg-white/5">
          <div class="p-4 font-semibold text-neutral-300">Feature</div>
          <div class="p-4 font-semibold text-white">Tier 1</div>
          <div class="p-4 font-semibold text-white">Tier 2</div>
          <div class="p-4 font-semibold text-indigo-400">Tier 3</div>
        </div>
        <div 
          v-for="(row, i) in rows" 
          :key="row.label" 
          class="grid md:grid-cols-4 text-sm border-t border-white/5 group transition-colors hover:bg-white/5"
        >
          <div class="p-4 text-neutral-400 group-hover:text-neutral-200 transition-colors">{{ row.label }}</div>
          <div class="p-4 text-white group-hover:text-indigo-100 transition-colors flex items-center">
            <CheckIcon v-if="row.t1 === 'Yes'" class="w-4 h-4 text-green-400" />
            <span v-else>{{ row.t1 }}</span>
          </div>
          <div class="p-4 text-white group-hover:text-indigo-100 transition-colors flex items-center">
            <CheckIcon v-if="row.t2 === 'Yes' || row.t2 === 'Enabled'" class="w-4 h-4 text-green-400" />
            <span v-else>{{ row.t2 }}</span>
          </div>
          <div class="p-4 text-indigo-300 font-medium group-hover:text-indigo-200 transition-colors flex items-center">
            <CheckIcon v-if="row.t3 === 'Yes' || row.t3 === 'Enabled'" class="w-4 h-4 text-indigo-400" />
            <span v-else>{{ row.t3 }}</span>
          </div>
        </div>
      </div>
      <div class="text-xs text-neutral-400 mt-4">{{ content.pricingDisclaimer }}</div>
    </Container>
  </section>
</template>

<script lang="ts" setup>
import { site as content } from '../../content/siteContent'
import Container from '../ui/Container.vue'
import { CheckIcon } from 'lucide-vue-next'

const rows = [
  { label: 'Fiat rails', t1: 'Yes', t2: 'Yes', t3: 'Yes' },
  { label: 'Gift cards', t1: '—', t2: 'Enabled', t3: 'Enabled' },
  { label: 'Stablecoins', t1: '—', t2: '—', t3: 'Controlled distribution' },
  { label: 'Caps & commissions', t1: 'Starter', t2: 'Better', t3: 'Best' },
  { label: 'Monitoring', t1: 'Standard', t2: 'Enhanced', t3: 'Enhanced + reporting' }
]
</script>
