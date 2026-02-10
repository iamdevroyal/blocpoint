<template>
  <section class="py-24 relative overflow-hidden" id="security">
    <div class="absolute inset-0 bg-surface/50"></div>
    <Container class="relative z-10">
      <FeatureRow>
        <template #badge>Security First</template>
        <template #title>Bank-Grade Security & Compliance</template>
        <template #description>
          We don't compromise on safety. From device integrity checks to on-chain anchoring, your operations are protected.
          <div class="grid gap-4 mt-8">
            <div v-for="s in content.security" :key="s.title" class="flex items-start gap-3">
              <div class="mt-1">
                <ShieldCheckIcon class="w-5 h-5 text-primary" />
              </div>
              <div>
                <div class="font-semibold text-text">{{ s.title }}</div>
                <div class="text-sm text-text-muted">{{ s.desc }}</div>
              </div>
            </div>
          </div>
          <div class="pt-4">
            <RouterLink to="/compliance">
              <Button variant="secondary">
                View Full Compliance Framework
                <template #icon><ArrowRightIcon class="w-4 h-4" /></template>
              </Button>
            </RouterLink>
          </div>
        </template>
        <template #visual>
          <div class="absolute inset-0 bg-surface flex items-center justify-center">
             <div class="relative w-80 h-80">
               <!-- Glowing Background -->
               <div class="absolute inset-0 bg-primary/10 blur-3xl rounded-full animate-pulse-slow"></div>
               
               <!-- Spinning Rings -->
               <div class="absolute inset-0 rounded-full border border-dashed border-primary/20 animate-spin-slow"></div>
               <div class="absolute inset-8 rounded-full border border-primary/30 animate-reverse-spin"></div>
               
               <!-- Center Lock -->
               <div class="absolute inset-0 flex items-center justify-center z-10">
                 <div class="relative">
                   <div class="absolute inset-0 bg-primary/20 blur-xl rounded-full"></div>
                   <LockIcon class="w-20 h-20 text-primary relative z-10 drop-shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
                 </div>
               </div>

               <!-- Orbiting Elements -->
               <!-- Top -->
               <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-surface p-3 rounded-xl border border-primary/30 shadow-[0_0_15px_rgba(99,102,241,0.2)] animate-float-1">
                 <FingerprintIcon class="w-6 h-6 text-primary" />
               </div>
               
               <!-- Bottom -->
               <div class="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-surface p-3 rounded-xl border border-green-500/30 shadow-[0_0_15px_rgba(34,197,94,0.2)] animate-float-2">
                 <FileCheckIcon class="w-6 h-6 text-green-400" />
               </div>

               <!-- Left -->
               <div class="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 bg-surface p-3 rounded-xl border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.2)] animate-float-3">
                 <ShieldAlertIcon class="w-6 h-6 text-purple-400" />
               </div>

               <!-- Right -->
               <div class="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 bg-surface p-3 rounded-xl border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.2)] animate-float-4">
                 <ServerIcon class="w-6 h-6 text-cyan-400" />
               </div>

               <!-- Diagonals -->
               <div class="absolute top-[15%] right-[15%] bg-surface p-2 rounded-lg border border-primary/20 animate-pulse">
                 <KeyIcon class="w-4 h-4 text-primary" />
               </div>
               <div class="absolute bottom-[15%] left-[15%] bg-surface p-2 rounded-lg border border-primary/20 animate-pulse" style="animation-delay: 1s">
                 <EyeIcon class="w-4 h-4 text-primary" />
               </div>
             </div>
          </div>
        </template>
      </FeatureRow>
    </Container>
  </section>
</template>

<script lang="ts" setup>
import { site as content } from '../../content/siteContent'
import Container from '../ui/Container.vue'
import FeatureRow from './FeatureRow.vue'
import Button from '../ui/Button.vue'
import { RouterLink } from 'vue-router'
import { 
  ShieldCheckIcon, 
  ArrowRightIcon, 
  LockIcon, 
  FingerprintIcon, 
  FileCheckIcon,
  ShieldAlertIcon,
  ServerIcon,
  KeyIcon,
  EyeIcon
} from 'lucide-vue-next'
</script>

<style scoped>
.animate-spin-slow {
  animation: spin 20s linear infinite;
}
.animate-reverse-spin {
  animation: spin 15s linear infinite reverse;
}
.animate-pulse-slow {
  animation: pulse 4s ease-in-out infinite;
}
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
@keyframes float {
  0%, 100% { transform: translate(-50%, -50%) translateY(0); }
  50% { transform: translate(-50%, -50%) translateY(-10px); }
}
/* Custom float animations for different positions */
.animate-float-1 { animation: float-v 3s ease-in-out infinite; }
.animate-float-2 { animation: float-v 4s ease-in-out infinite reverse; }
.animate-float-3 { animation: float-h 3.5s ease-in-out infinite; }
.animate-float-4 { animation: float-h 4.5s ease-in-out infinite reverse; }

@keyframes float-v {
  0%, 100% { transform: translate(-50%, -50%) translateY(0); }
  50% { transform: translate(-50%, -50%) translateY(-10px); }
}
@keyframes float-h {
  0%, 100% { transform: translate(-50%, -50%) translateX(0); }
  50% { transform: translate(-50%, -50%) translateX(-10px); }
}
</style>
