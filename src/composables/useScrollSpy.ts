import { ref, onMounted, onBeforeUnmount } from 'vue'

export function useScrollSpy(ids: string[]) {
  const activeId = ref<string|null>(null)
  let io: IntersectionObserver | null = null
  onMounted(() => {
    const sections = ids
      .map(id => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]
    io = new IntersectionObserver((entries) => {
      const visible = entries
        .filter(e => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
      if (visible[0]) activeId.value = (visible[0].target as HTMLElement).id
    }, { rootMargin: '-20% 0px -60% 0px', threshold: 0.2 })
    sections.forEach(s => io!.observe(s))
  })
  onBeforeUnmount(() => {
    io?.disconnect()
    io = null
  })
  return { activeId }
}
