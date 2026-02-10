import { ref, onMounted } from 'vue'

const theme = ref<'dark'|'light'>('dark')

export function useTheme() {
  const apply = () => {
    const root = document.documentElement
    if (theme.value === 'light') {
      root.setAttribute('data-theme', 'light')
      root.classList.add('theme-light')
    } else {
      root.removeAttribute('data-theme')
      root.classList.remove('theme-light')
    }
  }
  const set = (t: 'dark'|'light') => {
    theme.value = t
    try { localStorage.setItem('blocpoint:theme', t) } catch {}
    apply()
  }
  const toggle = () => set(theme.value === 'dark' ? 'light' : 'dark')
  onMounted(() => {
    try {
      const saved = localStorage.getItem('blocpoint:theme') as 'dark'|'light'|null
      if (saved) theme.value = saved
      else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) theme.value = 'light'
    } catch {}
    apply()
  })
  return { theme, set, toggle }
}
