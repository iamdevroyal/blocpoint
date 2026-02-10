<template>
  <div v-if="open" class="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4">
    <div class="glass noise gradient-border rounded-2xl px-4 py-3 text-sm">
      {{ message }}
    </div>
  </div>
</template>
<script lang="ts" setup>
const props = defineProps<{ open: boolean; message: string }>()
</script>
