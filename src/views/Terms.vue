<template>
  <div class="pt-32 pb-24 overflow-hidden">
    <!-- Hero Section -->
    <section class="relative py-20 bg-surface/30 border-b border-border">
      <div class="absolute inset-0 bg-hero-gradient opacity-30"></div>
      <Container class="relative z-10">
        <div class="max-w-4xl mx-auto text-center space-y-6">
          <div class="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-sm font-medium text-primary backdrop-blur-sm">
            <ScaleIcon class="w-4 h-4" />
            <span>Effective Date: February 2026</span>
          </div>
          <h1 class="text-4xl sm:text-6xl font-extrabold tracking-tight text-text-heading leading-tight">
            Terms of Service
          </h1>
          <p class="text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
            These terms govern your use of the BlocPoint platform. By accessing or using our services, you agree to be bound by these terms.
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
              <h3 class="font-bold text-text-heading mb-4 px-4">Sections</h3>
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
            <!-- 1. Definitions -->
            <div id="definitions" class="scroll-mt-32 space-y-6">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-text-heading">
                  <BookOpenIcon class="w-5 h-5" />
                </div>
                <h2 class="text-2xl font-bold text-text-heading">1. Definitions</h2>
              </div>
              <div class="prose prose-invert max-w-none text-text-muted">
                <p>For the purposes of these Terms of Service:</p>
                <ul class="space-y-4 list-none pl-0">
                  <li class="p-4 rounded-xl bg-surface border border-border">
                    <strong class="text-text-heading block mb-1">"Platform"</strong>
                    Refers to the BlocPoint mobile application, website, API, and all related services provided by BlocPoint Technologies.
                  </li>
                  <li class="p-4 rounded-xl bg-surface border border-border">
                    <strong class="text-text-heading block mb-1">"Agent"</strong>
                    Refers to any verified user authorized to perform financial transactions on behalf of third-party customers using the Platform.
                  </li>
                  <li class="p-4 rounded-xl bg-surface border border-border">
                    <strong class="text-text-heading block mb-1">"Settlement"</strong>
                    Refers to the final and irrevocable transfer of value between accounts, typically occurring on a T+0 basis unless otherwise specified.
                  </li>
                  <li class="p-4 rounded-xl bg-surface border border-border">
                    <strong class="text-text-heading block mb-1">"Float"</strong>
                    Refers to the pre-funded balance maintained by an Agent in their BlocPoint wallet to facilitate instant payouts.
                  </li>
                </ul>
              </div>
            </div>

            <!-- 2. Eligibility -->
            <div id="eligibility" class="scroll-mt-32 space-y-6">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  <UserCheckIcon class="w-5 h-5" />
                </div>
                <h2 class="text-2xl font-bold text-text-heading">2. Eligibility</h2>
              </div>
              <div class="prose prose-invert max-w-none text-text-muted">
                <p>To access and use BlocPoint's services, you must satisfy the following criteria at all times:</p>
                <div class="mt-4 space-y-4">
                   <div class="flex gap-4 p-4 rounded-xl bg-surface border border-border">
                     <CheckCircleIcon class="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                     <div>
                       <h4 class="font-semibold text-text-heading">Legal Capacity</h4>
                       <p class="text-sm mt-1">You must be at least 18 years of age or the age of majority in your jurisdiction and possess the legal authority, right, and freedom to enter into a binding agreement.</p>
                     </div>
                   </div>
                   <div class="flex gap-4 p-4 rounded-xl bg-surface border border-border">
                     <CheckCircleIcon class="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                     <div>
                       <h4 class="font-semibold text-text-heading">Identity Verification</h4>
                       <p class="text-sm mt-1">You must complete our Know Your Customer (KYC) process, providing accurate and up-to-date personal information, including government-issued identification.</p>
                     </div>
                   </div>
                   <div class="flex gap-4 p-4 rounded-xl bg-surface border border-border">
                     <CheckCircleIcon class="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                     <div>
                       <h4 class="font-semibold text-text-heading">Jurisdictional Restrictions</h4>
                       <p class="text-sm mt-1">You must not be a resident of, or located in, any country subject to comprehensive sanctions by the OFAC, UN, EU, or UK, nor appear on any restricted parties list.</p>
                     </div>
                   </div>
                </div>
              </div>
            </div>

            <!-- 3. Account Security -->
            <div id="security" class="scroll-mt-32 space-y-6">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <ShieldIcon class="w-5 h-5" />
                </div>
                <h2 class="text-2xl font-bold text-text-heading">3. Account Security</h2>
              </div>
              <p class="text-text-muted leading-relaxed">
                You are responsible for maintaining the confidentiality of your account credentials.
              </p>
              <ul class="space-y-3">
                <li class="flex items-start gap-3">
                  <div class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                  <span class="text-sm text-text-muted">You agree to enable Multi-Factor Authentication (MFA) for all login attempts and high-value transactions.</span>
                </li>
                <li class="flex items-start gap-3">
                  <div class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                  <span class="text-sm text-text-muted">You must immediately notify BlocPoint of any unauthorized use of your password or account or any other breach of security.</span>
                </li>
                <li class="flex items-start gap-3">
                  <div class="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2"></div>
                  <span class="text-sm text-text-muted">BlocPoint will not be liable for any loss or damage arising from your failure to comply with this section.</span>
                </li>
              </ul>
            </div>

            <!-- 4. Acceptable Use -->
            <div id="acceptable" class="scroll-mt-32 space-y-6">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center text-green-500">
                  <CheckSquareIcon class="w-5 h-5" />
                </div>
                <h2 class="text-2xl font-bold text-text-heading">4. Acceptable Use Policy</h2>
              </div>
              <p class="text-text-muted leading-relaxed">
                You agree to use BlocPoint services solely for lawful purposes. You are strictly prohibited from using our platform for:
              </p>
              <div class="grid md:grid-cols-2 gap-4">
                 <div class="p-4 rounded-xl bg-surface border border-border hover:border-red-500/50 transition-colors group">
                    <h4 class="font-semibold text-text-heading flex items-center gap-2 mb-2">
                       <XCircleIcon class="w-4 h-4 text-red-400" />
                       Illegal Activity
                    </h4>
                    <p class="text-sm text-text-muted group-hover:text-text transition-colors">
                       Facilitating transactions for illegal goods, narcotics, weapons, or human trafficking.
                    </p>
                 </div>
                 <div class="p-4 rounded-xl bg-surface border border-border hover:border-red-500/50 transition-colors group">
                    <h4 class="font-semibold text-text-heading flex items-center gap-2 mb-2">
                       <XCircleIcon class="w-4 h-4 text-red-400" />
                       Fraud & Abuse
                    </h4>
                    <p class="text-sm text-text-muted group-hover:text-text transition-colors">
                       Engaging in money laundering, terrorist financing, or attempting to defraud BlocPoint or other users.
                    </p>
                 </div>
                 <div class="p-4 rounded-xl bg-surface border border-border hover:border-red-500/50 transition-colors group">
                    <h4 class="font-semibold text-text-heading flex items-center gap-2 mb-2">
                       <XCircleIcon class="w-4 h-4 text-red-400" />
                       System Manipulation
                    </h4>
                    <p class="text-sm text-text-muted group-hover:text-text transition-colors">
                       Using bots, scrapers, or exploits to manipulate the platform, bypass fees, or degrade performance.
                    </p>
                 </div>
                 <div class="p-4 rounded-xl bg-surface border border-border hover:border-red-500/50 transition-colors group">
                    <h4 class="font-semibold text-text-heading flex items-center gap-2 mb-2">
                       <XCircleIcon class="w-4 h-4 text-red-400" />
                       IP Violation
                    </h4>
                    <p class="text-sm text-text-muted group-hover:text-text transition-colors">
                       Reverse engineering the software or infringing upon BlocPoint's intellectual property rights.
                    </p>
                 </div>
              </div>
            </div>

            <!-- 5. Fees -->
            <div id="fees" class="scroll-mt-32 space-y-6">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-500">
                  <BanknoteIcon class="w-5 h-5" />
                </div>
                <h2 class="text-2xl font-bold text-text-heading">5. Fees & Payments</h2>
              </div>
              <div class="prose prose-invert max-w-none text-text-muted">
                <p>
                  BlocPoint operates on a transparent fee structure. By using the service, you authorize us to deduct the following applicable fees from your transaction amount:
                </p>
                <div class="my-6 border border-border rounded-2xl overflow-hidden">
                   <div class="grid grid-cols-3 bg-surface/50 p-4 border-b border-border font-semibold text-text-heading text-sm">
                      <div>Fee Type</div>
                      <div>Description</div>
                      <div>Application</div>
                   </div>
                   <div class="grid grid-cols-3 p-4 border-b border-border text-sm">
                      <div class="font-medium text-text">Service Fee</div>
                      <div>Platform usage fee</div>
                      <div>Per successful transaction</div>
                   </div>
                   <div class="grid grid-cols-3 p-4 border-b border-border text-sm bg-surface/20">
                      <div class="font-medium text-text">Network Fee</div>
                      <div>Blockchain gas costs</div>
                      <div>Pass-through (variable)</div>
                   </div>
                   <div class="grid grid-cols-3 p-4 text-sm">
                      <div class="font-medium text-text">Spread</div>
                      <div>Exchange rate margin</div>
                      <div>Included in quoted rate</div>
                   </div>
                </div>
                <p class="text-sm">
                  * All fees are clearly displayed on the confirmation screen before you authorize any transaction. BlocPoint reserves the right to update fee schedules with 30 days notice.
                </p>
              </div>
            </div>

            <!-- 6. Compliance -->
            <div id="compliance" class="scroll-mt-32 space-y-6">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500">
                  <ShieldCheckIcon class="w-5 h-5" />
                </div>
                <h2 class="text-2xl font-bold text-text-heading">6. Compliance Obligations</h2>
              </div>
              <p class="text-text-muted leading-relaxed">
                 You acknowledge that BlocPoint is subject to strict financial regulations. To maintain access to your account, you agree to:
              </p>
              <ul class="space-y-4">
                 <li class="flex gap-4">
                    <div class="w-6 h-6 rounded-full bg-purple-500/10 flex items-center justify-center text-xs font-bold text-purple-500 flex-shrink-0 mt-0.5">1</div>
                    <p class="text-text-muted text-sm">Provide truthful, accurate, and complete information during onboarding and subsequent periodic reviews.</p>
                 </li>
                 <li class="flex gap-4">
                    <div class="w-6 h-6 rounded-full bg-purple-500/10 flex items-center justify-center text-xs font-bold text-purple-500 flex-shrink-0 mt-0.5">2</div>
                    <p class="text-text-muted text-sm">Promptly update your profile if your identification, address, or beneficial ownership status changes.</p>
                 </li>
                 <li class="flex gap-4">
                    <div class="w-6 h-6 rounded-full bg-purple-500/10 flex items-center justify-center text-xs font-bold text-purple-500 flex-shrink-0 mt-0.5">3</div>
                    <p class="text-text-muted text-sm">Cooperate with any requests for additional information regarding the source of funds or purpose of transactions.</p>
                 </li>
              </ul>
              <div class="p-4 rounded-xl bg-purple-500/5 border border-purple-500/20 mt-4">
                <p class="text-sm text-purple-400 font-medium">
                  BlocPoint reserves the right to freeze funds or terminate accounts that fail to meet compliance requirements or trigger AML/CFT alerts.
                </p>
              </div>
            </div>

            <!-- 7. Prohibited Activities (Expanded) -->
            <div id="prohibited" class="scroll-mt-32 space-y-6">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500">
                  <BanIcon class="w-5 h-5" />
                </div>
                <h2 class="text-2xl font-bold text-text-heading">7. Prohibited Activities</h2>
              </div>
              <p class="text-text-muted">
                Strictly prohibited uses that will result in immediate permanent bans include but are not limited to:
              </p>
              <div class="space-y-3 mt-4">
                <div class="p-4 rounded-xl bg-surface border border-border">
                  <h4 class="font-bold text-text-heading mb-1 text-sm">Restricted Financial Flows</h4>
                  <p class="text-sm text-text-muted">Using credit cards to fund stablecoin purchases (cash recycling), structuring transactions to evade reporting limits (smurfing), or facilitating third-party payments without authorization.</p>
                </div>
                <div class="p-4 rounded-xl bg-surface border border-border">
                  <h4 class="font-bold text-text-heading mb-1 text-sm">High-Risk Industries</h4>
                  <p class="text-sm text-text-muted">Transactions related to gambling, unregulated forex/binary options, adult entertainment, or marijuana-related businesses.</p>
                </div>
                <div class="p-4 rounded-xl bg-surface border border-border">
                  <h4 class="font-bold text-text-heading mb-1 text-sm">Sanctions Evasion</h4>
                  <p class="text-sm text-text-muted">Any interaction with wallet addresses or entities flagged by Chainalysis, TRM Labs, or OFAC lists.</p>
                </div>
              </div>
            </div>

            <!-- 8. Liability -->
            <div id="liability" class="scroll-mt-32 space-y-6">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-text-muted">
                  <AlertOctagonIcon class="w-5 h-5" />
                </div>
                <h2 class="text-2xl font-bold text-text-heading">8. Limitation of Liability</h2>
              </div>
              <div class="prose prose-invert max-w-none text-text-muted">
                <p>
                  BlocPoint provides the platform "as is" and "as available". To the maximum extent permitted by law:
                </p>
                <ul class="list-disc pl-5 space-y-2 mt-2">
                   <li>We make no warranties regarding uptime, accuracy of third-party data, or uninterrupted service.</li>
                   <li>We are not liable for losses due to blockchain network congestion, gas price spikes, or smart contract failures outside our direct control.</li>
                   <li>Our total liability for any claim arising out of these terms shall not exceed the total fees paid by you to BlocPoint in the 12 months preceding the claim.</li>
                </ul>
              </div>
            </div>

            <!-- 9. Termination -->
            <div id="termination" class="scroll-mt-32 space-y-6">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center text-red-500">
                  <XCircleIcon class="w-5 h-5" />
                </div>
                <h2 class="text-2xl font-bold text-text-heading">9. Termination</h2>
              </div>
              <p class="text-text-muted leading-relaxed">
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms. Upon termination, your right to use the Service will immediately cease.
              </p>
            </div>

            <!-- 10. Dispute Resolution -->
            <div id="disputes" class="scroll-mt-32 space-y-6">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500">
                  <GavelIcon class="w-5 h-5" />
                </div>
                <h2 class="text-2xl font-bold text-text-heading">10. Dispute Resolution</h2>
              </div>
              <p class="text-text-muted leading-relaxed">
                 Any dispute arising from these Terms shall be resolved through binding arbitration in the jurisdiction of BlocPoint's incorporation. You waive your right to participate in class action lawsuits against BlocPoint.
              </p>
            </div>

            <!-- Contact -->
            <div id="contact" class="scroll-mt-32 space-y-6">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-500">
                  <HelpCircleIcon class="w-5 h-5" />
                </div>
                <h2 class="text-2xl font-bold text-text-heading">11. Contact & Support</h2>
              </div>
              <div class="p-8 rounded-2xl bg-surface border border-border text-center">
                <h3 class="text-xl font-bold text-text-heading mb-4">Questions about the Terms?</h3>
                <p class="text-text-muted mb-6">Our legal team is available to provide clarity on any section of this agreement.</p>
                <Button variant="primary" @click="openContact = true">
                  Contact Legal Team
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
      title="Contact Legal Team" 
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
  ScaleIcon, 
  UserCheckIcon, 
  CheckSquareIcon, 
  BanknoteIcon, 
  ShieldCheckIcon, 
  BanIcon, 
  AlertOctagonIcon, 
  HelpCircleIcon,
  CheckCircleIcon,
  XCircleIcon,
  MailIcon,
  GavelIcon,
  BookOpenIcon,
  ShieldIcon
} from 'lucide-vue-next'

const openContact = ref(false)
const activeSection = ref('definitions')

const sections = [
  { id: 'definitions', title: '1. Definitions' },
  { id: 'eligibility', title: '2. Eligibility' },
  { id: 'security', title: '3. Security' },
  { id: 'acceptable', title: '4. Acceptable Use' },
  { id: 'fees', title: '5. Fees & Payments' },
  { id: 'compliance', title: '6. Compliance' },
  { id: 'prohibited', title: '7. Prohibited Activities' },
  { id: 'liability', title: '8. Liability' },
  { id: 'termination', title: '9. Termination' },
  { id: 'disputes', title: '10. Disputes' },
  { id: 'contact', title: '11. Contact' }
]

const scrollTo = (id: string) => {
  activeSection.value = id
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>
