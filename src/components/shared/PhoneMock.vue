<template>
  <div class="relative">
    <div class="rounded-[36px] border-2 border-border bg-bg shadow-2xl w-[280px] h-[560px] mx-auto overflow-hidden">
      <div class="h-8 bg-surface flex items-center justify-center">
        <div class="w-24 h-5 bg-surface/50 rounded-full"></div>
      </div>
      <div class="p-4 space-y-4">
        <div class="rounded-xl bg-surface border border-border p-4">
          <div class="text-xs text-text-muted">Wallet Balance</div>
          <div class="text-2xl font-semibold text-text">₦245,800</div>
        </div>
        <div class="grid grid-cols-2 gap-2">
          <div class="rounded-xl bg-surface border border-border p-3 text-xs text-text">Transfer</div>
          <div class="rounded-xl bg-surface border border-border p-3 text-xs text-text">Tap-to-Pay</div>
          <div class="rounded-xl bg-surface border border-border p-3 text-xs text-text">Cash-out</div>
          <div class="rounded-xl bg-surface border border-border p-3 text-xs text-text">Gift Cards</div>
          <div class="rounded-xl bg-surface border border-border p-3 text-xs text-text">Stablecoin</div>
          <div class="rounded-xl bg-surface border border-border p-3 text-xs text-text">Subscriptions</div>
        </div>
        <div class="space-y-2">
          <div class="text-xs font-semibold text-text">Recent</div>
          <div class="rounded-xl bg-surface border border-border p-3 text-xs flex justify-between text-text">
            <span>Card — Tap</span><span>₦8,000</span>
          </div>
          <div class="rounded-xl bg-surface border border-border p-3 text-xs flex justify-between text-text">
            <span>Transfer — P2P</span><span>₦12,000</span>
          </div>
          <div class="rounded-xl bg-surface border border-border p-3 text-xs flex justify-between text-text">
            <span>Apple</span><span>₦145,000</span>
          </div>
          <div class="rounded-xl bg-surface border border-border p-3 text-xs flex justify-between text-text">
            <span>Airtime</span><span>₦2,000</span>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
</script>
