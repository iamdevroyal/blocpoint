<template>
  <div class="pt-32 pb-24 overflow-hidden">
    <!-- Hero Section -->
    <section class="relative py-20 bg-surface/30 border-b border-border">
      <div class="absolute inset-0 bg-hero-gradient opacity-30"></div>
      <Container class="relative z-10">
        <div class="max-w-4xl mx-auto text-center space-y-6">
          <div class="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-medium text-green-400 backdrop-blur-sm">
            <ShieldCheckIcon class="w-4 h-4" />
            <span>Bank-Grade Compliance</span>
          </div>
          <h1 class="text-4xl sm:text-6xl font-extrabold tracking-tight text-text-heading leading-tight">
            Built on Trust, <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">Secured by Design</span>
          </h1>
          <p class="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
            Our compliance framework is designed to protect our agents, their customers, and the integrity of the financial system without compromising speed.
          </p>
        </div>
      </Container>
    </section>

    <!-- Core Compliance Pillars -->
    <section class="py-24">
      <Container>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BentoCard class="md:col-span-2 lg:col-span-1">
            <template #icon><UserCheckIcon class="w-8 h-8 text-primary" /></template>
            <template #title>Tiered KYC Model</template>
            <template #description>
              A progressive verification system that balances access with security. Agents can start small and unlock higher limits as they build trust.
            </template>
            <template #footer>
              <div class="space-y-3">
                <div class="flex items-center justify-between text-sm p-2 rounded-lg bg-surface border border-border">
                  <span class="text-text-muted">Tier 1</span>
                  <span class="text-text font-medium">Basic ID Check</span>
                </div>
                <div class="flex items-center justify-between text-sm p-2 rounded-lg bg-surface border border-border">
                  <span class="text-text-muted">Tier 2</span>
                  <span class="text-text font-medium">Biometric + Address</span>
                </div>
                <div class="flex items-center justify-between text-sm p-2 rounded-lg bg-surface border border-border">
                  <span class="text-text-muted">Tier 3</span>
                  <span class="text-text font-medium">Enhanced Due Diligence</span>
                </div>
              </div>
            </template>
          </BentoCard>

          <BentoCard>
            <template #icon><ActivityIcon class="w-8 h-8 text-yellow-400" /></template>
            <template #title>Real-time Monitoring</template>
            <template #description>
              Our AI-driven engine monitors transactions 24/7 for suspicious patterns, velocity spikes, and structuring attempts.
            </template>
            <template #footer>
              <div class="flex flex-wrap gap-2">
                <span class="px-2 py-1 rounded bg-yellow-400/10 text-yellow-400 text-xs border border-yellow-400/20">Velocity Checks</span>
                <span class="px-2 py-1 rounded bg-yellow-400/10 text-yellow-400 text-xs border border-yellow-400/20">Geo-fencing</span>
                <span class="px-2 py-1 rounded bg-yellow-400/10 text-yellow-400 text-xs border border-yellow-400/20">Pattern Matching</span>
              </div>
            </template>
          </BentoCard>

          <BentoCard>
            <template #icon><LockIcon class="w-8 h-8 text-purple-400" /></template>
            <template #title>Data Sovereignty</template>
            <template #description>
              All sensitive PII is encrypted at rest and in transit. We employ zero-knowledge proofs where possible to verify without revealing.
            </template>
            <template #footer>
              <div class="flex items-center gap-2 text-sm text-text-muted">
                <CheckCircleIcon class="w-4 h-4 text-green-500" />
                AES-256 Encryption
              </div>
            </template>
          </BentoCard>
        </div>
      </Container>
    </section>

    <!-- Technical Security -->
    <section class="py-24 bg-surface/30 border-y border-border">
      <Container>
        <div class="text-center mb-16">
          <h2 class="text-3xl font-bold text-text-heading mb-4">Technical Safeguards</h2>
          <p class="text-text-muted">Security is baked into the codebase, not added as an afterthought.</p>
        </div>

        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div class="space-y-6">
            <div class="flex gap-4">
              <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <SmartphoneIcon class="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 class="text-xl font-bold text-text-heading mb-2">Device Integrity</h3>
                <p class="text-text-muted">
                  The BlocPoint app performs continuous health checks on the agent's device. Rooted or compromised devices are automatically blocked from the network.
                </p>
              </div>
            </div>
            
            <div class="flex gap-4">
              <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <DatabaseIcon class="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 class="text-xl font-bold text-text-heading mb-2">Immutable Audit Trails</h3>
                <p class="text-text-muted">
                  Every critical action is logged. Transaction batches are hashed and anchored to a public ledger for tamper-proof auditability.
                </p>
              </div>
            </div>

            <div class="flex gap-4">
              <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <BanIcon class="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 class="text-xl font-bold text-text-heading mb-2">Prohibited Flows</h3>
                <p class="text-text-muted">
                  Strict enforcement against high-risk activities. We explicitly block card-funded stablecoin purchases and transfers to sanctioned entities.
                </p>
              </div>
            </div>
          </div>

          <div class="relative">
            <!-- Visual Representation of Security Layers -->
            <div class="absolute inset-0 bg-gradient-to-r from-primary/20 to-green-400/20 blur-3xl rounded-full"></div>
            <div class="relative bg-surface border border-border p-8 rounded-3xl space-y-6 backdrop-blur-xl">
              <div class="flex items-center justify-between border-b border-border pb-4">
                <span class="text-sm font-medium text-text-muted">Security Layer</span>
                <span class="text-sm font-medium text-text-muted">Status</span>
              </div>
              
              <div v-for="(layer, i) in layers" :key="i" class="flex items-center justify-between">
                <div class="flex items-center gap-3">
                  <component :is="layer.icon" class="w-5 h-5" :class="layer.color" />
                  <span class="text-text font-medium">{{ layer.name }}</span>
                </div>
                <div class="flex items-center gap-2">
                  <div class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span class="text-sm text-green-500 font-medium">Active</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <!-- Disclaimer & Contact -->
    <section class="py-24">
      <Container>
        <div class="max-w-3xl mx-auto text-center space-y-8">
          <div class="p-6 rounded-2xl bg-surface border border-yellow-500/20 bg-yellow-500/5 text-left">
            <h4 class="font-bold text-yellow-500 mb-2 flex items-center gap-2">
              <AlertTriangleIcon class="w-5 h-5" />
              Disclaimer
            </h4>
            <p class="text-sm text-text-muted leading-relaxed">
              The information provided on this page is for informational purposes only and does not constitute legal or financial advice. 
              BlocPoint operates in strict accordance with local regulations in each jurisdiction. Features and limits may vary by region.
            </p>
          </div>

          <div class="pt-8">
            <h3 class="text-2xl font-bold text-text-heading mb-4">Have specific compliance questions?</h3>
            <p class="text-text-muted mb-8">Our dedicated compliance team is ready to assist partners and regulators.</p>
            <Button variant="secondary" @click="openContact = true">
              Contact Compliance Team
              <template #icon><ArrowRightIcon class="w-4 h-4" /></template>
            </Button>
          </div>
        </div>
      </Container>
    </section>

    <ContactModal 
      :open="openContact" 
      title="Contact Compliance" 
      @close="openContact = false" 
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Container from '../components/ui/Container.vue'
import BentoCard from '../components/ui/BentoCard.vue'
import Button from '../components/ui/Button.vue'
import ContactModal from '../components/ui/ContactModal.vue'
import { 
  ShieldCheckIcon, 
  UserCheckIcon, 
  ActivityIcon, 
  LockIcon, 
  SmartphoneIcon, 
  DatabaseIcon, 
  BanIcon,
  CheckCircleIcon,
  AlertTriangleIcon,
  ArrowRightIcon,
  FingerprintIcon,
  ServerIcon,
  GlobeIcon
} from 'lucide-vue-next'

const openContact = ref(false)

const layers = [
  { name: 'App Integrity', icon: SmartphoneIcon, color: 'text-blue-400' },
  { name: 'Transport Encryption', icon: LockIcon, color: 'text-purple-400' },
  { name: 'Biometric Auth', icon: FingerprintIcon, color: 'text-pink-400' },
  { name: 'Ledger Anchoring', icon: ServerIcon, color: 'text-cyan-400' },
  { name: 'Sanctions Screening', icon: GlobeIcon, color: 'text-red-400' }
]
</script>
