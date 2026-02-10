<template>
  <div :class="['grid gap-12 lg:grid-cols-2 lg:gap-20 items-center py-20', reverse ? 'lg:flex-row-reverse' : '']">
    <div :class="['space-y-6', reverse ? 'lg:order-2' : '']">
      <div class="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-indigo-300 backdrop-blur-sm">
        <slot name="badge" />
      </div>
      <h2 class="text-3xl font-bold tracking-tight text-text-heading sm:text-4xl lg:text-5xl">
        <slot name="title" />
      </h2>
      <p class="text-lg text-text-muted leading-relaxed">
        <slot name="description" />
      </p>
      <div class="pt-2">
        <slot name="actions" />
      </div>
    </div>
    <div :class="['relative rounded-3xl border border-border bg-surface p-2', reverse ? 'lg:order-1' : '']">
      <div class="aspect-[4/3] overflow-hidden rounded-2xl bg-surface/50 relative">
        <slot name="visual" />
        <!-- Default placeholder if no visual -->
        <div v-if="!$slots.visual" class="absolute inset-0 flex items-center justify-center text-text-muted">
           <span class="text-sm">Visual Area</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
defineProps<{ reverse?: boolean }>()
</script>
