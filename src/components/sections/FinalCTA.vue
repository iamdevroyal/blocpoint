<template>
  <section class="py-24">
    <Container>
      <div class="relative rounded-[3rem] overflow-hidden bg-primary-dark p-12 lg:p-24 text-center">
        <!-- Background decorative elements -->
        <div class="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div class="absolute -top-24 -left-24 w-96 h-96 bg-white/10 blur-[100px] rounded-full"></div>
        
        <div class="relative z-10 max-w-3xl mx-auto space-y-8">
           <h2 class="text-4xl md:text-6xl font-extrabold text-white leading-tight">
             Ready to Upgrade Your Payment Journey?
           </h2>
           <p class="text-xl text-white/80 leading-relaxed">
             Join the network of modern users and agents redefining financial services across Nigeria.
             Start with fiat rails and unlock digital assets as you grow.
           </p>
           <div class="flex flex-col sm:flex-row gap-4 justify-center pt-4">
             <Button variant="glow" class="px-12 py-4 text-lg" @click="openJoin=true">
               Get Started
               <template #icon><ArrowRightIcon class="w-5 h-5" /></template>
             </Button>
             <Button variant="secondary" class="px-12 py-4 text-lg" @click="openVideo=true">
               View Demo
             </Button>
           </div>
        </div>
      </div>
    </Container>
    <VideoModal :open="openVideo" @close="openVideo=false" />
    <Modal :open="openJoin" title="Get Started with BlocPoint" @close="openJoin=false">
      <JoinForm @submitted="openJoin=false" @close="openJoin=false" />
    </Modal>
  </section>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import Container from '../ui/Container.vue'
import Button from '../ui/Button.vue'
import VideoModal from '../ui/VideoModal.vue'
import Modal from '../ui/Modal.vue'
import JoinForm from '../shared/JoinForm.vue'
import { ArrowRightIcon } from 'lucide-vue-next'

const openVideo = ref(false)
const openJoin = ref(false)
</script>
