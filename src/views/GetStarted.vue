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
          <div class="max-w-2xl mx-auto bg-surface border border-border rounded-[2rem] p-8 md:p-12 backdrop-blur-xl shadow-2xl reveal">
             <div class="text-center mb-8">
                <h2 class="text-3xl font-bold text-text-heading mb-2">Create Your Account</h2>
                <p class="text-text-muted">Join Blocpoint in less than 2 minutes. No fees required.</p>
             </div>

             <form @submit.prevent="submitForm" class="space-y-6">
                <!-- Name -->
                <div class="space-y-2 group">
                   <label class="text-sm font-medium text-text-heading group-focus-within:text-primary transition-colors">Full Name</label>
                   <input v-model="form.name" type="text" class="w-full px-4 py-3 rounded-xl bg-bg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-text transition-all" placeholder="Enter your full name" required />
                </div>

                <!-- Contact -->
                <div class="grid grid-cols-2 gap-4">
                   <div class="space-y-2 group">
                      <label class="text-sm font-medium text-text-heading group-focus-within:text-primary transition-colors">Email Address</label>
                      <input v-model="form.email" type="email" class="w-full px-4 py-3 rounded-xl bg-bg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-text transition-all" placeholder="you@example.com" required />
                   </div>
                   <div class="space-y-2 group">
                      <label class="text-sm font-medium text-text-heading group-focus-within:text-primary transition-colors">Phone Number</label>
                      <input v-model="form.phone" type="tel" class="w-full px-4 py-3 rounded-xl bg-bg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-text transition-all" placeholder="080..." required />
                   </div>
                </div>

                <!-- User Type Selection -->
                <div class="space-y-2 group">
                   <label class="text-sm font-medium text-text-heading group-focus-within:text-primary transition-colors">I want to use Blocpoint as:</label>
                   <select v-model="form.userType" class="w-full px-4 py-3 rounded-xl bg-bg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-text transition-all appearance-none" required>
                      <option value="" disabled>Select user type</option>
                      <option value="regular">Regular User (transfers, digital products, loans)</option>
                      <option value="agent">Agent (all features + SoftPOS, cash-out, commissions)</option>
                   </select>
                   <p class="text-xs text-text-muted">You can activate agent mode later if you choose regular user now.</p>
                </div>

                <!-- Agent-specific fields (conditional) -->
                <div v-if="form.userType === 'agent'" class="space-y-4 p-4 rounded-xl bg-primary/5 border border-primary/20">
                   <p class="text-sm font-medium text-text-heading">Agent Information</p>
                   
                   <div class="space-y-2 group">
                      <label class="text-sm font-medium text-text-heading group-focus-within:text-primary transition-colors">What best describes you?</label>
                      <select v-model="form.role" class="w-full px-4 py-3 rounded-xl bg-bg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-text transition-all appearance-none" :required="form.userType === 'agent'">
                         <option value="" disabled>Select Role</option>
                         <option>POS Agent</option>
                         <option>Mobile Money Agent</option>
                         <option>Retail Shop Owner</option>
                         <option>Super Agent / Aggregator</option>
                         <option>Other</option>
                      </select>
                   </div>

                   <div class="space-y-2 group">
                      <label class="text-sm font-medium text-text-heading group-focus-within:text-primary transition-colors">Estimated Daily Volume</label>
                      <select v-model="form.volume" class="w-full px-4 py-3 rounded-xl bg-bg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-text transition-all appearance-none" :required="form.userType === 'agent'">
                         <option value="" disabled>Select Volume</option>
                         <option>₦0 – ₦50k</option>
                         <option>₦50k – ₦200k</option>
                         <option>₦200k – ₦500k</option>
                         <option>₦500k – ₦1m</option>
                         <option>₦1m+</option>
                      </select>
                   </div>
                </div>

                <!-- Terms -->
                <div class="flex items-start gap-3 pt-2">
                   <input v-model="form.terms" type="checkbox" class="mt-1 w-4 h-4 rounded border-border bg-bg text-primary focus:ring-primary cursor-pointer" required />
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
                   We'll send verification steps after you create your account.
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
import Button from '../components/ui/Button.vue'
import confetti from 'canvas-confetti'
import { useScrollReveal } from '../composables/useScrollReveal'
import { 
  Loader2Icon,
} from 'lucide-vue-next'

const loading = ref(false)

// Initialize scroll animations
useScrollReveal('.reveal')

// Form Logic
const form = reactive({
  name: '',
  email: '',
  phone: '',
  userType: '',
  role: '',
  volume: '',
  terms: false
})

const submitForm = async () => {
  loading.value = true
  await new Promise(resolve => setTimeout(resolve, 2000))
  loading.value = false
  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.6 },
    colors: ['#6366f1', '#a855f7', '#ec4899', '#22c55e']
  })
  alert('Account Created! Check your email for verification steps.')
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
