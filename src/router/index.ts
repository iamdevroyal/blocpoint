import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Compliance from '../views/Compliance.vue'
import Privacy from '../views/Privacy.vue'
import Terms from '../views/Terms.vue'
import GetStarted from '../views/GetStarted.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home, meta: { title: 'Blocpoint | Africa\'s #1 AI and Blockchain powered stablecoin and digital assets integrated SoftPos payment rails for financial agents and customers', description: 'Instant transfers, digital products, stablecoins, and more. Optional agent mode for SoftPOS and commissions.' } },
    { path: '/about', name: 'about', component: About, meta: { title: 'About — Blocpoint', description: 'Mission, values, and roadmap of Blocpoint.' } },
    { path: '/compliance', name: 'compliance', component: Compliance, meta: { title: 'Compliance — Blocpoint', description: 'Tiered KYC, monitoring, AML controls, and audit integrity.' } },
    { path: '/privacy', name: 'privacy', component: Privacy, meta: { title: 'Privacy Policy — Blocpoint', description: 'Data collection, usage, retention, and rights.' } },
    { path: '/terms', name: 'terms', component: Terms, meta: { title: 'Terms of Service — Blocpoint', description: 'Eligibility, acceptable use, fees, compliance obligations, and liability.' } },
    { path: '/get-started', name: 'get-started', component: GetStarted, meta: { title: 'Get Started — Blocpoint', description: 'Join Blocpoint for instant transfers, digital products, and more. Activate agent mode for SoftPOS and commissions.' } },
    // Legacy redirect
    { path: '/agent-onboarding', redirect: '/get-started' }
  ],
  scrollBehavior(to, _, savedPosition) {
    return new Promise((resolve) => {
      // Small delay to ensure component render before scrolling
      setTimeout(() => {
        if (savedPosition) {
          resolve(savedPosition)
        } else if (to.hash) {
          resolve({
            el: to.hash,
            behavior: 'smooth',
          })
        } else {
          resolve({ top: 0, left: 0 })
        }
      }, 100)
    })
  }
})
