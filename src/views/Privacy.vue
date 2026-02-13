<template>
  <div class="pt-32 pb-24 overflow-hidden">
    <!-- Hero Section -->
    <section class="relative py-20 bg-surface/30 border-b border-border">
      <div class="absolute inset-0 bg-hero-gradient opacity-30"></div>
      <Container class="relative z-10">
        <div class="max-w-4xl mx-auto text-center space-y-6">
          <div class="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
            <LockIcon class="w-4 h-4" />
            <span>Last Updated: February 2026</span>
          </div>
          <h1 class="text-4xl sm:text-6xl font-extrabold tracking-tight text-text-heading leading-tight">
            Privacy Policy
          </h1>
          <p class="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
            We value your trust. This policy outlines how we collect, use, and protect your personal information in compliance with global data protection standards.
          </p>
        </div>
      </Container>
    </section>

    <!-- Main Content -->
    <section class="py-16">
      <Container>
        <div class="grid lg:grid-cols-4 gap-12">
          <!-- Sidebar Navigation -->
          <div class="hidden lg:block col-span-1">
            <div class="sticky top-32 space-y-2">
              <h3 class="font-bold text-text-heading mb-4 px-4">Contents</h3>
              <nav class="flex flex-col space-y-1">
                <a 
                  v-for="(item, i) in sections" 
                  :key="i"
                  :href="`#${item.id}`"
                  class="px-4 py-2 rounded-lg text-sm text-text-muted hover:text-primary hover:bg-surface transition-colors border-l-2 border-transparent hover:border-primary"
                  :class="{ 'text-primary bg-surface border-primary': activeSection === item.id }"
                  @click.prevent="scrollTo(item.id)"
                >
                  {{ item.title }}
                </a>
              </nav>
            </div>
          </div>

          <!-- Policy Content -->
          <div class="col-span-3 space-y-16">
            <div id="data" class="scroll-mt-32 space-y-6">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <DatabaseIcon class="w-5 h-5" />
                </div>
                <h2 class="text-2xl font-bold text-text-heading">1. Data We Collect</h2>
              </div>
              <div class="prose prose-invert max-w-none text-text-muted">
                <p>To provide our services and comply with financial regulations, we collect the following types of information:</p>
                <div class="grid md:grid-cols-2 gap-4 not-prose mt-6">
                  <div class="p-4 rounded-xl bg-surface border border-border">
                    <h4 class="font-semibold text-text-heading mb-2">Identity Information</h4>
                    <p class="text-sm">Government-issued ID, biometric data (selfies), full name, and date of birth for KYC verification.</p>
                  </div>
                  <div class="p-4 rounded-xl bg-surface border border-border">
                    <h4 class="font-semibold text-text-heading mb-2">Contact Details</h4>
                    <p class="text-sm">Email address, phone number, and physical address for communication and account security.</p>
                  </div>
                  <div class="p-4 rounded-xl bg-surface border border-border">
                    <h4 class="font-semibold text-text-heading mb-2">Device Signals</h4>
                    <p class="text-sm">IP address, device model, OS version, and geolocation for fraud prevention and integrity checks.</p>
                  </div>
                  <div class="p-4 rounded-xl bg-surface border border-border">
                    <h4 class="font-semibold text-text-heading mb-2">Transaction Logs</h4>
                    <p class="text-sm">Details of payments, transfers, and settlements processed through the Blocpoint platform.</p>
                  </div>
                </div>
              </div>
            </div>

            <div id="usage" class="scroll-mt-32 space-y-6">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
                  <ActivityIcon class="w-5 h-5" />
                </div>
                <h2 class="text-2xl font-bold text-text-heading">2. How We Use Your Data</h2>
              </div>
              <div class="prose prose-invert max-w-none text-text-muted">
                <ul class="space-y-2 list-none pl-0">
                  <li class="flex items-start gap-3">
                    <CheckCircleIcon class="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Onboarding & Verification:</strong> Processing your application to become an agent and verifying your identity against global watchlists.</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <CheckCircleIcon class="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Fraud Prevention:</strong> Detecting and blocking suspicious activities, account takeovers, and money laundering attempts.</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <CheckCircleIcon class="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Service Delivery:</strong> Facilitating payments, settlements, and providing customer support.</span>
                  </li>
                  <li class="flex items-start gap-3">
                    <CheckCircleIcon class="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                    <span><strong>Compliance:</strong> Meeting our legal obligations under banking and financial service regulations.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div id="retention" class="scroll-mt-32 space-y-6">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-500">
                  <ClockIcon class="w-5 h-5" />
                </div>
                <h2 class="text-2xl font-bold text-text-heading">3. Data Retention</h2>
              </div>
              <p class="text-text-muted leading-relaxed">
                We retain your personal data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.
              </p>
              <div class="p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/20">
                <p class="text-sm text-yellow-500 font-medium">
                  Typically, financial transaction records are retained for a minimum of 5-7 years as mandated by law.
                </p>
              </div>
            </div>

            <div id="sharing" class="scroll-mt-32 space-y-6">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500">
                  <Share2Icon class="w-5 h-5" />
                </div>
                <h2 class="text-2xl font-bold text-text-heading">4. Data Sharing</h2>
              </div>
              <p class="text-text-muted leading-relaxed">
                We do not sell your personal data. We may share your information with:
              </p>
              <div class="grid md:grid-cols-2 gap-6">
                <div class="flex items-start gap-3">
                  <div class="w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center flex-shrink-0">1</div>
                  <div>
                    <h4 class="font-semibold text-text-heading">Service Providers</h4>
                    <p class="text-sm text-text-muted">Cloud hosting, identity verification services, and payment processors under strict data processing agreements.</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center flex-shrink-0">2</div>
                  <div>
                    <h4 class="font-semibold text-text-heading">Legal Authorities</h4>
                    <p class="text-sm text-text-muted">When required by a subpoena, court order, or similar legal procedure.</p>
                  </div>
                </div>
              </div>
            </div>

            <div id="rights" class="scroll-mt-32 space-y-6">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <ShieldIcon class="w-5 h-5" />
                </div>
                <h2 class="text-2xl font-bold text-text-heading">5. Your Rights</h2>
              </div>
              <p class="text-text-muted">
                Depending on your jurisdiction, you may have the following rights regarding your personal data:
              </p>
              <div class="flex flex-wrap gap-3">
                <span class="px-3 py-1.5 rounded-lg bg-surface border border-border text-sm text-text-heading">Access</span>
                <span class="px-3 py-1.5 rounded-lg bg-surface border border-border text-sm text-text-heading">Correction</span>
                <span class="px-3 py-1.5 rounded-lg bg-surface border border-border text-sm text-text-heading">Deletion</span>
                <span class="px-3 py-1.5 rounded-lg bg-surface border border-border text-sm text-text-heading">Portability</span>
                <span class="px-3 py-1.5 rounded-lg bg-surface border border-border text-sm text-text-heading">Withdraw Consent</span>
              </div>
              
              <div class="mt-8 p-8 rounded-2xl bg-surface border border-border text-center">
                <h3 class="text-xl font-bold text-text-heading mb-4">Questions about your data?</h3>
                <p class="text-text-muted mb-6">Our Data Protection Officer is available to address any concerns.</p>
                <Button variant="primary" @click="openContact = true">
                  Contact Privacy Team
                  <template #icon><MailIcon class="w-4 h-4" /></template>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <ContactModal 
      :open="openContact" 
      title="Contact Privacy Team" 
      @close="openContact = false" 
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Container from '../components/ui/Container.vue'
import Button from '../components/ui/Button.vue'
import ContactModal from '../components/ui/ContactModal.vue'
import { 
  LockIcon, 
  DatabaseIcon, 
  ActivityIcon, 
  ClockIcon, 
  Share2Icon, 
  ShieldIcon, 
  CheckCircleIcon,
  MailIcon
} from 'lucide-vue-next'

const openContact = ref(false)
const activeSection = ref('data')

const sections = [
  { id: 'data', title: 'Data Collection' },
  { id: 'usage', title: 'Data Usage' },
  { id: 'retention', title: 'Retention' },
  { id: 'sharing', title: 'Data Sharing' },
  { id: 'rights', title: 'Your Rights' }
]

const scrollTo = (id: string) => {
  activeSection.value = id
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
