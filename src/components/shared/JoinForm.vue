<template>
  <div class="space-y-4 relative min-h-[400px]">
    <!-- Success View -->
    <div v-if="isSuccess" class="absolute inset-0 flex flex-col items-center justify-center text-center space-y-6 animate-fade-in">
      <div class="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-2">
        <CheckCircleIcon class="w-10 h-10 text-green-500" />
      </div>
      <div>
        <h3 class="text-2xl font-bold text-white mb-2">Request Received!</h3>
        <p class="text-neutral-400 max-w-xs mx-auto">
          Thank you for your interest. We've sent a verification email to <span class="text-white font-medium">{{ form.email }}</span>.
        </p>
      </div>
      <div class="bg-neutral-900/50 rounded-xl p-4 w-full text-left border border-white/5 space-y-3">
        <div class="text-sm font-medium text-white">Next Steps:</div>
        <ul class="space-y-2 text-sm text-neutral-400">
          <li class="flex items-start gap-2">
            <span class="flex h-5 w-5 items-center justify-center rounded-full bg-neutral-800 text-[10px] text-white shrink-0">1</span>
            Check your inbox for the verification link.
          </li>
          <li class="flex items-start gap-2">
            <span class="flex h-5 w-5 items-center justify-center rounded-full bg-neutral-800 text-[10px] text-white shrink-0">2</span>
            Complete the KYC profile in your dashboard.
          </li>
          <li class="flex items-start gap-2">
            <span class="flex h-5 w-5 items-center justify-center rounded-full bg-neutral-800 text-[10px] text-white shrink-0">3</span>
            Wait for an agent manager to approve your account.
          </li>
        </ul>
      </div>
      <Button variant="primary" class="w-full" @click="emit('close')">Done</Button>
    </div>

    <!-- Form View -->
    <div v-else class="space-y-4">
      <div class="text-lg font-semibold">{{ demo ? 'Request a Demo' : 'Join Founding Agents' }}</div>
      <form class="grid gap-3" @submit.prevent="submit">
        <input v-model="form.name" type="text" placeholder="Full name" class="rounded-xl bg-neutral-900 border border-neutral-700 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none transition-colors" required>
        
        <div class="grid grid-cols-2 gap-3">
          <input v-model="form.email" type="email" placeholder="Email" class="rounded-xl bg-neutral-900 border border-neutral-700 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none transition-colors" required>
          <input v-model="form.phone" type="tel" placeholder="Phone" class="rounded-xl bg-neutral-900 border border-neutral-700 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none transition-colors" required>
        </div>

        <!-- Location Fields -->
        <div class="grid grid-cols-2 gap-3">
          <div class="relative">
            <select v-model="form.country" class="w-full rounded-xl bg-neutral-900 border border-neutral-700 px-3 py-2 text-sm appearance-none focus:border-indigo-500 focus:outline-none transition-colors" required @change="onCountryChange">
              <option value="" disabled>Select Country</option>
              <option v-for="c in countries" :key="c.isoCode" :value="c.isoCode">{{ c.name }}</option>
            </select>
            <ChevronDownIcon class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none" />
          </div>

          <div class="relative">
            <select v-model="form.state" class="w-full rounded-xl bg-neutral-900 border border-neutral-700 px-3 py-2 text-sm appearance-none focus:border-indigo-500 focus:outline-none transition-colors" required :disabled="!form.country" @change="onStateChange">
              <option value="" disabled>Select State</option>
              <option v-for="s in states" :key="s.isoCode" :value="s.isoCode">{{ s.name }}</option>
            </select>
            <ChevronDownIcon class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none" />
          </div>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div class="relative">
            <select v-model="form.city" class="w-full rounded-xl bg-neutral-900 border border-neutral-700 px-3 py-2 text-sm appearance-none focus:border-indigo-500 focus:outline-none transition-colors" required :disabled="!form.state">
              <option value="" disabled>Select City</option>
              <option v-for="c in cities" :key="c.name" :value="c.name">{{ c.name }}</option>
            </select>
             <ChevronDownIcon class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none" />
          </div>
          <input v-model="form.address" type="text" placeholder="Street Address" class="rounded-xl bg-neutral-900 border border-neutral-700 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none transition-colors" required>
        </div>

        <div class="relative">
          <select v-model="form.volume" class="w-full rounded-xl bg-neutral-900 border border-neutral-700 px-3 py-2 text-sm appearance-none focus:border-indigo-500 focus:outline-none transition-colors" required>
            <option value="" disabled>Current daily volume</option>
            <option>₦0–₦50,000</option>
            <option>₦50,000–₦250,000</option>
            <option>₦250,000–₦1,000,000</option>
            <option>₦1,000,000+</option>
          </select>
          <ChevronDownIcon class="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 pointer-events-none" />
        </div>

        <div class="flex gap-2 pt-2">
          <Button variant="ghost" type="button" @click="reset" :disabled="isLoading">Reset</Button>
          <Button variant="primary" type="submit" :disabled="isLoading" class="flex-1">
            <span v-if="isLoading" class="flex items-center gap-2">
              <Loader2Icon class="w-4 h-4 animate-spin" />
              Processing...
            </span>
            <span v-else>Submit Application</span>
          </Button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref, onMounted, computed } from 'vue'
import Button from '../ui/Button.vue'
import { Country, State, City } from 'country-state-city'
import confetti from 'canvas-confetti'
import { ChevronDownIcon, Loader2Icon, CheckCircleIcon } from 'lucide-vue-next'

const props = defineProps<{ demo?: boolean }>()
const emit = defineEmits<{ submitted: []; close: [] }>()

const isLoading = ref(false)
const isSuccess = ref(false)

const form = reactive({ 
  name: '', 
  phone: '', 
  email: '', 
  country: '', 
  state: '', 
  city: '',
  address: '',
  volume: '' 
})

// Data Sources
const countries = computed(() => Country.getAllCountries())
const states = ref<any[]>([])
const cities = ref<any[]>([])

// Handlers
const onCountryChange = () => {
  states.value = State.getStatesOfCountry(form.country)
  form.state = ''
  form.city = ''
  cities.value = []
}

const onStateChange = () => {
  cities.value = City.getCitiesOfState(form.country, form.state)
  form.city = ''
}

const submit = async () => {
  if (!form.name || !form.phone || !form.email || !form.country || !form.state || !form.city || !form.address || !form.volume) return
  
  isLoading.value = true
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  try {
    const data = JSON.stringify({ ...form, demo: !!props.demo })
    localStorage.setItem('blocpoint:form', data)
  } catch {}
  
  isLoading.value = false
  isSuccess.value = true
  
  // Trigger Confetti
  confetti({
    particleCount: 150,
    spread: 100,
    origin: { y: 0.6 },
    colors: ['#6366f1', '#a855f7', '#ec4899', '#22c55e']
  })
}

const reset = () => {
  form.name = ''
  form.phone = ''
  form.email = ''
  form.country = ''
  form.state = ''
  form.city = ''
  form.address = ''
  form.volume = ''
  states.value = []
  cities.value = []
}
</script>

<style scoped>
@keyframes fade-in {
  from { opacity: 0; transform: scale(0.95); }
  to { opacity: 1; transform: scale(1); }
}

.animate-fade-in {
  animation: fade-in 0.3s ease-out forwards;
}
</style>
