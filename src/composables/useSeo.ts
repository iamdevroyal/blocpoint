import { onMounted, watch } from 'vue'
import { useHead } from '@vueuse/head'
import { useRoute } from 'vue-router'

export function useSeo(defaults?: { title?: string; description?: string; image?: string; url?: string }) {
  const route = useRoute()
  const apply = () => {
    const title = (route.meta?.title as string) || defaults?.title || 'BlocPoint'
    const description = (route.meta?.description as string) || defaults?.description || 'Agent-first financial infrastructure'
    const url = defaults?.url || (typeof window !== 'undefined' ? window.location.href : 'https://blocpoint.example')
    const image = defaults?.image || '/vite.svg'
    useHead({
      title,
      meta: [
        { name: 'description', content: description },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: url },
        { property: 'og:image', content: image }
      ]
    })
  }
  onMounted(apply)
  watch(() => route.fullPath, apply)
}
