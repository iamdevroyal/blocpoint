<template>
  <section class="py-12 overflow-hidden relative">
    <Container>
      <div class="text-center mb-10">
        <div class="text-sm text-neutral-300 font-medium tracking-wider uppercase">Trusted by users & partners</div>
      </div>
      
      <!-- Infinite Carousel -->
      <div class="relative w-full overflow-hidden mask-fade">
        <div class="flex gap-8 w-max animate-scroll">
          <!-- Quadruple items for smoother loop on wide screens -->
          <div 
            v-for="(logo, i) in [...content.trustedLogos, ...content.trustedLogos, ...content.trustedLogos, ...content.trustedLogos]" 
            :key="i" 
            class="h-16 px-8 glass rounded-2xl flex items-center justify-center min-w-[150px] border border-white/5 bg-white/5 hover:bg-white/10 transition-colors duration-300 group"
          >
            <span class="text-sm font-bold text-neutral-400 group-hover:text-white transition-colors">{{ logo }}</span>
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<script lang="ts" setup>
import { site as content } from '../../content/siteContent'
import Container from '../ui/Container.vue'
</script>

<style scoped>
@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-scroll {
  animation: scroll 30s linear infinite;
}

.mask-fade {
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
}
</style>
