<template>
  <div>
    <Navbar @open-join="goToOnboarding" @open-demo="openDemo=true" />
    <main>
      <slot />
    </main>
    <Footer />
    <Modal :open="openJoin" title="Join Founding Agents" @close="openJoin=false">
      <JoinForm @submitted="toast('Request received'); openJoin=false" @close="openJoin=false" />
    </Modal>
    
    <VideoModal :open="openDemo" @close="openDemo=false" />
    
    <Toast :open="toastOpen" :message="toastMessage" />
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Navbar from './Navbar.vue'
import Footer from './Footer.vue'
import Modal from '../ui/Modal.vue'
import VideoModal from '../ui/VideoModal.vue'
import Toast from '../ui/Toast.vue'
import JoinForm from '../shared/JoinForm.vue'

const router = useRouter()
const openJoin = ref(false)
const openDemo = ref(false)
const toastOpen = ref(false)
const toastMessage = ref('')

const toast = (msg: string) => {
  toastMessage.value = msg
  toastOpen.value = true
  setTimeout(() => (toastOpen.value = false), 2000)
}

const goToOnboarding = () => {
  router.push('/agent-onboarding')
}
</script>
