<template>
  <div ref="el" class="inline-block">{{ display }}</div>
  </template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
const props = defineProps<{ to: number; duration?: number; format?: (n:number)=>string }>()
const el = ref<HTMLElement|null>(null)
const display = ref('0')
onMounted(() => {
  const obj = { n: 0 }
  gsap.to(obj, {
    n: props.to,
    duration: props.duration ?? 1.2,
    ease: 'power2.out',
    onUpdate() {
      const val = Math.round(obj.n)
      display.value = props.format ? props.format(val) : String(val)
    }
  })
})
</script>
