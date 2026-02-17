<template>
  <section class="relative pt-32 pb-12 overflow-hidden" id="home">
    <div class="absolute inset-0 bg-hero-gradient"></div>
    <ConfettiLayer />
    
    <Container class="relative z-10 max-w-12xl">
      <div class="grid lg:grid-cols-2 gap-6 items-center">
        <!-- Text Content -->
        <div class="space-y-6 sm:text-left lg:text-left max-w-6xl">
          
          <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1]">
            <span class=" bg-clip-text bg-gradient-to-r from-text via-text to-primary">
              Empowering Africa's Remittance Ecosystem for 
            </span>
            <span class="relative inline-block h-[1.2em] w-[300px] sm:w-[400px] align-bottom">
              <span 
                v-for="(text, index) in content.hero.rotatingTexts" 
                :key="text"
                class="absolute left-0 bottom-0 w-full font-extrabold transition-opacity duration-[1500ms] ease-in-out"
                :class="{ 'opacity-85': currentRotatingIndex === index, 'opacity-0': currentRotatingIndex !== index }"
                style="color: #5a2399;"
              >
                {{ text }}
              </span>
            </span>
          </h1>
          
          <p class="space-y-0 text-lg sm:text-xl text-text-muted leading-relaxed max-w-2xl mx-auto lg:mx-0">
            {{ content.hero.subheadline[0] }}
            <span class="block mt-2 text-sm text-primary opacity-80">{{ content.hero.subheadline[1] }}</span>
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <Button variant="primary" class="shadow-xl shadow-indigo-500/20" @click="goToOnboarding">
              Get Started
              <template #icon>
                <ArrowRightIcon class="w-4 h-4" />
              </template>
            </Button>
            <Button variant="secondary" @click="openVideo=true">
              View Demo
            </Button>
          </div>

          <div class="pt-8 border-t border-border">
            <div class="flex flex-wrap gap-4 justify-center lg:justify-start">
               <div v-for="chip in content.hero.trustChips" :key="chip" class="flex items-center gap-2 text-sm text-text-muted">
                 <CheckCircleIcon class="w-4 h-4 text-green-500" />
                 {{ chip }}
               </div>
            </div>
          </div>
        </div>

        <!-- Visual Content -->
        <div class="relative flex justify-center max-w-full lg:max-w-4xl lg:justify-end perspective-1000 mt-12 lg:mt-0 transform-style-3d">
          <div class="relative z-10 transform scale-75 sm:scale-100 transition-transform duration-700 hover:rotate-y-6 hover:rotate-x-6 group transform-style-3d">
            <PhoneMock class="transform-style-3d animate-sway" />
            
            <!-- Orbit System -->
            <div class="absolute inset-0 pointer-events-none transform-style-3d">
              <!-- Orbit Ring 1 -->
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] rounded-full border border-primary/20 animate-orbit-1 transform-style-3d">
                <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-surface p-2 rounded-xl border border-primary/30 shadow-lg shadow-primary/20 animate-counter-rotate">
                  <BanknoteIcon class="w-5 h-5 text-green-400" />
                </div>
                <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-surface p-2 rounded-xl border border-primary/30 shadow-lg shadow-primary/20 animate-counter-rotate">
                  <ShieldCheckIcon class="w-5 h-5 text-primary" />
                </div>
              </div>

              <!-- Orbit Ring 2 -->
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] rounded-full border border-border animate-orbit-2 transform-style-3d">
                <div class="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-surface p-2 rounded-xl border border-border shadow-lg animate-counter-rotate">
                  <DatabaseIcon class="w-5 h-5 text-purple-400" />
                </div>
                <div class="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-surface p-2 rounded-xl border border-border shadow-lg animate-counter-rotate">
                  <TrendingUpIcon class="w-5 h-5 text-cyan-400" />
                </div>
              </div>

              <!-- Data Streams -->
              <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full transform-style-3d">
                <div v-for="i in 8" :key="i" 
                  class="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-primary rounded-full animate-particle"
                  :style="{ 
                    '--angle': `${i * 45}deg`, 
                    '--delay': `${i * 0.3}s`,
                    '--distance': '220px'
                  }"
                ></div>
              </div>
            </div>
          </div>
          
          <!-- Glows -->
          <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-primary/20 blur-[100px] rounded-full -z-10"></div>
        </div>
      </div>
    </Container>
    
    <VideoModal :open="openVideo" @close="openVideo=false" />
  </section>
</template>

<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router'
import { site as content } from '../../content/siteContent'
import Container from '../ui/Container.vue'
import Button from '../ui/Button.vue'
import ConfettiLayer from './ConfettiLayer.vue'
import PhoneMock from '../shared/PhoneMock.vue'
import VideoModal from '../ui/VideoModal.vue'
import { 
  ArrowRightIcon, 
  CheckCircleIcon, 
  BanknoteIcon, 
  ShieldCheckIcon,
  DatabaseIcon,
  TrendingUpIcon
} from 'lucide-vue-next'

const router = useRouter()
const openVideo = ref(false)
const currentRotatingIndex = ref(0)

//let timer: number
let rotatingTimer: number

const goToOnboarding = () => {
  router.push('/get-started')
}

const rotateText = () => {
  currentRotatingIndex.value = (currentRotatingIndex.value + 1) % content.hero.rotatingTexts.length
}

onMounted(() => {
  //typeLoop()
  rotatingTimer = setInterval(rotateText, 3000) as unknown as number
})

onBeforeUnmount(() => {
  //clearTimeout(timer)
  clearInterval(rotatingTimer)
})
</script>

<style scoped>
.typing-text::after {
  content: '|';
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}

.perspective-1000 {
  perspective: 1000px;
}
.transform-style-3d {
  transform-style: preserve-3d;
}
.rotate-y-6 {
  transform: rotateY(-6deg);
}
.rotate-x-6 {
  transform: rotateX(6deg);
}

@keyframes orbit-1 {
  from { transform: translate(-50%, -50%) rotateX(75deg) rotateZ(0deg); }
  to { transform: translate(-50%, -50%) rotateX(75deg) rotateZ(360deg); }
}

@keyframes orbit-2 {
  from { transform: translate(-50%, -50%) rotateX(75deg) rotateZ(360deg); }
  to { transform: translate(-50%, -50%) rotateX(75deg) rotateZ(0deg); }
}

@keyframes counter-rotate {
  from { transform: rotateZ(0deg) rotateX(-75deg) scale(1); }
  to { transform: rotateZ(-360deg) rotateX(-75deg) scale(1); }
}

.animate-orbit-1 {
  animation: orbit-1 20s linear infinite;
}

.animate-orbit-2 {
  animation: orbit-2 25s linear infinite;
}

.animate-counter-rotate {
  animation: counter-rotate 20s linear infinite reverse; /* Sync with parent duration */
}

/* Specific counter-rotation for orbit 2 children */
.animate-orbit-2 .animate-counter-rotate {
  animation: counter-rotate 25s linear infinite; /* Normal direction to counter reverse spin */
}

@keyframes particle-flow {
  0% { 
    transform: translate(-50%, -50%) rotateX(75deg) rotateZ(var(--angle)) translateX(0); 
    opacity: 0;
  }
  20% { opacity: 1; }
  100% { 
    transform: translate(-50%, -50%) rotateX(75deg) rotateZ(var(--angle)) translateX(var(--distance)); 
    opacity: 0;
  }
}

.animate-particle {
  animation: particle-flow 4s ease-out infinite;
  animation-delay: var(--delay);
}

@keyframes sway {
  0%, 100% { transform: rotateY(-5deg) rotateZ(-2deg); }
  50% { transform: rotateY(5deg) rotateZ(2deg); }
}

.animate-sway {
  animation: sway 6s ease-in-out infinite;
}
</style>
