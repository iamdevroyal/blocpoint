<template>
  <div class="overflow-hidden">
    <!-- 1) Top Ribbon / Pre-header -->
    <div class="mt-8 bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-3 relative z-20 animate-fade-in-down">
      <Container>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-xs sm:text-sm text-center">
           <div class="flex items-center gap-2">
             <span class="bg-white/20 px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider animate-pulse">Limited Slots</span>
             <span class="font-medium">Founding Agent Tier Boosts Active</span>
           </div>
           <span class="hidden sm:inline text-white/40">|</span>
           <span class="text-white/80">Built for serious agents who want speed, reliability, and more earning lanes.</span>
        </div>
      </Container>
    </div>

    <!-- 2) Hero Section -->
    <section class="relative pt-16 pb-24">
      <div class="absolute inset-0 bg-hero-gradient opacity-40"></div>
      <Container class="relative z-10">
        <div class="max-w-4xl mx-auto text-center space-y-8 reveal">
          <h1 class="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-text-heading leading-[1.1]">
            Become a BlocPoint <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Founding Agent</span>
          </h1>
          
          <p class="text-xl sm:text-2xl font-bold text-text-heading">
             Turn your Android phone into a secure Liquidity Hub.
          </p>

          <p class="text-lg text-text-muted max-w-2xl mx-auto leading-relaxed">
            Accept payments and serve customers from anywhere — <strong class="text-text-heading">transfers, cash-out, card acceptance (SoftPOS)</strong>, digital products like <strong class="text-text-heading">gift cards</strong>, and (for approved agents) <strong class="text-text-heading">stablecoin distribution</strong> — with <strong class="text-text-heading">instant T+0 wallet updates</strong>.
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
             <p class="text-sm text-text-muted mt-6 font-medium">No bulky POS. No maintenance headaches. Built for speed, trust, and daily volume.</p>
          </div>

          <div class="flex flex-col sm:flex-row gap-4 justify-center pt-8 reveal">
            <Button variant="primary" class="px-8 py-4 text-lg shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/40 transition-all duration-300 transform hover:-translate-y-1" @click="scrollToForm">
              Become a Founding Agent
            </Button>
            <Button variant="secondary" class="px-8 py-4 text-lg hover:bg-surface/80 transition-colors">
              Request a Demo
            </Button>
          </div>
          
          <p class="text-xs text-text-muted max-w-lg mx-auto reveal">
            Stablecoin features are available only to approved Tier 3 agents and are subject to limits and monitoring.
          </p>
        </div>
      </Container>
    </section>

    <!-- 3) Pricing / Founding Agent Pack -->
    <section class="py-24 bg-surface/30 border-y border-border">
      <Container>
        <div class="text-center mb-16 reveal">
           <h2 class="text-3xl font-bold text-text-heading mb-4">Founding Agent Pack</h2>
           <p class="text-text-muted">Secure your Founding Agent access to BlocPoint. Early agents get priority onboarding and tier progression support.</p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div class="p-8 rounded-3xl bg-surface border border-border backdrop-blur-sm relative overflow-hidden group hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 reveal">
             <div class="absolute top-0 right-0 bg-primary/10 px-4 py-1 rounded-bl-xl text-primary text-xs font-bold uppercase">Required</div>
             <h3 class="text-xl font-bold text-text-heading mb-2">Founding Access Fee</h3>
             <div class="text-4xl font-extrabold text-text-heading mb-2">₦9,999</div>
             <p class="text-sm text-text-muted mb-6">One-time onboarding + activation processing</p>
             <ul class="space-y-3 text-sm text-text-muted">
               <li class="flex items-center gap-2"><CheckIcon class="w-4 h-4 text-green-500" /> Priority Verification</li>
               <li class="flex items-center gap-2"><CheckIcon class="w-4 h-4 text-green-500" /> Dedicated Account Manager</li>
               <li class="flex items-center gap-2"><CheckIcon class="w-4 h-4 text-green-500" /> Marketing Kit Access</li>
             </ul>
          </div>

          <div class="p-8 rounded-3xl bg-surface border border-border backdrop-blur-sm relative overflow-hidden group hover:border-green-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-2 reveal" style="transition-delay: 100ms">
             <div class="absolute top-0 right-0 bg-green-500/10 px-4 py-1 rounded-bl-xl text-green-500 text-xs font-bold uppercase">Recommended</div>
             <h3 class="text-xl font-bold text-text-heading mb-2">Float Support Deposit</h3>
             <div class="text-4xl font-extrabold text-text-heading mb-2">₦15,000</div>
             <p class="text-sm text-text-muted mb-6">Optional pre-funding for instant liquidity readiness</p>
             <ul class="space-y-3 text-sm text-text-muted">
               <li class="flex items-center gap-2"><CheckIcon class="w-4 h-4 text-green-500" /> Instant Transaction Ability</li>
               <li class="flex items-center gap-2"><CheckIcon class="w-4 h-4 text-green-500" /> 100% Refundable per Terms</li>
               <li class="flex items-center gap-2"><CheckIcon class="w-4 h-4 text-green-500" /> Boosts Tier 1 Limits</li>
             </ul>
          </div>
        </div>
        
        <div class="text-center mt-8 text-xs text-text-muted reveal">
           Fees may vary by onboarding route and operational region. Final terms are shown before confirmation.
        </div>
      </Container>
    </section>

    <!-- 4) Countdown -->
    <section class="py-16 bg-gradient-to-r from-indigo-900/20 to-purple-900/20 border-b border-border">
      <Container>
        <div class="flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto reveal">
           <div class="text-center md:text-left">
              <h2 class="text-2xl font-bold text-text-heading mb-2">Founding Slots Close Soon</h2>
              <p class="text-text-muted max-w-md">Once slots fill, onboarding pauses for the next batch. Secure your spot now and be ready for launch day.</p>
           </div>
           
           <div class="flex gap-4 text-center">
              <div class="bg-surface border border-border rounded-xl p-3 min-w-[80px] animate-float" style="animation-delay: 0s">
                 <div class="text-2xl font-bold text-primary">{{ time.days }}</div>
                 <div class="text-xs text-text-muted uppercase tracking-wider">Days</div>
              </div>
              <div class="bg-surface border border-border rounded-xl p-3 min-w-[80px] animate-float" style="animation-delay: 0.2s">
                 <div class="text-2xl font-bold text-primary">{{ time.hours }}</div>
                 <div class="text-xs text-text-muted uppercase tracking-wider">Hours</div>
              </div>
              <div class="bg-surface border border-border rounded-xl p-3 min-w-[80px] animate-float" style="animation-delay: 0.4s">
                 <div class="text-2xl font-bold text-primary">{{ time.minutes }}</div>
                 <div class="text-xs text-text-muted uppercase tracking-wider">Mins</div>
              </div>
              <div class="bg-surface border border-border rounded-xl p-3 min-w-[80px] animate-float" style="animation-delay: 0.6s">
                 <div class="text-2xl font-bold text-primary">{{ time.seconds }}</div>
                 <div class="text-xs text-text-muted uppercase tracking-wider">Secs</div>
              </div>
           </div>
        </div>
      </Container>
    </section>

    <!-- 5) Accept Payments Your Way -->
    <section class="py-24">
      <Container>
        <div class="max-w-4xl mx-auto text-center mb-12 reveal">
           <h2 class="text-3xl font-bold text-text-heading mb-4">Accept Payments Your Way</h2>
           <p class="text-text-muted">BlocPoint lets you earn across multiple transaction lanes — not just withdrawals.</p>
        </div>

        <div class="flex flex-wrap justify-center gap-3 mb-8 reveal">
           <div v-for="(tab, i) in paymentTabs" :key="tab" 
             class="px-6 py-3 rounded-full bg-surface border border-border text-text font-medium hover:border-primary/50 hover:bg-surface/80 transition-all duration-300 cursor-default hover:scale-105"
             :style="{ transitionDelay: `${i * 50}ms` }"
           >
             {{ tab }}
           </div>
        </div>
        
        <div class="text-center reveal">
           <p class="text-sm text-text-muted mb-8">Switch between services in seconds. Every transaction updates your wallet instantly.</p>
           <Button variant="primary" @click="scrollToForm">Activate as a Founding Agent</Button>
        </div>
      </Container>
    </section>

    <!-- 6) Comparison Table -->
    <section class="py-24 bg-surface/30 border-y border-border">
      <Container>
        <div class="text-center mb-16 reveal">
          <h2 class="text-3xl font-bold text-text-heading mb-4">BlocPoint vs Traditional POS</h2>
          <p class="text-text-muted">Same agent hustle — but better rails, more earning lanes, and instant settlement.</p>
        </div>

        <div class="max-w-5xl mx-auto overflow-hidden rounded-3xl border border-border bg-surface reveal">
           <div class="grid grid-cols-3 bg-surface p-6 border-b border-border font-bold text-text-heading text-lg">
              <div class="col-span-1">Feature</div>
              <div class="col-span-1 text-center text-primary">BlocPoint</div>
              <div class="col-span-1 text-center text-text-muted">Traditional POS</div>
           </div>
           
           <div v-for="(row, i) in comparisonRows" :key="i" class="grid grid-cols-3 p-6 border-b border-border last:border-0 hover:bg-white/5 transition-colors items-center group">
              <div class="col-span-1 font-medium text-text group-hover:translate-x-1 transition-transform">{{ row.feature }}</div>
              <div class="col-span-1 text-center font-semibold text-text-heading group-hover:scale-105 transition-transform">{{ row.blocpoint }}</div>
              <div class="col-span-1 text-center text-text-muted group-hover:opacity-80 transition-opacity">{{ row.traditional }}</div>
           </div>
        </div>
        
        <div class="text-center mt-6 text-xs text-text-muted reveal">Exact capabilities may vary by region and partner rails.</div>
      </Container>
    </section>

    <!-- 7) Signup Form -->
    <section id="signup-form" class="py-24 relative">
       <div class="absolute inset-0 bg-hero-gradient opacity-20 animate-pulse-slow"></div>
       <Container class="relative z-10">
          <div class="max-w-2xl mx-auto bg-surface border border-border rounded-[2rem] p-8 md:p-12 backdrop-blur-xl shadow-2xl reveal">
             <div class="text-center mb-8">
                <h2 class="text-3xl font-bold text-text-heading mb-2">Create Your Agent Account</h2>
                <p class="text-text-muted">Join the Founding Agent program in minutes.</p>
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

                <!-- Location -->
                <div class="grid grid-cols-2 gap-4">
                   <div class="space-y-2 group">
                      <label class="text-sm font-medium text-text-heading group-focus-within:text-primary transition-colors">State</label>
                      <select v-model="form.state" class="w-full px-4 py-3 rounded-xl bg-bg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-text transition-all appearance-none" required @change="onStateChange">
                         <option value="" disabled>Select State</option>
                         <option v-for="s in states" :key="s.isoCode" :value="s.isoCode">{{ s.name }}</option>
                      </select>
                   </div>
                   <div class="space-y-2 group">
                      <label class="text-sm font-medium text-text-heading group-focus-within:text-primary transition-colors">City / LGA</label>
                      <select v-model="form.city" class="w-full px-4 py-3 rounded-xl bg-bg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-text transition-all appearance-none" required :disabled="!form.state">
                         <option value="" disabled>Select City</option>
                         <option v-for="c in cities" :key="c.name" :value="c.name">{{ c.name }}</option>
                      </select>
                   </div>
                </div>

                <!-- Profile -->
                <div class="space-y-2 group">
                   <label class="text-sm font-medium text-text-heading group-focus-within:text-primary transition-colors">What best describes you?</label>
                   <select v-model="form.role" class="w-full px-4 py-3 rounded-xl bg-bg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-text transition-all appearance-none" required>
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
                   <select v-model="form.volume" class="w-full px-4 py-3 rounded-xl bg-bg border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-text transition-all appearance-none" required>
                      <option value="" disabled>Select Volume</option>
                      <option>₦0 – ₦50k</option>
                      <option>₦50k – ₦200k</option>
                      <option>₦200k – ₦500k</option>
                      <option>₦500k – ₦1m</option>
                      <option>₦1m+</option>
                   </select>
                </div>

                <!-- Terms -->
                <div class="flex items-start gap-3 pt-2">
                   <input v-model="form.terms" type="checkbox" class="mt-1 w-4 h-4 rounded border-border bg-bg text-primary focus:ring-primary cursor-pointer" required />
                   <span class="text-sm text-text-muted">I agree to the BlocPoint Founding Agent Terms and understand that stablecoin features require Tier 3 approval.</span>
                </div>

                <Button type="submit" variant="primary" class="w-full py-4 text-lg shadow-lg hover:shadow-primary/25 transition-all duration-300" :disabled="loading">
                   <span v-if="loading" class="flex items-center gap-2">
                     <Loader2Icon class="w-5 h-5 animate-spin" /> Processing...
                   </span>
                   <span v-else>Become a Founding Agent</span>
                </Button>

                <div class="text-center text-sm text-text-muted">
                   <a href="#" class="text-primary hover:underline">Already registered? Log in to continue</a>
                </div>
                
                <div class="text-center text-xs text-text-muted border-t border-border pt-4 mt-4">
                   We’ll send onboarding steps and verification requirements after you submit.
                </div>
             </form>
          </div>
       </Container>
    </section>

    <!-- 8) Why Join -->
    <section class="py-24 bg-surface/30 border-y border-border">
       <Container>
          <div class="text-center mb-16 reveal">
             <h2 class="text-3xl font-bold text-text-heading mb-4">Why Join as a Founding Agent?</h2>
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
             <div v-for="(reason, i) in reasons" :key="i" class="p-6 rounded-2xl bg-surface border border-border hover:bg-white/5 hover:scale-[1.02] transition-all duration-300 reveal" :style="{ transitionDelay: `${i * 100}ms` }">
                <h3 class="font-bold text-text-heading mb-2 text-lg">{{ reason.title }}</h3>
                <p class="text-text-muted text-sm">{{ reason.desc }}</p>
             </div>
          </div>
       </Container>
    </section>

    <!-- 9) How It Works -->
    <section class="py-24">
       <Container>
          <div class="text-center mb-16 reveal">
             <h2 class="text-3xl font-bold text-text-heading">How It Works</h2>
          </div>
          
          <div class="grid md:grid-cols-4 gap-8">
             <div v-for="(step, i) in steps" :key="i" class="text-center relative reveal" :style="{ transitionDelay: `${i * 150}ms` }">
                <!-- Connector Line -->
                <div v-if="i !== 3" class="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-border -z-10"></div>
                
                <div class="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center font-bold text-primary mx-auto mb-4 relative z-10 shadow-lg group hover:scale-110 transition-transform duration-300">
                   {{ i + 1 }}
                </div>
                <h3 class="font-bold text-text-heading mb-2">{{ step.title }}</h3>
                <p class="text-sm text-text-muted">{{ step.desc }}</p>
             </div>
          </div>
       </Container>
    </section>

    <!-- 10) Important Notes -->
    <section class="py-16 bg-surface/50 border-y border-border">
       <Container>
          <div class="max-w-4xl mx-auto reveal">
             <h3 class="text-xl font-bold text-text-heading mb-6 text-center">Important Notes</h3>
             <div class="flex flex-wrap gap-4 justify-center">
                <div v-for="(note, i) in notes" :key="note" class="flex items-center gap-2 px-4 py-2 rounded-lg bg-bg border border-border text-sm text-text-muted hover:border-primary/30 transition-colors cursor-default" :style="{ transitionDelay: `${i * 50}ms` }">
                   <AlertCircleIcon class="w-4 h-4 text-primary flex-shrink-0" />
                   {{ note }}
                </div>
             </div>
          </div>
       </Container>
    </section>

    <!-- 11) FAQ -->
    <section class="py-24" id="faq">
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

    <!-- 12) Final CTA -->
    <section class="py-24">
       <Container>
          <div class="rounded-[3rem] bg-gradient-to-br from-indigo-900 to-purple-900 p-12 lg:p-24 text-center relative overflow-hidden group reveal">
             <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 group-hover:opacity-20 transition-opacity duration-700"></div>
             <div class="relative z-10 max-w-3xl mx-auto">
                <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">Ready to join BlocPoint?</h2>
                <p class="text-lg text-white/80 mb-10">
                   Become a Founding Agent and start earning across more transaction lanes — with instant wallet updates and tier-based growth.
                </p>
                <Button variant="glow" class="px-8 py-4 text-lg hover:scale-105 transition-transform duration-300" @click="scrollToForm">
                   Become a Founding Agent
                </Button>
                <div class="mt-6 text-sm text-white/60 hover:text-white cursor-pointer transition-colors">Already registered? Continue onboarding</div>
             </div>
          </div>
       </Container>
    </section>

    <!-- 13) Footer Disclaimer -->
    <div class="py-8 border-t border-border bg-bg text-center text-xs text-text-muted px-4">
       <Container>
          BlocPoint is building agent-first financial infrastructure. Some features are tier-gated and subject to verification, limits, and monitoring. Blockchain anchoring is used for integrity verification only—no personal data is stored on-chain.
       </Container>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted, onBeforeUnmount } from 'vue'
import Container from '../components/ui/Container.vue'
import Button from '../components/ui/Button.vue'
import PhoneMock from '../components/shared/PhoneMock.vue'
import { State, City } from 'country-state-city'
import confetti from 'canvas-confetti'
import { useScrollReveal } from '../composables/useScrollReveal'
import { 
  CheckCircleIcon, 
  CheckIcon, 
  ChevronDownIcon, 
  Loader2Icon, 
  AlertCircleIcon
} from 'lucide-vue-next'

const loading = ref(false)
const openFaq = ref<number | null>(null)

// Initialize scroll animations
useScrollReveal('.reveal')

// Countdown Logic
const time = reactive({ days: 0, hours: 0, minutes: 0, seconds: 0 })
const targetDate = new Date()
targetDate.setDate(targetDate.getDate() + 3) // 3 days from now

const updateTimer = () => {
  const now = new Date().getTime()
  const distance = targetDate.getTime() - now
  
  if (distance < 0) return

  time.days = Math.floor(distance / (1000 * 60 * 60 * 24))
  time.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  time.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  time.seconds = Math.floor((distance % (1000 * 60)) / 1000)
}

let timerInterval: any
onMounted(() => {
  timerInterval = setInterval(updateTimer, 1000)
  updateTimer()
})
onBeforeUnmount(() => clearInterval(timerInterval))

// Form Logic
const form = reactive({
  name: '',
  email: '',
  phone: '',
  state: '',
  city: '',
  role: '',
  volume: '',
  terms: false
})

const states = ref(State.getStatesOfCountry('NG'))
const cities = ref<any[]>([])

const onStateChange = () => {
  cities.value = City.getCitiesOfState('NG', form.state)
  form.city = ''
}

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
  alert('Application Submitted! Check your email for next steps.')
}

const scrollToForm = () => {
  document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' })
}

const toggleFaq = (i: number) => {
  openFaq.value = openFaq.value === i ? null : i
}

// Content Data
const chips = ['T+0 Wallet Updates', 'Tiered KYC Access', 'Commission Engine', 'Risk Monitoring', 'Audit Integrity']
const paymentTabs = ['Transfers', 'Cash-out', 'Tap-to-Pay (SoftPOS)', 'Gift Cards', 'Stablecoins (Tier 3)']

const comparisonRows = [
  { feature: 'Device Required', blocpoint: 'Android phone (SoftPOS)', traditional: 'POS hardware required' },
  { feature: 'Setup & Onboarding', blocpoint: 'Fast, tier-based', traditional: 'Hardware-dependent' },
  { feature: 'Settlement Speed', blocpoint: 'T+0 internal updates', traditional: 'T+1 or delayed' },
  { feature: 'Earning Lanes', blocpoint: 'Multi-product suite', traditional: 'Cash-out focused' },
  { feature: 'Commission Structure', blocpoint: 'Tier-based + boosts', traditional: 'Flat / Inconsistent' },
  { feature: 'Risk & Monitoring', blocpoint: 'Built-in limits & audit', traditional: 'Limited visibility' },
  { feature: 'Maintenance', blocpoint: 'No hardware repairs', traditional: 'Replacement costs' },
  { feature: 'Audit Integrity', blocpoint: 'Tamper-evident logs', traditional: 'Minimal visibility' }
]

const reasons = [
  { title: 'Instant Wallet Updates (T+0)', desc: 'Know your balance immediately after each transaction.' },
  { title: 'More Ways to Earn', desc: 'Go beyond cash-out: gift cards and tier-based digital products.' },
  { title: 'Tier Growth Path', desc: 'Unlock higher limits, better commissions, and premium features as you grow.' },
  { title: 'Trust & Control', desc: 'Built-in monitoring and limits help protect serious agents.' },
  { title: 'No Hardware Stress', desc: 'Operate from your phone without POS repair and replacement costs.' },
  { title: 'Audit-Ready History', desc: 'Clear transaction trails, receipts, and integrity checks.' }
]

const steps = [
  { title: '1. Register', desc: 'Create your account and reserve your Founding Agent slot.' },
  { title: '2. Verify & Get Tiered Access', desc: 'Submit KYC and receive Tier 1/2/3 status based on verification.' },
  { title: '3. Start Earning', desc: 'Begin serving customers — transfers, cash-out, card acceptance, and more.' },
  { title: '4. Unlock More Products', desc: 'Gift cards activate by tier; stablecoins unlock for approved Tier 3 agents.' }
]

const notes = [
  'Founding access is limited; onboarding may pause when slots fill.',
  'Your tier and limits depend on verification and risk checks.',
  'Stablecoin distribution is Tier 3 only and subject to strict limits and monitoring.',
  'No card-funded stablecoin distribution is allowed.',
  'Keep your device secure; compromised devices may be restricted.',
  'Fees and commissions vary by transaction type and region.'
]

const faq = [
  { q: 'What is BlocPoint?', a: 'BlocPoint is an agent-first platform that turns your Android phone into a payment and liquidity hub — built for fast settlement and multiple earning lanes.' },
  { q: 'Do I need a POS machine?', a: 'No. BlocPoint is designed to work on Android smartphones (SoftPOS-ready where applicable).' },
  { q: 'How does T+0 settlement work?', a: 'BlocPoint uses an internal ledger to update your wallet instantly when transactions complete. External rails may still have their own confirmation timings.' },
  { q: 'What do I need to become an agent?', a: 'A smartphone, a valid phone number, and the required verification details for your tier.' },
  { q: 'How do tiers work (Tier 1–3)?', a: 'Tier access is based on verification depth. Higher tiers unlock higher limits and more features.' },
  { q: 'Are stablecoins available to everyone?', a: 'No. Stablecoin features are only available to approved Tier 3 agents and are monitored with limits.' },
  { q: 'Can I fund stablecoin sales with card payments?', a: 'No. BlocPoint does not support card-funded stablecoin distribution for safety and compliance reasons.' },
  { q: 'How do reversals/disputes work?', a: 'Eligible transactions can be tracked and managed through a structured workflow with clear status updates and audit logs.' },
  { q: 'What phones are supported?', a: 'Most modern Android devices are supported. Some features may require specific security standards and device integrity checks.' },
  { q: 'How do I get support?', a: 'Founding Agents get priority onboarding support. You’ll also have in-app help and escalation channels.' }
]
</script>

<style scoped>
@keyframes fade-in-down {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.2; }
  50% { opacity: 0.3; }
}

.animate-fade-in-down {
  animation: fade-in-down 0.8s ease-out forwards;
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
  opacity: 0; /* Starts hidden */
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out forwards;
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-pulse-slow {
  animation: pulse-slow 4s ease-in-out infinite;
}
</style>
