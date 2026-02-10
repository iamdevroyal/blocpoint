<template>
  <div class="sticky top-6 z-40 transition-all duration-300">
    <Container>
      <div :class="[
        'rounded-full px-6 transition-all duration-500 border border-border shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]',
        compressed ? 'py-3 bg-surface/80 backdrop-blur-3xl' : 'py-4 bg-surface backdrop-blur-2xl'
      ]">
        <div class="flex items-center gap-4">
          <RouterLink to="/" class="flex items-center gap-2 font-bold tracking-wide text-lg">
            <img 
              v-if="!logoError" 
              :src="theme === 'dark' ? '/blocpoint-white.png' : '/blocpoint.png'" 
              alt="BlocPoint" 
              class="h-8 w-auto transition-opacity duration-300"
              @error="logoError = true"
            />
            <span v-else class="text-text-heading">BlocPoint</span>
          </RouterLink>
          <div class="hidden md:flex items-center gap-4 text-sm text-text-muted">
            <a href="/#home" :class="linkClass('home')">Home</a>
            <a href="/#how" :class="linkClass('how')">How it Works</a>
            <a href="/#pricing" :class="linkClass('pricing')">Pricing</a>
            <a href="/#faq" :class="linkClass('faq')">FAQ</a>
            <RouterLink to="/about" class="hover:text-text">About</RouterLink>
            <RouterLink to="/compliance" class="hover:text-text">Compliance</RouterLink>
          </div>
          <div class="ml-auto hidden md:flex items-center gap-2">
            <button class="p-2 rounded-xl glass border border-border text-text cursor-pointer hover:bg-surface/20 transition-colors" @click="toggle()">
              <svg v-if="theme==='dark'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2"/><path d="M12 21v2"/><path d="M4.22 4.22l1.42 1.42"/><path d="M18.36 18.36l1.42 1.42"/><path d="M1 12h2"/><path d="M21 12h2"/><path d="M4.22 19.78l1.42-1.42"/><path d="M18.36 5.64l1.42-1.42"/></svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            </button>
            <Button variant="ghost" @click="emit('open-demo')">View Demo</Button>
            <Button variant="primary" @click="emit('open-join')">Become an Agent</Button>
          </div>
          
          <!-- Mobile Controls -->
          <div class="ml-auto md:hidden flex items-center gap-2">
            <button class="p-2 rounded-xl glass border border-border text-text cursor-pointer hover:bg-surface/20 transition-colors" @click="toggle()">
              <svg v-if="theme==='dark'" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2"/><path d="M12 21v2"/><path d="M4.22 4.22l1.42 1.42"/><path d="M18.36 18.36l1.42 1.42"/><path d="M1 12h2"/><path d="M21 12h2"/><path d="M4.22 19.78l1.42-1.42"/><path d="M18.36 5.64l1.42-1.42"/></svg>
              <svg v-else xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            </button>
            <button class="p-2 rounded-xl glass border border-border text-text" @click="mobileOpen = !mobileOpen">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></svg>
            </button>
          </div>
        </div>
      </div>
    </Container>
    <div v-if="mobileOpen" class="md:hidden mt-2">
      <Container>
        <div class="glass noise gradient-border rounded-2xl p-4">
          <div class="grid gap-3 text-sm">
            <a href="/#home" @click="mobileOpen=false">Home</a>
            <a href="/#how" @click="mobileOpen=false">How it Works</a>
            <a href="/#pricing" @click="mobileOpen=false">Pricing</a>
            <a href="/#faq" @click="mobileOpen=false">FAQ</a>
            <RouterLink to="/about" @click="mobileOpen=false">About</RouterLink>
            <RouterLink to="/compliance" @click="mobileOpen=false">Compliance</RouterLink>
            <div class="flex gap-2 pt-2">
              <Button class="w-full" variant="ghost" @click="emit('open-demo'); mobileOpen=false">View Demo</Button>
              <Button class="w-full" variant="primary" @click="emit('open-join'); mobileOpen=false">Become an Agent</Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { RouterLink } from 'vue-router'
import Container from '../ui/Container.vue'
import Button from '../ui/Button.vue'
import { useTheme } from '../../composables/useTheme'
import { useScrollSpy } from '../../composables/useScrollSpy'
const emit = defineEmits<{ 'open-join': []; 'open-demo': [] }>()
const mobileOpen = ref(false)
const compressed = ref(false)
const logoError = ref(false)
const onScroll = () => {
  compressed.value = window.scrollY > 10
}
onMounted(() => {
  window.addEventListener('scroll', onScroll)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
const { theme, toggle } = useTheme()
const { activeId } = useScrollSpy(['product','modules','how','security','pricing','faq'])
const linkClass = (id: string) => computed(() => (activeId.value === id ? 'text-text font-semibold' : 'hover:text-text')).value
</script>
