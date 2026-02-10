<template>
  <footer class="mt-24 border-t border-border bg-surface backdrop-blur-lg">
    <Container>
      <div class="py-16 grid gap-12 md:grid-cols-4">
        <div class="space-y-6 md:col-span-2">
          <RouterLink to="/" class="inline-block">
             <img 
               v-if="!logoError" 
               :src="theme === 'dark' ? '/blocpoint-white.png' : '/blocpoint.png'" 
               alt="BlocPoint" 
               class="h-10 w-auto transition-opacity duration-300"
               @error="logoError = true"
             />
             <div v-else class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                  <span class="font-bold text-white text-xl">B</span>
                </div>
                <div class="font-bold text-2xl text-text-heading">Blocpoint</div>
             </div>
          </RouterLink>
          <p class="text-sm text-text-muted max-w-sm leading-relaxed">
            Agent-first financial infrastructure. Empowering the next generation of African POS agents with AI & Blocchain powered payment rails for instant settlements, tiered compliance, and secure digital assets.
          </p>
          <div class="flex gap-4">
            <!-- Social Icons Placeholder -->
            <div v-for="i in 3" :key="i" class="w-8 h-8 rounded-full bg-surface hover:bg-surface/80 flex items-center justify-center transition-colors cursor-pointer text-text-muted hover:text-text border border-border">
              <component :is="[TwitterIcon, LinkedinIcon, GithubIcon][i-1]" class="w-4 h-4" />
            </div>
          </div>
        </div>
        
        <div class="space-y-4">
          <h4 class="font-semibold text-text-heading">Platform</h4>
          <div class="flex flex-col gap-3 text-sm text-text-muted">
            <RouterLink to="/#modules" class="hover:text-primary transition-colors">Features</RouterLink>
            <RouterLink to="/#pricing" class="hover:text-primary transition-colors">Pricing</RouterLink>
            <RouterLink to="/#security" class="hover:text-primary transition-colors">Security</RouterLink>
            <RouterLink to="/#faq" class="hover:text-primary transition-colors">FAQ</RouterLink>
          </div>
        </div>

        <div class="space-y-4">
          <h4 class="font-semibold text-text-heading">Legal & Support</h4>
          <div class="flex flex-col gap-3 text-sm text-text-muted">
            <RouterLink to="/about" class="hover:text-primary transition-colors">About Us</RouterLink>
            <RouterLink to="/compliance" class="hover:text-primary transition-colors">Compliance Framework</RouterLink>
            <RouterLink to="/privacy" class="hover:text-primary transition-colors">Privacy Policy</RouterLink>
            <RouterLink to="/terms" class="hover:text-primary transition-colors">Terms of Service</RouterLink>
          </div>
        </div>
      </div>
      
      <div class="py-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-muted">
        <div>
          © {{ year }} BlocPoint Financial Technologies. All rights reserved.
        </div>
        <div class="flex items-center gap-2">
          <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span>Systems Operational</span>
        </div>
      </div>
    </Container>
  </footer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Container from '../ui/Container.vue'
import { RouterLink } from 'vue-router'
import { TwitterIcon, LinkedinIcon, GithubIcon } from 'lucide-vue-next'
import { useTheme } from '../../composables/useTheme'

const { theme } = useTheme()
const logoError = ref(false)
const year = new Date().getFullYear()
</script>
