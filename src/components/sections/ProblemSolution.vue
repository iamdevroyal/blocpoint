<template>
  <section class="py-6 relative">
    <Container>
      <!-- Problem Section -->
      <FeatureRow>
        <template #badge>The Problem</template>
        <template #title>Nigeria's fintech users deserve better tools.</template>
        <template #description>
          High fees, slow settlements, and limited access are holding people back. 
          The current infrastructure is fragmented and unreliable.
          <ul class="mt-8 space-y-4">
             <li v-for="p in content.problem.pains" :key="p" class="flex items-start gap-3">
               <div class="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center">
                 <XIcon class="w-3 h-3" />
               </div>
               <span class="text-text-muted">{{ p }}</span>
             </li>
          </ul>
        </template>
        <template #visual>
           <div class="absolute inset-0 bg-surface/50 overflow-hidden" ref="problemContainer">
             <!-- Ambient Background -->
             <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/20 via-surface to-surface"></div>
             
             <!-- Floating Cards -->
             <div 
                v-for="(card, i) in problemCards" 
                :key="i"
                class="absolute p-4 rounded-xl border border-red-500/30 bg-surface/90 backdrop-blur-sm shadow-[0_0_15px_rgba(239,68,68,0.15)] flex items-center gap-3 w-[280px]"
                :style="{ transform: `translate3d(${card.x}px, ${card.y}px, 0)` }"
             >
               <div class="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 flex-shrink-0">
                 <AlertOctagonIcon class="w-4 h-4" />
               </div>
               <span class="text-sm font-medium text-red-400">{{ content.problem.pains[i] }}</span>
             </div>
           </div>
        </template>
      </FeatureRow>

      <!-- Solution Section -->
      <FeatureRow reverse class="mt-24">
        <template #badge>The Solution</template>
        <template #title>A Complete Fintech Platform for Everyone</template>
        <template #description>
          BlocPoint replaces fragmented tools with a single, powerful app.
          From instant transfers to stablecoins, remittance, and optional agent features.
          <ul class="mt-8 space-y-4">
             <li v-for="s in content.solution" :key="s" class="flex items-start gap-3">
               <div class="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center">
                 <CheckIcon class="w-3 h-3" />
               </div>
               <span class="text-text-muted">{{ s }}</span>
             </li>
          </ul>
        </template>
        <template #visual>
           <div class="absolute inset-0 bg-surface/50 overflow-hidden" ref="solutionContainer">
              <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-900/20 via-surface to-surface"></div>
              
              <!-- Floating Cards -->
             <div 
                v-for="(card, i) in solutionCards" 
                :key="i"
                class="absolute p-4 rounded-xl border border-green-500/30 bg-surface/90 backdrop-blur-sm shadow-[0_0_15px_rgba(34,197,94,0.15)] flex items-center gap-3 w-[280px]"
                :style="{ transform: `translate3d(${card.x}px, ${card.y}px, 0)` }"
             >
               <div class="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 flex-shrink-0">
                 <CheckCircleIcon class="w-4 h-4" />
               </div>
               <span class="text-sm font-medium text-green-400">{{ content.solution[i] }}</span>
             </div>
           </div>
        </template>
      </FeatureRow>
    </Container>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { site as content } from '../../content/siteContent'
import Container from '../ui/Container.vue'
import FeatureRow from './FeatureRow.vue'
import { XIcon, CheckIcon, AlertOctagonIcon, CheckCircleIcon } from 'lucide-vue-next'

const problemContainer = ref<HTMLElement | null>(null)
const solutionContainer = ref<HTMLElement | null>(null)

interface CardState {
  x: number
  y: number
  vx: number
  vy: number
  width: number
  height: number
}

const problemCards = ref<CardState[]>([])
const solutionCards = ref<CardState[]>([])

const initCards = (count: number, containerW: number, containerH: number): CardState[] => {
  const cards: CardState[] = []
  const cardW = 280
  const cardH = 80 // Approx height
  
  for (let i = 0; i < count; i++) {
    // Attempt to place without overlapping too much
    let x = Math.random() * (containerW - cardW)
    let y = Math.random() * (containerH - cardH)
    
    // Random velocity
    const speed = 0.5 + Math.random() * 0.5
    const angle = Math.random() * Math.PI * 2
    
    cards.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      width: cardW,
      height: cardH
    })
  }
  return cards
}

let frameId: number

const updatePhysics = () => {
  // Update Problem Cards
  if (problemContainer.value) {
    const w = problemContainer.value.clientWidth
    const h = problemContainer.value.clientHeight
    
    problemCards.value.forEach(card => {
      card.x += card.vx
      card.y += card.vy

      // Bounce logic
      if (card.x <= 0) { card.x = 0; card.vx *= -1 }
      if (card.x + card.width >= w) { card.x = w - card.width; card.vx *= -1 }
      if (card.y <= 0) { card.y = 0; card.vy *= -1 }
      if (card.y + card.height >= h) { card.y = h - card.height; card.vy *= -1 }
    })
  }

  // Update Solution Cards
  if (solutionContainer.value) {
    const w = solutionContainer.value.clientWidth
    const h = solutionContainer.value.clientHeight
    
    solutionCards.value.forEach(card => {
      card.x += card.vx
      card.y += card.vy

      // Bounce logic
      if (card.x <= 0) { card.x = 0; card.vx *= -1 }
      if (card.x + card.width >= w) { card.x = w - card.width; card.vx *= -1 }
      if (card.y <= 0) { card.y = 0; card.vy *= -1 }
      if (card.y + card.height >= h) { card.y = h - card.height; card.vy *= -1 }
    })
  }

  frameId = requestAnimationFrame(updatePhysics)
}

onMounted(async () => {
  // Wait for layout
  await nextTick()
  
  // Initialize Problem Cards
  if (problemContainer.value) {
    const w = problemContainer.value.clientWidth
    const h = problemContainer.value.clientHeight
    // Only take first 5 to avoid overcrowding
    problemCards.value = initCards(Math.min(5, content.problem.pains.length), w, h)
  }

  // Initialize Solution Cards
  if (solutionContainer.value) {
    const w = solutionContainer.value.clientWidth
    const h = solutionContainer.value.clientHeight
    // Only take first 5
    solutionCards.value = initCards(Math.min(5, content.solution.length), w, h)
  }

  frameId = requestAnimationFrame(updatePhysics)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(frameId)
})
</script>
