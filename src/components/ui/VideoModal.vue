<template>
  <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" aria-modal="true" role="dialog">
    <!-- Backdrop -->
    <div class="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity" @click="emit('close')"></div>
    
    <!-- Modal Content -->
    <div class="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 z-10">
      <button 
        class="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-white/10 text-white transition-colors z-20 backdrop-blur-md border border-white/10" 
        @click="emit('close')"
      >
        <XIcon class="w-5 h-5" />
      </button>

      <!-- Loading Spinner -->
      <div v-if="isLoading" class="absolute inset-0 flex items-center justify-center bg-neutral-900 z-10">
        <div class="w-12 h-12 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin"></div>
      </div>
      
      <iframe 
        v-if="open"
        :src="`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`" 
        class="w-full h-full relative z-0" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen
        @load="onLoad"
      ></iframe>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { XIcon } from 'lucide-vue-next'

const props = defineProps({
  open: Boolean,
  videoId: {
    type: String,
    default: 'UbaUe6lo2Lc'
  }
})

const emit = defineEmits(['close'])
const isLoading = ref(true)

const onLoad = () => {
  isLoading.value = false
}

// Reset loading state when modal re-opens
watch(() => props.open, (newVal) => {
  if (newVal) {
    isLoading.value = true
  }
})
</script>
