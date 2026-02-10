<template>
  <Modal :open="open" :title="title" @close="emit('close')">
    <div v-if="success" class="text-center py-12 space-y-6">
      <div class="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
        <CheckCircleIcon class="w-10 h-10 text-green-500" />
      </div>
      <h3 class="text-2xl font-bold text-text-heading">Message Sent!</h3>
      <p class="text-text-muted">
        Thanks for reaching out. Our team will get back to you within 24 hours.
      </p>
      <Button variant="primary" @click="emit('close')" class="mt-4">
        Close
      </Button>
    </div>

    <form v-else @submit.prevent="handleSubmit" class="space-y-4">
      <div class="grid grid-cols-2 gap-4">
        <div class="space-y-2">
          <label class="text-sm font-medium text-text-heading">First Name</label>
          <input 
            required 
            v-model="form.firstName"
            type="text" 
            class="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-text transition-all"
            placeholder="Jane"
          />
        </div>
        <div class="space-y-2">
          <label class="text-sm font-medium text-text-heading">Last Name</label>
          <input 
            required 
            v-model="form.lastName"
            type="text" 
            class="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-text transition-all"
            placeholder="Doe"
          />
        </div>
      </div>

      <div class="space-y-2">
        <label class="text-sm font-medium text-text-heading">Email</label>
        <input 
          required 
          v-model="form.email"
          type="email" 
          class="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-text transition-all"
          placeholder="jane@company.com"
        />
      </div>

      <div class="space-y-2">
        <label class="text-sm font-medium text-text-heading">Subject</label>
        <select 
          v-model="form.subject"
          class="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-text transition-all"
        >
          <option>Partnership Inquiry</option>
          <option>Become an Agent</option>
          <option>Investor Relations</option>
          <option>General Support</option>
        </select>
      </div>

      <div class="space-y-2">
        <label class="text-sm font-medium text-text-heading">Message</label>
        <textarea 
          required 
          v-model="form.message"
          rows="4" 
          class="w-full px-4 py-3 rounded-xl bg-surface border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-text transition-all resize-none"
          placeholder="Tell us how we can help..."
        ></textarea>
      </div>

      <div class="pt-4">
        <Button 
          type="submit" 
          variant="primary" 
          class="w-full"
          :disabled="loading"
        >
          <span v-if="loading" class="flex items-center gap-2">
            <Loader2Icon class="w-4 h-4 animate-spin" />
            Sending...
          </span>
          <span v-else>Send Message</span>
        </Button>
      </div>
    </form>
  </Modal>
</template>

<script lang="ts" setup>
import { ref, reactive } from 'vue'
import Modal from './Modal.vue'
import Button from './Button.vue'
import { CheckCircleIcon, Loader2Icon } from 'lucide-vue-next'
import confetti from 'canvas-confetti'

const props = defineProps<{
  open: boolean
  title?: string
}>()

const emit = defineEmits(['close'])

const loading = ref(false)
const success = ref(false)

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  subject: 'Partnership Inquiry',
  message: ''
})

const handleSubmit = async () => {
  loading.value = true
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  loading.value = false
  success.value = true
  
  // Trigger confetti
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#6366f1', '#a855f7', '#ec4899', '#14b8a6']
  })
}
</script>
