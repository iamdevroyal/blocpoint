<template>
  <div>
    <Hero />
    <Stats />
    <Ecosystem />
    <Trust />
    <ProblemSolution />
    <Steps />
    <ModulesGrid />
    <Security />
    <Pricing />
    <Trusted />
    <UseCases />
    <FAQ />
    <FinalCTA />
  </div>
</template>
<script lang="ts" setup>
import Hero from '../components/sections/Hero.vue'
import Stats from '../components/sections/Stats.vue'
import Ecosystem from '../components/sections/Ecosystem.vue'
import Trust from '../components/sections/Trust.vue'
import ProblemSolution from '../components/sections/ProblemSolution.vue'
import Steps from '../components/sections/Steps.vue'
import ModulesGrid from '../components/sections/ModulesGrid.vue'
import Security from '../components/sections/Security.vue'
import Pricing from '../components/sections/Pricing.vue'
import Trusted from '../components/sections/Trusted.vue'
import UseCases from '../components/sections/UseCases.vue'
import FAQ from '../components/sections/FAQ.vue'
import FinalCTA from '../components/sections/FinalCTA.vue'
import { useScrollReveal } from '../composables/useScrollReveal'
import { useGsapReveal } from '../composables/useGsapReveal'
useScrollReveal('.glass')
useGsapReveal('section')
</script>
