<template>
  <section class="py-12 relative overflow-hidden">
    <Container>
      <div class="text-center max-w-2xl mx-auto mb-16 relative z-10">
        <div class="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-green-400 backdrop-blur-sm mb-4">
          Built for Trust
        </div>
        <h2 class="text-3xl md:text-6xl font-bold mb-4 text-text-heading">Infrastructure You Can Bet On</h2>
        <p class="text-text-muted text-lg">Our ledger architecture ensures every kobo is accounted for, instantly.</p>
      </div>

      <!-- Carousel Container -->
      <div 
        class="relative max-w-[95rem] mx-auto group"
        @mouseenter="pauseAutoScroll"
        @mouseleave="resumeAutoScroll"
        @touchstart="pauseAutoScroll"
        @touchend="resumeAutoScroll"
      >
        <!-- Navigation Buttons -->
        <button 
          @click="manualScroll('left')" 
          class="absolute left-4 lg:-left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-border bg-surface/80 backdrop-blur-md flex items-center justify-center text-text hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 shadow-xl"
          aria-label="Scroll left"
        >
          <ChevronLeftIcon class="w-6 h-6" />
        </button>

        <button 
          @click="manualScroll('right')" 
          class="absolute right-4 lg:-right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full border border-border bg-surface/80 backdrop-blur-md flex items-center justify-center text-text hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 shadow-xl"
          aria-label="Scroll right"
        >
          <ChevronRightIcon class="w-6 h-6" />
        </button>

        <!-- Scrollable Area -->
        <div 
          ref="scrollContainer"
          class="flex gap-6 overflow-x-auto scrollbar-hide px-4 lg:px-0 py-8"
          style="scroll-behavior: auto;"
        >
          <!-- Triplicate items for infinite scroll simulation -->
          <div 
            v-for="(item, i) in displayItems" 
            :key="i"
            class="w-[300px] sm:w-[350px] lg:w-[500px] flex-shrink-0 group/card perspective-1000"
          >
            <div class="h-full relative p-8 lg:p-10 rounded-3xl border border-border bg-surface backdrop-blur-md transition-all duration-500 transform group-hover/card:rotate-y-6 group-hover/card:scale-105 group-hover/card:shadow-[0_20px_40px_-15px_rgba(79,70,229,0.3)] group-hover/card:border-primary/30 group-hover/card:bg-surface/80">
              <!-- Glow Effect -->
              <div class="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              <div class="relative z-10">
                <div class="w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover/card:scale-110 group-hover/card:bg-primary/20 transition-all duration-300">
                  <component :is="getIcon(i)" class="w-6 h-6 lg:w-7 lg:h-7" stroke-width="2" />
                </div>
                
                <h3 class="text-xl lg:text-2xl font-bold text-text-heading mb-3 group-hover/card:text-primary transition-colors">{{ item.title }}</h3>
                <p class="text-text-muted text-sm lg:text-base leading-relaxed group-hover/card:text-text transition-colors">{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { site as content } from '../../content/siteContent'
import Container from '../ui/Container.vue'
import { 
  ZapIcon, 
  RefreshCwIcon, 
  DatabaseIcon, 
  FileCheckIcon, 
  ShieldAlertIcon, 
  ServerIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from 'lucide-vue-next'

const scrollContainer = ref<HTMLElement | null>(null)
const icons = [ZapIcon, RefreshCwIcon, DatabaseIcon, FileCheckIcon, ShieldAlertIcon, ServerIcon]
const getIcon = (i: number) => icons[i % icons.length] // Ensure icon mapping loops correctly

// Triplicate the items to create a buffer for infinite scrolling
const displayItems = computed(() => [...content.trust, ...content.trust, ...content.trust])

let autoScrollFrame: number | null = null
const isPaused = ref(false)
const scrollSpeed = 0.8 // Pixels per frame

const startAutoScroll = () => {
  if (!scrollContainer.value) return
  
  const animate = () => {
    if (isPaused.value || !scrollContainer.value) {
      autoScrollFrame = requestAnimationFrame(animate)
      return
    }

    const container = scrollContainer.value
    const maxScroll = container.scrollWidth / 3
    
    // Increment scroll
    container.scrollLeft += scrollSpeed

    // Reset if we've scrolled past the second set
    if (container.scrollLeft >= maxScroll * 2) {
      container.scrollLeft = maxScroll
    } 
    // Reset if we're at the very beginning (shouldn't happen with forward scroll, but safe to handle)
    else if (container.scrollLeft <= 0) {
      container.scrollLeft = maxScroll
    }

    autoScrollFrame = requestAnimationFrame(animate)
  }
  
  autoScrollFrame = requestAnimationFrame(animate)
}

const pauseAutoScroll = () => {
  isPaused.value = true
}

const resumeAutoScroll = () => {
  isPaused.value = false
}

const manualScroll = (direction: 'left' | 'right') => {
  if (!scrollContainer.value) return
  
  // Use a larger scroll amount for manual clicks
  const cardWidth = window.innerWidth < 1024 ? 300 : 500
  const gap = 24
  const scrollAmount = cardWidth + gap
  
  // Temporarily smooth scroll for the manual action
  scrollContainer.value.style.scrollBehavior = 'smooth'
  
  if (direction === 'left') {
    scrollContainer.value.scrollLeft -= scrollAmount
  } else {
    scrollContainer.value.scrollLeft += scrollAmount
  }

  // Reset to auto behavior after animation
  setTimeout(() => {
    if (scrollContainer.value) {
      scrollContainer.value.style.scrollBehavior = 'auto'
    }
  }, 500)
}

onMounted(() => {
  // Start in the middle set for seamless bidirectional scroll possibility
  if (scrollContainer.value) {
    const maxScroll = scrollContainer.value.scrollWidth / 3
    scrollContainer.value.scrollLeft = maxScroll
  }
  startAutoScroll()
})

onBeforeUnmount(() => {
  if (autoScrollFrame) cancelAnimationFrame(autoScrollFrame)
})
</script>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}
.rotate-y-6 {
  transform: rotateY(6deg);
}
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}
</style>
