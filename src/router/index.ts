import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Compliance from '../views/Compliance.vue'
import Privacy from '../views/Privacy.vue'
import Terms from '../views/Terms.vue'
import AgentOnboarding from '../views/AgentOnboarding.vue'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'home', component: Home, meta: { title: 'BlocPoint — Financial Liquidity Hub', description: 'Agent-first infrastructure with T+0 settlement, tiered access, compliance-forward.' } },
    { path: '/about', name: 'about', component: About, meta: { title: 'About — BlocPoint', description: 'Mission, values, and roadmap of BlocPoint.' } },
    { path: '/compliance', name: 'compliance', component: Compliance, meta: { title: 'Compliance — BlocPoint', description: 'Tiered KYC, monitoring, AML controls, and audit integrity.' } },
    { path: '/privacy', name: 'privacy', component: Privacy, meta: { title: 'Privacy Policy — BlocPoint', description: 'Data collection, usage, retention, and rights.' } },
    { path: '/terms', name: 'terms', component: Terms, meta: { title: 'Terms of Service — BlocPoint', description: 'Eligibility, acceptable use, fees, compliance obligations, and liability.' } },
    { path: '/agent-onboarding', name: 'agent-onboarding', component: AgentOnboarding, meta: { title: 'Become a Founding Agent — BlocPoint', description: 'Join the Founding Agent program for T+0 settlement and tier boosts.' } }
  ],
  scrollBehavior(to, from, savedPosition) {
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
