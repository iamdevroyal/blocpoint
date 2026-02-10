<template>
  <div v-if="enabled" class="pointer-events-none absolute inset-0 overflow-hidden z-0">
    <component
      v-for="item in items"
      :is="item.icon"
      :key="item.id"
      class="absolute opacity-30"
      :style="{ 
        transform: `translate3d(${item.x}px, ${item.y}px, 0) rotate(${item.rot}deg) scale(${item.scale})`,
        color: item.color,
        width: `${item.size}px`,
        height: `${item.size}px`
      }"
      :stroke-width="1.5"
    />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onBeforeUnmount, ref, shallowRef } from 'vue'
import { gsap } from 'gsap'
import { 
  Wallet, 
  CreditCard, 
  Banknote, 
  ShieldCheck, 
  TrendingUp, 
  Zap, 
  Lock,
  Coins,
  Smartphone
} from 'lucide-vue-next'

const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
const enabled = !prefersReduced

// Use shallowRef for performance with components
const iconTypes = shallowRef([
  Wallet, 
  CreditCard, 
  Banknote, 
  ShieldCheck, 
  TrendingUp, 
  Zap, 
  Lock,
  Coins,
  Smartphone
])

interface Item { 
  id: number
  x: number 
  y: number 
  rot: number 
  rotSpeed: number
  icon: any 
  color: string 
  scale: number
  size: number
  drift: number
  driftSpeed: number
}

const items = ref<Item[]>([])

// Fintech-aligned palette
const colors = [
  '#a78bfa', // purple-400
  '#22d3ee', // cyan-400
  '#4ade80', // green-400
  '#60a5fa', // blue-400
  '#f472b6', // pink-400
  '#818cf8'  // indigo-400
]

const spawn = (n = 1) => {
  if (!enabled) return
  const w = window.innerWidth
  
  for (let i = 0; i < n; i++) {
    const size = Math.random() * 16 + 14 // 14px to 30px
    items.value.push({
      id: Date.now() + Math.random(),
      x: Math.random() * w,
      y: -50 - (Math.random() * 500), // Start well above
      rot: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 2,
      icon: iconTypes.value[Math.floor(Math.random() * iconTypes.value.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      scale: Math.random() * 0.5 + 0.5,
      size,
      drift: Math.random() * Math.PI * 2,
      driftSpeed: Math.random() * 0.02 + 0.01
    })
  }
}

const update = () => {
  const h = window.innerHeight
  const w = window.innerWidth
  
  // Update existing items
  items.value.forEach(i => {
    i.y += 0.5 + (i.scale * 0.5) // Speed based on scale (parallax-ish)
    i.rot += i.rotSpeed
    i.drift += i.driftSpeed
    i.x += Math.sin(i.drift) * 0.5 // Gentle sway
  })

  // Remove items that fell off screen
  items.value = items.value.filter(i => i.y < h + 50)

  // Maintain population
  if (items.value.length < 25) {
    spawn(1)
  }
}

onMounted(() => {
  if (!enabled) return
  
  // Initial population
  const w = window.innerWidth
  const h = window.innerHeight
  
  // Spawn initial set scattered across the screen
  for (let i = 0; i < 20; i++) {
    const size = Math.random() * 16 + 14
    items.value.push({
      id: Date.now() + i,
      x: Math.random() * w,
      y: Math.random() * h, // Start anywhere on screen
      rot: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 2,
      icon: iconTypes.value[Math.floor(Math.random() * iconTypes.value.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      scale: Math.random() * 0.5 + 0.5,
      size,
      drift: Math.random() * Math.PI * 2,
      driftSpeed: Math.random() * 0.02 + 0.01
    })
  }

  gsap.ticker.add(update)
})

onBeforeUnmount(() => {
  gsap.ticker.remove(update)
})
</script>
