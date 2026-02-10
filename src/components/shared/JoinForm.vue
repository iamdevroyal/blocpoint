<template>
  <form @submit.prevent="submit" class="space-y-4">
    <div class="space-y-2">
      <label class="text-sm font-medium text-text-heading">Full Name</label>
      <input v-model="form.name" required type="text" class="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-text transition-all" placeholder="Enter your full name" />
    </div>

    <div class="space-y-2">
      <label class="text-sm font-medium text-text-heading">Email Address</label>
      <input v-model="form.email" required type="email" class="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-text transition-all" placeholder="you@example.com" />
    </div>

    <div class="space-y-2">
      <label class="text-sm font-medium text-text-heading">Phone Number</label>
      <input v-model="form.phone" required type="tel" class="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-text transition-all" placeholder="080..." />
    </div>

    <div class="space-y-2">
      <label class="text-sm font-medium text-text-heading">State</label>
      <select v-model="form.state" required class="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-text transition-all appearance-none" @change="onStateChange">
        <option value="" disabled>Select State</option>
        <option v-for="s in states" :key="s.isoCode" :value="s.isoCode">{{ s.name }}</option>
      </select>
    </div>

    <div class="space-y-2">
      <label class="text-sm font-medium text-text-heading">City / LGA</label>
      <select v-model="form.city" required class="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-text transition-all appearance-none" :disabled="!form.state">
        <option value="" disabled>Select City</option>
        <option v-for="c in cities" :key="c.name" :value="c.name">{{ c.name }}</option>
      </select>
    </div>
    
    <div class="space-y-2">
      <label class="text-sm font-medium text-text-heading">Role</label>
      <select v-model="form.role" required class="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-text transition-all appearance-none">
        <option value="" disabled>Select Role</option>
        <option>POS Agent</option>
        <option>Mobile Money Agent</option>
        <option>Retail Shop Owner</option>
        <option>Super Agent / Aggregator</option>
        <option>Other</option>
      </select>
    </div>

    <div class="space-y-2">
      <label class="text-sm font-medium text-text-heading">Monthly Volume</label>
      <select v-model="form.volume" required class="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-text transition-all appearance-none">
        <option value="" disabled>Select Volume</option>
        <option>₦0 – ₦50k</option>
        <option>₦50k – ₦200k</option>
        <option>₦200k – ₦500k</option>
        <option>₦500k – ₦1m</option>
        <option>₦1m+</option>
      </select>
    </div>

    <div class="flex items-start gap-3 pt-2">
       <input v-model="form.terms" type="checkbox" required class="mt-1 w-4 h-4 rounded border-border bg-surface text-primary focus:ring-primary cursor-pointer" />
       <span class="text-sm text-text-muted">I agree to the Terms of Service and Privacy Policy.</span>
    </div>

    <Button type="submit" variant="primary" class="w-full" :disabled="loading">
      <span v-if="loading" class="flex items-center gap-2">
        <Loader2Icon class="w-4 h-4 animate-spin" /> Processing...
      </span>
      <span v-else>Submit Application</span>
    </Button>
  </form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import Button from '../ui/Button.vue'
import { Loader2Icon } from 'lucide-vue-next'
import { State, City } from 'country-state-city'

const emit = defineEmits(['submitted'])
const loading = ref(false)

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

const submit = async () => {
  loading.value = true
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))
  loading.value = false
  emit('submitted')
}
</script>
