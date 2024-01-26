<template>
  <div class="container">
    <Home v-if="walletStore.activePage === 'home'" />
    <Deposit v-if="walletStore.activePage === 'deposit'" />
  </div>
</template>
<script setup>
import Home from '@wallet/page/Home';
import Deposit from '@wallet/page/Deposit';
import { wallet } from '@/piniaStore/wallet';
const walletStore = wallet();
</script>
<style lang="scss" scoped>
.container {
  width: 421px;
  height: 600px;
  margin: 0 auto;
}
</style>
