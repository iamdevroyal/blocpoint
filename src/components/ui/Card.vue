<template>
  <div
    ref="el"
    class="glass noise gradient-border rounded-2xl p-6 transition-transform will-change-transform"
  >
    <slot />
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
const el = ref<HTMLElement|null>(null)
let handle: (e: MouseEvent) => void
let reset: () => void
onMounted(() => {
  const node = el.value
  if (!node) return
  const max = 8
  handle = e => {
    const rect = node.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = e.clientX - cx
    const dy = e.clientY - cy
    const rx = Math.max(Math.min((dy / rect.height) * max, max), -max)
    const ry = Math.max(Math.min((-dx / rect.width) * max, max), -max)
    node.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`
  }
  reset = () => {
    node.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0)'
  }
  const isTouch = 'ontouchstart' in window
  if (!isTouch) {
    node.addEventListener('mousemove', handle)
    node.addEventListener('mouseleave', reset)
  }
})
onBeforeUnmount(() => {
  const node = el.value
  if (!node || !handle) return
  node.removeEventListener('mousemove', handle)
  node.removeEventListener('mouseleave', reset)
})
</script>
