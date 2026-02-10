<template>
  <section class="py-24 relative overflow-hidden" id="how">
    <Container>
      <div class="text-center mb-20">
        <h2 class="text-3xl md:text-5xl font-bold mb-6 text-text-heading">Start in Minutes</h2>
        <p class="text-lg text-text-muted">Simple onboarding. Instant access.</p>
      </div>
      
      <div class="relative max-w-6xl mx-auto">
        <!-- SVG for Streaming Lines -->
        <svg class="absolute inset-0 w-full h-full pointer-events-none overflow-visible" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="rgba(99, 102, 241, 0)" />
              <stop offset="50%" stop-color="rgba(99, 102, 241, 0.5)" />
              <stop offset="100%" stop-color="rgba(99, 102, 241, 0)" />
            </linearGradient>
            
            <filter id="glow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#6366f1" />
            </marker>
          </defs>

          <!-- Streaming Paths -->
          <path 
            v-for="p in paths" 
            :key="p.id"
            :d="p.d"
            fill="none"
            stroke="url(#lineGrad)"
            stroke-width="2"
            stroke-dasharray="20 100"
            filter="url(#glow)"
            marker-end="url(#arrowhead)"
          >
            <animate 
              attributeName="stroke-dashoffset" 
              from="120" 
              to="-120" 
              :dur="p.dur" 
              repeatCount="indefinite" 
            />
          </path>
        </svg>

        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4 relative">
          <div 
            v-for="(s, i) in content.steps" 
            :key="s.title" 
            class="relative group z-10"
          >
            <!-- Step Number Circle -->
            <div class="mb-6 flex justify-center">
               <div class="w-14 h-14 rounded-full bg-surface border border-border flex items-center justify-center text-primary font-bold group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(99,102,241,0.3)] transition-all duration-500 shadow-lg shadow-black/50 z-20 relative bg-clip-padding">
                 {{ i + 1 }}
               </div>
            </div>

            <!-- Content Card -->
            <div 
              class="text-center p-6 rounded-3xl border border-border bg-surface backdrop-blur-sm group-hover:bg-surface/80 group-hover:border-border transition-all duration-500 group-hover:-translate-y-2 relative"
              ref="cardElements"
            >
              <!-- Animated Border Gradient on Hover -->
              <div class="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <h3 class="font-bold text-text-heading mb-3 text-lg relative z-10">{{ s.title }}</h3>
              <p class="text-sm text-text-muted leading-relaxed relative z-10">{{ s.desc }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-20 text-center text-xs text-text-muted max-w-2xl mx-auto border-t border-border pt-6">
        <InfoIcon class="inline-block w-4 h-4 mr-2 align-text-bottom" />
        <span class="wavy-glow">{{ content.complianceNote }}</span>
      </div>
    </Container>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { site as content } from '../../content/siteContent'
import Container from '../ui/Container.vue'
import { InfoIcon } from 'lucide-vue-next'

const cardElements = ref<HTMLElement[]>([])
const paths = ref<any[]>([])

const generatePaths = () => {
  if (cardElements.value.length < 2) return
  
  const newPaths = []
  const elements = cardElements.value
  
  for (let i = 0; i < elements.length - 1; i++) {
    const current = elements[i]
    const next = elements[i + 1]
    
    if (!current || !next) continue

    const cRect = current.getBoundingClientRect()
    const nRect = next.getBoundingClientRect()
    // We need coordinates relative to the SVG container (which is the parent of the grid's parent)
    // The grid is relative, so we can use the common offset parent
    const svgContainer = current.closest('.relative.max-w-6xl')
    if (!svgContainer) continue
    
    const containerRect = svgContainer.getBoundingClientRect()

    // Start point: Right edge of current card (at vertical center)
    const x1 = (cRect.right) - containerRect.left
    const y1 = (cRect.top + cRect.height / 2) - containerRect.top

    // End point: Left edge of next card (at vertical center)
    const x2 = (nRect.left) - containerRect.left
    const y2 = (nRect.top + nRect.height / 2) - containerRect.top

    // Control points for smooth Sine-wave curve
    const midX = (x1 + x2) / 2
    
    // Create a wave that goes up/down based on index
    // We use a larger amplitude to make it visible
    const amplitude = 40
    const waveDirection = i % 2 === 0 ? 1 : -1
    const cpY1 = y1 + (amplitude * waveDirection)
    const cpY2 = y2 - (amplitude * waveDirection)
    
    // Cubic Bezier: M start C cp1 cp2 end
    const d = `M ${x1} ${y1} C ${midX} ${cpY1}, ${midX} ${cpY2}, ${x2} ${y2}`
    
    newPaths.push({
      id: i,
      d,
      dur: `${2 + Math.random()}s`
    })
  }
  paths.value = newPaths
}

let resizeTimer: any
const handleResize = () => {
  clearTimeout(resizeTimer)
  resizeTimer = setTimeout(generatePaths, 200)
}

onMounted(async () => {
  await nextTick()
  // Wait for layout to settle
  setTimeout(generatePaths, 500)
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.wavy-glow {
  background: linear-gradient(
    90deg,
    #737373 0%,
    #a5b4fc 50%,
    #737373 100%
  );
  background-size: 200% auto;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: shine 3s linear infinite;
}

@keyframes shine {
  to {
    background-position: 200% center;
  }
}
</style>
