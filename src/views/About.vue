<template>
  <div class="pt-20 pb-24 overflow-hidden">
    <!-- Hero Section -->
    <section class="relative py-20 lg:py-32">
      <div class="absolute inset-0 bg-hero-gradient opacity-50"></div>
      <Container class="relative z-10">
        <div class="max-w-4xl mx-auto text-center space-y-8">
          <div class="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
            <span class="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
            <span>Our Mission</span>
          </div>
          <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-text-heading leading-tight">
            Building the Financial <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Nervous System</span> of Africa
          </h1>
          <p class="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
            We are empowering a new generation of agents to become trusted micro-banks. 
            Bridging the gap between cash, digital payments, and the future of finance.
          </p>
        </div>
      </Container>
    </section>

    <!-- The Problem / Solution -->
    <section class="py-24 relative">
      <Container>
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <div class="space-y-8">
            <h2 class="text-3xl md:text-5xl font-bold text-text-heading">Why We Exist</h2>
            <div class="space-y-6 text-lg text-text-muted">
              <p>
                Across emerging markets, cash is still king, but the digital economy is booming. 
                The bridge between them is broken—plagued by slow settlements, high fees, and a lack of trust.
              </p>
              <p>
                Traditional banks can't reach everyone. Mobile money agents are the lifeline, 
                but they operate with outdated tools and thin margins.
              </p>
              <p class="text-text font-medium border-l-4 border-primary pl-4">
                BlocPoint changes the equation. We give agents the technology of a neobank, 
                the liquidity of a market maker, and the security of a vault.
              </p>
            </div>
          </div>
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-3xl rounded-full"></div>
            <div class="relative grid grid-cols-2 gap-4">
              <div class="space-y-4 translate-y-8">
                <div class="p-6 rounded-2xl bg-surface border border-border backdrop-blur-md">
                  <TrendingUpIcon class="w-8 h-8 text-green-400 mb-4" />
                  <div class="font-bold text-text text-xl">98%</div>
                  <div class="text-sm text-text-muted">Settlement Success</div>
                </div>
                <div class="p-6 rounded-2xl bg-surface border border-border backdrop-blur-md">
                  <UsersIcon class="w-8 h-8 text-indigo-400 mb-4" />
                  <div class="font-bold text-text text-xl">50k+</div>
                  <div class="text-sm text-text-muted">Target Agents</div>
                </div>
              </div>
              <div class="space-y-4">
                <div class="p-6 rounded-2xl bg-surface border border-border backdrop-blur-md">
                  <ZapIcon class="w-8 h-8 text-yellow-400 mb-4" />
                  <div class="font-bold text-text text-xl">T+0</div>
                  <div class="text-sm text-text-muted">Instant Liquidity</div>
                </div>
                <div class="p-6 rounded-2xl bg-surface border border-border backdrop-blur-md">
                  <GlobeIcon class="w-8 h-8 text-cyan-400 mb-4" />
                  <div class="font-bold text-text text-xl">3</div>
                  <div class="text-sm text-text-muted">Markets Launching</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <!-- Core Values -->
    <section class="py-24 bg-surface/30 border-y border-border">
      <Container>
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-5xl font-bold mb-6 text-text-heading">Our Core Values</h2>
          <p class="text-lg text-text-muted">The principles that guide every line of code we write.</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <BentoCard v-for="(value, i) in values" :key="i">
            <template #icon>
              <component :is="value.icon" class="w-6 h-6 text-primary" />
            </template>
            <template #title>{{ value.title }}</template>
            <template #description>{{ value.desc }}</template>
          </BentoCard>
        </div>
      </Container>
    </section>

    <!-- Roadmap -->
    <section class="py-24 relative overflow-hidden">
      <Container>
        <div class="text-center mb-20">
          <h2 class="text-3xl md:text-5xl font-bold mb-6 text-text-heading">The Road Ahead</h2>
          <p class="text-lg text-text-muted">Our strategic path to market dominance.</p>
        </div>

        <div class="relative max-w-4xl mx-auto">
          <!-- Central Line -->
          <div class="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/0 via-primary to-primary/0 md:-translate-x-1/2"></div>

          <div class="space-y-12 md:space-y-24">
            <div v-for="(phase, i) in roadmap" :key="i" class="relative flex flex-col md:flex-row gap-8 md:gap-0 group">
              <!-- Dot -->
              <div class="absolute left-[11px] md:left-1/2 top-0 w-5 h-5 rounded-full border-4 border-surface bg-primary md:-translate-x-1/2 z-10 shadow-[0_0_15px_rgba(99,102,241,0.5)]"></div>
              
              <!-- Content -->
              <div :class="['md:w-1/2 pl-12 md:pl-0 flex flex-col', i % 2 === 0 ? 'md:pr-16 md:items-end md:text-right' : 'md:ml-auto md:pl-16']">
                <div class="inline-flex items-center gap-2 mb-2 text-primary font-bold tracking-wider text-sm uppercase">
                  {{ phase.timeline }}
                </div>
                <h3 class="text-2xl font-bold text-text-heading mb-3">{{ phase.title }}</h3>
                <p class="text-text-muted leading-relaxed mb-4 max-w-sm">{{ phase.desc }}</p>
                
                <ul class="space-y-2" :class="[i % 2 === 0 ? 'md:items-end' : '']">
                  <li v-for="item in phase.items" :key="item" class="flex items-center gap-2 text-sm text-text-muted" :class="[i % 2 === 0 ? 'md:flex-row-reverse' : '']">
                    <CheckCircleIcon class="w-4 h-4 text-green-500 flex-shrink-0" />
                    <span>{{ item }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <!-- CTA -->
    <section class="py-24">
      <Container>
        <div class="rounded-[3rem] bg-gradient-to-br from-indigo-900 to-purple-900 p-12 lg:p-24 text-center relative overflow-hidden">
          <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div class="relative z-10 max-w-3xl mx-auto">
            <h2 class="text-3xl md:text-5xl font-bold text-white mb-6">Ready to shape the future?</h2>
            <p class="text-lg text-white/80 mb-10">
              We are looking for partners, investors, and early adopters who share our vision of a financially inclusive Africa.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="glow" class="px-8 py-4 text-lg" @click="openContact = true">
                Contact Our Team
                <template #icon><MailIcon class="w-5 h-5" /></template>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <ContactModal :open="openContact" title="Get in Touch" @close="openContact = false" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import Container from '../components/ui/Container.vue'
import BentoCard from '../components/ui/BentoCard.vue'
import Button from '../components/ui/Button.vue'
import ContactModal from '../components/ui/ContactModal.vue'
import { 
  TrendingUpIcon, 
  UsersIcon, 
  ZapIcon, 
  GlobeIcon,
  ShieldCheckIcon,
  ScaleIcon,
  HeartHandshakeIcon,
  LightbulbIcon,
  CheckCircleIcon,
  MailIcon
} from 'lucide-vue-next'

const openContact = ref(false)

const values = [
  {
    title: 'Trust First',
    desc: 'We operate in a low-trust environment. We bridge the gap with immutable ledgers and bank-grade compliance.',
    icon: ShieldCheckIcon
  },
  {
    title: 'Radical Transparency',
    desc: 'No hidden fees. No black-box algorithms. Our agents see exactly what they earn and where their money is.',
    icon: ScaleIcon
  },
  {
    title: 'Agent Obsession',
    desc: 'We don\'t just build for agents; we build with them. Their liquidity and profitability is our north star.',
    icon: HeartHandshakeIcon
  },
  {
    title: 'Fearless Innovation',
    desc: 'We aren\'t afraid to replace legacy rails with DeFi infrastructure where it makes sense and adds value.',
    icon: LightbulbIcon
  }
]

const roadmap = [
  {
    timeline: 'Phase 1 • 2026 Q1-Q2',
    title: 'Foundation & Fiat Rails',
    desc: 'Establishing the core agent network with rock-solid fiat payment processing and SoftPOS technology.',
    items: ['Instant Settlement Engine', 'SoftPOS Android App', 'Agent Dashboard V1', 'Regulatory Licenses']
  },
  {
    timeline: 'Phase 2 • 2026 Q3',
    title: 'Digital Services Expansion',
    desc: 'Layering high-margin digital products on top of the payment rails to boost agent revenue.',
    items: ['Gift Card Marketplace', 'Utility Bill Aggregation', 'Airtime & Data APIs', 'P2P Transfer Network']
  },
  {
    timeline: 'Phase 3 • 2026 Q4',
    title: 'DeFi Integration',
    desc: 'Unlocking the power of stablecoins for cross-border liquidity and inflation-resistant savings.',
    items: ['USDC/USDT Wallets', 'Yield-bearing Savings', 'Cross-border Remittance', 'Smart Contract Escrow']
  },
  {
    timeline: 'Phase 4 • 2027+',
    title: 'Ecosystem Expansion',
    desc: 'Opening our infrastructure to third-party developers and empowering micro-businesses with credit.',
    items: ['Merchant API', 'Micro-lending Module', 'White-label Solutions', 'Pan-African Expansion']
  }
]
</script>
