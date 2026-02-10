<template>
  <div class="overflow-hidden rounded-3xl border border-border bg-surface">
    <div class="grid grid-cols-3 bg-surface p-6 border-b border-border font-bold text-text-heading text-lg">
      <div class="col-span-1">Feature</div>
      <div class="col-span-1 text-center text-primary">BlocPoint</div>
      <div class="col-span-1 text-center text-text-muted">Traditional POS</div>
    </div>
    
    <div v-for="row in rows" :key="row.feature" class="grid grid-cols-3 p-6 border-b border-border last:border-0 hover:bg-white/5 transition-colors items-center">
      <div class="col-span-1 font-medium text-text">{{ row.feature }}</div>
      <div class="col-span-1 text-center font-semibold text-text-heading">{{ row.blocpoint }}</div>
      <div class="col-span-1 text-center text-text-muted">{{ row.traditional }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Row {
  feature: string
  blocpoint: string
  traditional: string
}

defineProps<{
  rows: Row[]
}>()
</script>
