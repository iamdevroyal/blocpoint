import { onMounted } from 'vue'

export function useScrollReveal(selector: string, options?: IntersectionObserverInit) {
  onMounted(() => {
    const nodes = Array.from(document.querySelectorAll(selector)) as HTMLElement[]
    nodes.forEach(n => {
      n.style.opacity = '0'
      n.style.transform = 'translateY(12px)'
    })
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const n = e.target as HTMLElement
          n.style.transition = 'opacity 500ms ease, transform 500ms ease'
          n.style.opacity = '1'
          n.style.transform = 'translateY(0)'
          io.unobserve(n)
        }
      })
    }, options || { threshold: 0.2 })
    nodes.forEach(n => io.observe(n))
  })
}
