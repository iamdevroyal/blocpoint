import { onMounted } from 'vue'
import { gsap } from 'gsap'

export function useGsapReveal(selector: string, stagger = 0.06) {
  onMounted(() => {
    const nodes = Array.from(document.querySelectorAll(selector)) as HTMLElement[]
    nodes.forEach(n => {
      n.style.opacity = '0'
      n.style.transform = 'translateY(10px)'
    })
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const children = Array.from((e.target as HTMLElement).querySelectorAll(':scope > *'))
          gsap.to(e.target, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' })
          gsap.from(children, { opacity: 0, y: 10, duration: 0.4, stagger, ease: 'power2.out' })
          io.unobserve(e.target)
        }
      })
    }, { threshold: 0.2 })
    nodes.forEach(n => io.observe(n))
  })
}
