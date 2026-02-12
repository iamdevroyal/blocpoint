<template>
  <div class="overflow-hidden">
    <!-- Hero Section -->
    <section class="relative pt-32 pb-24">
      <div class="absolute inset-0 bg-hero-gradient opacity-40"></div>
      <Container class="relative z-10">
        <div class="max-w-4xl mx-auto text-center space-y-8 reveal">
          <h1 class="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-text-heading leading-[1.1]">
            Get Started with <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">BlocPoint</span>
          </h1>
          
          <p class="text-xl sm:text-2xl font-bold text-text-heading">
             Your complete fintech platform for instant transfers, digital products, and more.
          </p>

          <p class="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            Send money instantly, buy gift cards, access stablecoins, and get micro-loans. 
            <strong class="text-text-heading">Want to serve customers?</strong> Activate agent mode for SoftPOS card acceptance, cash-out services, and commissions.
          </p>
          
          <div class="flex flex-wrap justify-center gap-3">
            <div v-for="(chip, index) in chips" :key="chip" 
              class="flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-border text-sm text-text-muted backdrop-blur-sm animate-fade-in-up"
              :style="{ animationDelay: `${index * 100}ms` }"
            >
               <CheckCircleIcon class="w-4 h-4 text-green-500" />
               {{ chip }}
            </div>
          </div>

          <div class="relative max-w-md mx-auto mt-8 reveal">
             <PhoneMock class="transform scale-90 sm:scale-100 hover:scale-105 transition-transform duration-500" />
             <p class="text-sm text-text-muted mt-6 font-medium">No fees to get started. Create your account in minutes.</p>
          </div>

          <div class="flex flex-col sm:flex-row gap-4 justify-center pt-8 reveal">
            <Button variant="primary" class="px-8 py-4 text-lg shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300 transform hover:-translate-y-1" @click="scrollToForm">
              Create Account
            </Button>
            <Button variant="secondary" class="px-8 py-4 text-lg hover:bg-surface/80 transition-colors">
              View Demo
            </Button>
          </div>
          
          <p class="text-xs text-text-muted max-w-lg mx-auto reveal">
            Stablecoin features are available to Tier 3 users with enhanced verification.
          </p>
        </div>
      </Container>
    </section>

    <!-- What You Get -->
    <section class="py-24 bg-surface/30 border-y border-border">
      <Container>
        <div class="text-center mb-16 reveal">
           <h2 class="text-3xl font-bold text-text-heading mb-4">What You Get</h2>
           <p class="text-text-muted">Everything you need for modern digital finance in Nigeria.</p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div v-for="(feature, i) in features" :key="i" class="p-6 rounded-2xl bg-surface border border-border hover:bg-white/5 hover:scale-[1.02] transition-all duration-300 reveal" :style="{ transitionDelay: `${i * 100}ms` }">
             <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
               <component :is="feature.icon" class="w-6 h-6 text-primary" />
             </div>
             <h3 class="font-bold text-text-heading mb-2 text-lg">{{ feature.title }}</h3>
             <p class="text-text-muted text-sm">{{ feature.desc }}</p>
          </div>
        </div>
      </Container>
    </section>

    <!-- Signup Form -->
    <section id="signup-form" class="py-24 relative">
       <div class="absolute inset-0 bg-hero-gradient opacity-20 animate-pulse-slow"></div>
       <Container class="relative z-10">
          <div class="max-w-2xl mx-auto bg-surface border border-border rounded-[2rem] p-8 md:p-12 backdrop-blur-xl shadow-2xl reveal">
             <div class="text-center mb-8">
                <h2 class="text-3xl font-bold text-text-heading mb-2">Create Your Account</h2>
                <p class="text-text-muted">Join BlocPoint in less than 2 minutes. No fees required.</p>
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
                   <label class="text-sm font-medium text-text-heading group-focus-within:text-primary transition-colors">I want to use BlocPoint as:</label>
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
                   <span class="text-sm text-text-muted">I agree to the BlocPoint Terms of Service and Privacy Policy.</span>
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

    <!-- FAQ -->
    <section class="py-24 bg-surface/30 border-y border-border" id="faq">
       <Container>
          <div class="text-center mb-16 reveal">
             <h2 class="text-3xl font-bold text-text-heading">Frequently Asked Questions</h2>
          </div>
          
          <div class="max-w-3xl mx-auto space-y-4 reveal">
             <div v-for="(item, i) in faq" :key="i" class="border border-border rounded-xl bg-surface overflow-hidden hover:border-primary/30 transition-colors">
                <button @click="toggleFaq(i)" class="w-full flex items-center justify-between p-4 text-left font-medium text-text-heading hover:bg-white/5 transition-colors">
                   {{ item.q }}
                   <ChevronDownIcon :class="['w-5 h-5 text-text-muted transition-transform duration-300', openFaq === i ? 'rotate-180' : '']" />
                </button>
                <div v-show="openFaq === i" class="p-4 pt-0 text-sm text-text-muted border-t border-border/50 mt-2 animate-fade-in">
                   {{ item.a }}
                </div>
             </div>
          </div>
       </Container>
    </section>

    <!-- Footer Disclaimer -->
    <div class="py-8 border-t border-border bg-bg text-center text-xs text-text-muted px-4">
       <Container>
          BlocPoint is a comprehensive fintech platform. Some features are tier-gated and subject to verification, limits, and monitoring. Blockchain anchoring is used for integrity verification only—no personal data is stored on-chain.
       </Container>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import Container from '../components/ui/Container.vue'
import Button from '../components/ui/Button.vue'
import PhoneMock from '../components/shared/PhoneMock.vue'
import confetti from 'canvas-confetti'
import { useScrollReveal } from '../composables/useScrollReveal'
import { 
  CheckCircleIcon, 
  ChevronDownIcon, 
  Loader2Icon,
  Wallet,
  Send,
  Gift,
  TrendingUp,
  Shield,
  Zap
} from 'lucide-vue-next'

const loading = ref(false)
const openFaq = ref<number | null>(null)

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

const scrollToForm = () => {
  document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' })
}

const toggleFaq = (i: number) => {
  openFaq.value = openFaq.value === i ? null : i
}

// Content Data
const chips = ['T+0 Wallet Updates', 'Tiered Access', 'Instant Transfers', 'Audit Integrity', 'No Hidden Fees']

const features = [
  { icon: Wallet, title: 'NGN Wallet', desc: 'Instant transfers with T+0 settlement. Send money to anyone in Nigeria.' },
  { icon: Gift, title: 'Digital Products', desc: 'Buy gift cards, airtime, and data bundles directly from your wallet.' },
  { icon: TrendingUp, title: 'Remittance & Loans', desc: 'Send cross-border payments and access micro-loans based on your history.' },
  { icon: Shield, title: 'Stablecoins (Tier 3)', desc: 'Access USDT and USDC with enhanced verification and compliance.' },
  { icon: Send, title: 'Agent Mode (Optional)', desc: 'Activate to serve customers with SoftPOS, cash-out, and earn commissions.' },
  { icon: Zap, title: 'Instant Settlement', desc: 'All transactions update your wallet balance instantly. No waiting.' }
]

const faq = [
  { q: 'Is there a fee to create an account?', a: 'No! Creating a BlocPoint account is completely free. You only pay transaction fees when you use specific services.' },
  { q: 'What\'s the difference between regular user and agent?', a: 'Regular users can send transfers, buy digital products, access remittance, and get loans. Agents get all these features PLUS SoftPOS card acceptance, cash-out services, and commission earnings.' },
  { q: 'Can I switch from regular user to agent later?', a: 'Yes! You can activate agent mode anytime from your account settings. You\'ll need an Android device for SoftPOS features.' },
  { q: 'How long does verification take?', a: 'Tier 1 (phone verification) is instant. Tier 2 (BVN/NIN) takes 1-2 business days. Tier 3 (enhanced due diligence) takes 3-5 business days.' },
  { q: 'What are the transaction limits?', a: 'Tier 1: ₦50k daily. Tier 2: ₦500k daily. Tier 3: ₦2M daily. Limits apply to total transaction volume.' },
  { q: 'Is my money safe?', a: 'Yes. BlocPoint uses bank-grade security, multi-factor authentication, and real-time fraud monitoring. Your funds are protected.' }
]
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
