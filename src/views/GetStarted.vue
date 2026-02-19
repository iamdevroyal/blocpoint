<template>
  <div class="overflow-hidden">
    <!-- Hero Section -->
    <section class="relative pt-32 pb-4">
      <div class="absolute inset-0 bg-hero-gradient opacity-40"></div>
      <Container class="relative z-10">
        <div class="max-w-4xl mx-auto text-center space-y-4 reveal">

          <p class="text-sm text-text-muted max-w-2xl mx-auto leading-relaxed">
            Send money instantly, access digital assets and micro-loans. 
          <br> <strong class="text-text-heading">Want to serve customers?</strong> Activate agent mode for SoftPOS card acceptance, cash-out services, and commissions.
          </p>
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
               Check your phone for verification otp!
            </p>
         </div>
          <div v-if="!success" class="max-w-2xl mx-auto bg-surface border border-border rounded-[2rem] p-8 md:p-12 backdrop-blur-xl shadow-2xl reveal">
             <div class="text-center mb-8">
                <h2 class="lg:text-3xl sm:text-lg font-bold text-text-heading mb-2">Create Your Account</h2>
             </div>

             <form  @submit.prevent="submitForm" class="space-y-6">
                <!-- Phone -->
                <div class="space-y-2 group">
                   <label class="text-sm font-medium text-text-heading group-focus-within:text-primary transition-colors">Phone Number</label>
                   <input v-model="form.phone" type="text" class="w-full px-4 py-3 rounded-xl bg-bg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-text transition-all" placeholder="080..."  />
                </div>

                <!-- Password -->
                <div class="space-y-2 group">
                   <label class="text-sm font-medium text-text-heading group-focus-within:text-primary transition-colors">Password</label>
                   <input v-model="form.password" type="text" class="w-full px-4 py-3 rounded-xl bg-bg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-text transition-all" placeholder="*******"  />
                </div>

                <!-- Terms -->
                <div class="flex items-start gap-3 pt-2">
                   <input v-model="form.terms" type="checkbox" class="mt-1 w-4 h-4 rounded border-border bg-bg text-primary focus:ring-primary cursor-pointer"  />
                   <span class="text-sm text-text-muted">I agree to the Blocpoint  <a href="/terms" class="text-purple-500 hover:underline">Terms of Service</a> and <a href="/privacy" class="text-purple-500 hover:underline">Privacy Policy</a>.</span>
                </div>

                <Button type="submit" variant="primary" class="w-full py-4 text-lg shadow-lg hover:shadow-primary/25 transition-all duration-300" :disabled="loading">
                   <span v-if="loading" class="flex items-center gap-2">
                     <Loader2Icon class="w-5 h-5 animate-spin" /> Creating Account...
                   </span>
                   <span v-else>Create Account</span>
                </Button>

                <div class="text-center text-sm text-text-muted">
                   <a href="#" class="text-primary hover:underline">Already have an account? Log in</a>
                </div>
                
                <div class="text-center text-xs text-text-muted border-t border-border pt-4 mt-4">
                   We'll send verification OTP to the phone number you provided.
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

const loading = ref(false)
const success = ref(false)
const toast = useToast()

// Initialize scroll animations
useScrollReveal('.reveal')

const emit = defineEmits(['close'])

// Form Logic
const form = reactive({
  phone: '',
  password: '',
  terms: false
})

const submitForm = async () => {
  loading.value = true

  if (!form.phone || !form.password || !form.terms) {
   toast.error('All inputs are required')
   loading.value = false
   success.value = false
   return
  } 

  if (form.phone.length !== 11) {
   toast.error('Phone number must be 11 digits!')
   loading.value = false
   success.value = false
   return
  } 

  if (form.password.length < 8 || form.password.length > 20) {
   toast.error('Password must be greater than 8 and less than 20 characters!')
   loading.value = false
   success.value = false
   return
  } 

  if (!form.terms) {
   toast.error('You need to accept the terms of service!')
   loading.value = false
   success.value = false
   return
  } 

  await new Promise(resolve => setTimeout(resolve, 2000))
  loading.value = false
  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.6 },
    colors: ['#6366f1', '#a855f7', '#ec4899', '#22c55e']
  })

  form.password = ''
  form.terms = false
  form.phone = ''
  success.value = true
  toast.success('Check your phone for verification otp!')
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
