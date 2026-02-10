<template>
  <span ref="el" class="tabular-nums font-bold">
    {{ displayValue }}
  </span>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue'
import { gsap } from 'gsap'

const props = defineProps<{
  value: number
  prefix?: string
  suffix?: string
}>()

const el = ref<HTMLElement|null>(null)
void el
const displayValue = ref(`${props.prefix || ''}0${props.suffix || ''}`)

const animate = () => {
  const obj = { val: 0 }
  gsap.to(obj, {
    val: props.value,
    duration: 2,
    ease: 'power2.out',
    onUpdate: () => {
      // Format number with commas
      const formatted = Math.floor(obj.val).toLocaleString()
      displayValue.value = `${props.prefix || ''}${formatted}${props.suffix || ''}`
    }
  })
}

onMounted(() => {
  animate()
})

watch(() => props.value, () => {
  animate()
})
</script>
