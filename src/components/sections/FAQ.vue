<template>
  <section class="py-24 relative" id="faq">
    <Container>
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-5xl font-bold mb-6 text-text-heading">Frequently Asked Questions</h2>
        <p class="text-lg text-text-muted">Everything you need to know about the platform.</p>
      </div>

      <div class="grid md:grid-cols-2 gap-6">
        <div 
          v-for="(item, i) in content.faq" 
          :key="i"
          class="group relative rounded-2xl border border-border bg-surface hover:bg-surface/80 transition-all duration-300 overflow-hidden cursor-pointer"
          @click="toggle(i)"
        >
          <!-- Hover Gradient -->
          <div class="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          
          <div class="p-6 md:p-8 relative z-10 h-full flex flex-col">
            <div class="flex items-start gap-4 justify-between">
              <div class="flex items-start gap-4">
                <div class="w-8 h-8 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                  <HelpCircleIcon class="w-5 h-5" />
                </div>
                <h3 class="text-lg font-semibold text-text-heading leading-snug group-hover:text-primary transition-colors pr-8">
                  {{ item.q }}
                </h3>
              </div>
              
              <!-- Chevron Indicator -->
              <div 
                class="flex-shrink-0 text-text-muted transition-transform duration-300"
                :class="{ 'rotate-180': isOpen(i) }"
              >
                <ChevronDownIcon class="w-5 h-5" />
              </div>
            </div>
            
            <div 
              class="grid transition-all duration-300 ease-in-out"
              :class="isOpen(i) ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 mt-0'"
            >
              <div class="overflow-hidden">
                <p class="text-text-muted leading-relaxed pl-12 text-sm md:text-base border-l-2 border-indigo-500/20">
                  {{ item.a }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { site as content } from '../../content/siteContent'
import Container from '../ui/Container.vue'
import { HelpCircleIcon, ChevronDownIcon } from 'lucide-vue-next'

const openIndex = ref<number | null>(null)

const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}

const isOpen = (index: number) => openIndex.value === index
</script>
