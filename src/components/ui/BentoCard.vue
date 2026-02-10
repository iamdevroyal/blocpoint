<template>
  <div class="group relative overflow-hidden rounded-3xl border border-border bg-surface p-6 transition-all duration-300 hover:border-border hover:bg-surface/80 hover:shadow-2xl hover:shadow-indigo-500/10">
    <div class="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/20 blur-3xl transition-all group-hover:bg-primary/30"></div>
    <div class="relative z-10 flex flex-col h-full">
      <div class="mb-4">
        <slot name="icon" />
      </div>
      <h3 class="mb-2 text-xl font-bold tracking-tight text-text">
        <slot name="title" />
      </h3>
      <p class="text-text-muted leading-relaxed text-sm flex-grow">
        <slot name="description" />
      </p>
      <div v-if="$slots.footer" class="mt-6 pt-4 border-t border-border">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>
