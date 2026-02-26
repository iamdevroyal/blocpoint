<template>
  <div class="overflow-hidden">
    <!-- Hero Section -->
    <section class="relative pt-32 pb-4">
      <div class="absolute inset-0 bg-hero-gradient opacity-40"></div>
      <Container class="relative z-10">
        <div class="max-w-4xl mx-auto text-center space-y-4 reveal">

          <p class="text-sm text-text-muted max-w-2xl mx-auto leading-relaxed">
            Join out launch waitlist now to get notified when we finally go LIVE!</p>
        </div>
      </Container>
    </section>

    <!-- Signup Form -->
    <section id="signup-form" class="py-4 relative">
       <div class="absolute inset-0 bg-hero-gradient opacity-20 animate-pulse-slow"></div>
       <Container class="relative z-10">

         <div v-if="success" class="text-center py-12 space-y-6">
            <div class="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
               <CheckCircleIcon class="w-10 h-10 text-green-500" />
            </div>
            <h3 class="text-2xl font-bold text-text-heading">Success!</h3>
            <p class="text-text-muted">
               Thanks, we will notify you when we launch
            </p>

            <div class="text-center text-sm text-text-muted">
                <a href="/#home" class="text-primary hover:underline">Go Back</a>
            </div>
         </div>
          <div v-if="!success" class="max-w-2xl mx-auto bg-surface border border-border rounded-[2rem] p-8 md:p-12 backdrop-blur-xl shadow-2xl reveal">
             <div class="text-center mb-8">
                <h2 class="lg:text-3xl sm:text-lg font-bold text-text-heading mb-2">Join Our Waitlist</h2>
             </div>

             <form  @submit.prevent="submitForm" class="space-y-6">
                <!-- Email -->
                <div class="space-y-2 group">
                   <label class="text-sm font-medium text-text-heading group-focus-within:text-primary transition-colors">Email</label>
                   <input v-model="form.email" type="email" class="w-full px-4 py-3 rounded-xl bg-bg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-text transition-all" placeholder="johndoe@gmail.com"  />
                </div>

                <Button type="submit" variant="primary" class="w-full py-4 text-lg shadow-lg hover:shadow-primary/25 transition-all duration-300" :disabled="loading">
                   <span v-if="loading" class="flex items-center gap-2">
                     <Loader2Icon class="w-5 h-5 animate-spin" /> Joining...
                   </span>
                   <span v-else>Submit</span>
                </Button>

                <div class="text-center text-sm text-text-muted">
                   <a href="/#home" class="text-primary hover:underline">Go Back</a>
                </div>
                
                <div class="text-center text-xs text-text-muted border-t border-border pt-4 mt-4">
                   You will recieve a confirmation once signed up
                </div>
             </form>
          </div>
       </Container>
    </section>

    <!-- Footer Disclaimer -->
    <div class="py-8 border-t border-border bg-bg text-center text-xs text-text-muted px-4">
       <Container>
          Blocpoint is a comprehensive payment platform. Some features are tier-gated and subject to verification, limits, and monitoring. Blockchain anchoring is used for integrity verification only—no personal data is stored on-chain.
       </Container>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import Container from '../components/ui/Container.vue'
import { CheckCircleIcon, Loader2Icon } from 'lucide-vue-next'
import Button from '../components/ui/Button.vue'
import confetti from 'canvas-confetti'
import { useScrollReveal } from '../composables/useScrollReveal'
import { useToast } from 'vue-toastification'
import api from '../api/axios'

const loading = ref(false)
const success = ref(false)
const toast = useToast()

// Initialize scroll animations
useScrollReveal('.reveal')

const emit = defineEmits(['close'])

// Form Logic
const form = reactive({
  email: '',
  full_name: '',
  platform: 'web',
  role: 'user'
})

const submitForm = async () => {
  loading.value = true

  if (!form.email) {
    toast.error('Email is required')
    loading.value = false
    return
  } 

  try {
    const response = await api.post('/waitlist/join', form)
    
    loading.value = false
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#6366f1', '#a855f7', '#ec4899', '#22c55e']
    })

    form.email = ''
    form.full_name = ''
    success.value = true
    toast.success(response.data.message || 'You have joined the waitlist!')
  } catch (error: any) {
    loading.value = false
    const message = error.response?.data?.message || error.response?.data?.error || 'Something went wrong. Please try again.'
    toast.error(message)
  }
}


</script>

<style scoped>
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 0.3; }
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
  opacity: 0;
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out forwards;
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}
</style>
