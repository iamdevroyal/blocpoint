<template>
  <div>
    <!-- Chat Window -->
    <transition name="slide-up">
      <div 
        v-if="isOpen" 
        class="fixed bottom-24 right-4 left-4 sm:left-auto sm:right-6 z-50 w-auto sm:w-[350px] h-[500px] bg-surface border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl"
      >
        <!-- Header -->
        <div class="p-4 border-b border-border bg-primary/10 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
              <img src="/blocpoint-fav.png" alt="Blocci" class="w-5 h-5" />
            </div>
            <div>
              <h3 class="font-bold text-text-heading text-sm">Blocci AI</h3>
              <p class="text-xs text-primary flex items-center gap-1">
                <span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                Online
              </p>
            </div>
          </div>
          <button @click="isOpen = false" class="text-text-muted hover:text-text transition-colors">
            <XIcon class="w-5 h-5" />
          </button>
        </div>

        <!-- Messages Area -->
        <div ref="chatContainer" class="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
          <!-- Welcome Message -->
          <div class="flex gap-3">
            <div class="w-8 h-8 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center border border-primary/30 mt-1">
              <img src="/blocpoint-fav.png" alt="Blocci" class="w-5 h-5" />
            </div>
            <div class="bg-surface border border-border rounded-2xl rounded-tl-none p-3 text-sm text-text max-w-[85%] shadow-sm">
              <p>Hi there! 👋 I'm Blocci. How can I help you today?</p>
            </div>
          </div>

          <!-- Dynamic Messages -->
          <div v-for="msg in messages" :key="msg.id" class="flex gap-3" :class="msg.sender === 'user' ? 'flex-row-reverse' : ''">
            <!-- Avatar for Bot -->
            <div v-if="msg.sender === 'bot'" class="w-8 h-8 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center border border-primary/30 mt-1">
              <img src="/blocpoint-fav.png" alt="Blocci" class="w-5 h-5" />
            </div>
            
            <!-- Message Bubble -->
            <div :class="[
              'p-3 text-sm max-w-[85%] shadow-sm break-words',
              msg.sender === 'user' 
                ? 'bg-primary text-white rounded-2xl rounded-tr-none' 
                : 'bg-surface border border-border text-text rounded-2xl rounded-tl-none'
            ]">
              <p>{{ msg.text }}</p>
            </div>
          </div>

          <!-- Typing Indicator -->
          <div v-if="isTyping" class="flex gap-3">
            <div class="w-8 h-8 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center border border-primary/30 mt-1">
              <img src="/blocpoint-fav.png" alt="Blocci" class="w-5 h-5" />
            </div>
            <div class="bg-surface border border-border rounded-2xl rounded-tl-none p-4 text-sm text-text max-w-[85%] shadow-sm flex items-center gap-1">
              <div class="w-2 h-2 bg-text-muted/50 rounded-full animate-bounce" style="animation-delay: 0s"></div>
              <div class="w-2 h-2 bg-text-muted/50 rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
              <div class="w-2 h-2 bg-text-muted/50 rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
            </div>
          </div>
        </div>

        <!-- Quick Questions (Chips) -->
        <div class="p-4 border-t border-border bg-surface/50">
          <div 
            ref="questionsContainer"
            class="flex gap-2 overflow-x-auto pb-2 mb-2 no-scrollbar"
            @mouseenter="isPaused = true"
            @mouseleave="isPaused = false"
            @touchstart="isPaused = true"
            @touchend="isPaused = false"
          >
            <button 
              v-for="(q, idx) in displayQuestions" 
              :key="`${q.id}-${idx}`"
              @click="askQuestion(q)"
              :disabled="isTyping || isGenerating"
              class="flex-shrink-0 whitespace-nowrap px-3 py-1.5 rounded-full bg-surface border border-primary/20 hover:border-primary/50 text-xs text-text-muted hover:text-primary transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {{ q.text }}
            </button>
          </div>
          
          <!-- Input Area -->
          <form @submit.prevent="handleManualSubmit" class="relative">
            <input 
              v-model="inputValue" 
              type="text" 
              placeholder="Type your question..." 
              class="w-full pl-4 pr-10 py-3 rounded-xl bg-surface border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none text-sm text-text transition-all"
              :disabled="isTyping || isGenerating"
            />
            <button 
              type="submit" 
              :disabled="!inputValue.trim() || isTyping || isGenerating"
              class="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-primary hover:bg-primary/10 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <SendIcon class="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </transition>

    <!-- Trigger Button -->
    <button 
      v-if="!isOpen"
      @click="isOpen = true"
      class="fixed bottom-6 right-6 z-50 group flex items-center gap-3 pr-6 pl-2 py-2 rounded-full bg-surface border border-primary/30 shadow-lg shadow-indigo-500/20 hover:border-primary hover:bg-surface/80 backdrop-blur-md transition-all duration-300"
    >
      <div class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30 group-hover:scale-110 transition-transform duration-300">
        <img src="/blocpoint-fav.png" alt="Blocci" class="w-6 h-6" />
      </div>
      <span class="font-medium text-text-heading group-hover:text-primary transition-colors">Ask Blocci</span>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref, nextTick, watch, onMounted, onBeforeUnmount, computed } from 'vue'
import { XIcon, SendIcon } from 'lucide-vue-next'
import { site } from '../../content/siteContent'

const isOpen = ref(false)
const isTyping = ref(false)
const isGenerating = ref(false)
const inputValue = ref('')
const chatContainer = ref<HTMLElement | null>(null)
const questionsContainer = ref<HTMLElement | null>(null)
const isPaused = ref(false)
let animationId: number

interface Message {
  id: number
  text: string
  sender: 'user' | 'bot'
}

const messages = ref<Message[]>([])

const questions = site.faq.map((f, i) => ({
  id: i,
  text: f.q,
  answer: f.a
}))

// Duplicate questions for seamless scrolling loop
const displayQuestions = computed(() => [...questions, ...questions])

const startAutoScroll = () => {
  const scroll = () => {
    if (questionsContainer.value && !isPaused.value) {
      questionsContainer.value.scrollLeft += 0.5
      
      // Reset scroll position for seamless loop
      if (questionsContainer.value.scrollLeft >= (questionsContainer.value.scrollWidth / 2)) {
        questionsContainer.value.scrollLeft -= (questionsContainer.value.scrollWidth / 2)
      }
    }
    animationId = requestAnimationFrame(scroll)
  }
  animationId = requestAnimationFrame(scroll)
}

onMounted(() => {
  startAutoScroll()
})

onBeforeUnmount(() => {
  cancelAnimationFrame(animationId)
})

const scrollToBottom = async () => {
  await nextTick()
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight
  }
}

const typeWriterEffect = async (text: string) => {
  isGenerating.value = true
  const msgId = Date.now()
  messages.value.push({ id: msgId, text: "", sender: 'bot' })
  
  for (let i = 0; i < text.length; i++) {
    const currentMsg = messages.value.find(m => m.id === msgId)
    if (currentMsg) {
      currentMsg.text += text[i]
      await scrollToBottom() // Auto scroll as we type
    }
    await new Promise(resolve => setTimeout(resolve, 20 + Math.random() * 20)) // Random typing speed
  }
  isGenerating.value = false
}

const processAnswer = async (answer: string) => {
  isTyping.value = true
  await scrollToBottom()
  
  // Simulate "thinking" time
  await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 500))
  
  isTyping.value = false
  await typeWriterEffect(answer)
}

const askQuestion = (q: typeof questions[0]) => {
  messages.value.push({ id: Date.now(), text: q.text, sender: 'user' })
  processAnswer(q.answer)
}

const handleManualSubmit = () => {
  if (!inputValue.value.trim()) return
  
  const text = inputValue.value.trim()
  messages.value.push({ id: Date.now(), text, sender: 'user' })
  inputValue.value = ''
  
  // Simple fallback response for manual input since we don't have a real backend
  const fallbackAnswer = "I'm currently in beta mode and mostly trained on the predefined questions above. Please try one of those or contact our support team for specific inquiries!"
  processAnswer(fallbackAnswer)
}

watch(messages.value, () => {
  scrollToBottom()
})
</script>

<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
