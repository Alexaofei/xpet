<template>
  <div class="wrapper">
    <svg
      t="1706249454664"
      class="icon back-icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="5844"
      width="200"
      height="200"
      @click="goBack"
    >
      <path
        d="M862.485 481.154H234.126l203.3-203.3c12.497-12.497 12.497-32.758 0-45.255s-32.758-12.497-45.255 0L135.397 489.373c-12.497 12.497-12.497 32.758 0 45.254l256.774 256.775c6.249 6.248 14.438 9.372 22.627 9.372s16.379-3.124 22.627-9.372c12.497-12.497 12.497-32.759 0-45.255l-203.3-203.301h628.36c17.036 0 30.846-13.81 30.846-30.846s-13.81-30.846-30.846-30.846z"
        fill=""
        p-id="5845"
      ></path>
    </svg>
    <div class="head">Deposit</div>
    <div class="title">Asset</div>
    <div class="form-group">
      <select class="form-select">
        <option v-for="(item, index) in walletStore.assetList" :key="index">{{ item.name }}</option>
      </select>
    </div>
    <div class="title">Address</div>
    <div class="input-group">
      <input type="text" id="address" class="form-input" placeholder="..." />
      <button :class="`btn input-group-btn bg-dark ${copying ? 'loading' : ''}`" @click="copyText">Copy Address</button>
    </div>
    <div v-if="toast.type" :class="`toast toast-${toast.type}`">{{ toast.text }}</div>
  </div>
</template>
<script setup>
import { ref, reactive } from 'vue';
import { wallet } from '@/piniaStore/wallet';
const walletStore = wallet();
const copying = ref(false);
const toast = reactive({ type: '', text: '' });

function showToast(type, text) {
  toast.text = text;
  toast.type = type;
  setTimeout(() => {
    toast.text = '';
    toast.type = '';
  }, 1000);
}
function copyText() {
  const text = document.querySelector('#address').value;
  if (!text) return;
  copying.value = true;
  navigator.clipboard.writeText(text).then(
    () => {
      copying.value = false;
      showToast('success', 'success');
    },
    () => {
      copying.value = false;
      showToast('error', 'failed');
    },
  );
}
function goBack() {
  walletStore.activePage = 'home';
}
</script>
<style lang="scss" scoped>
$border-radius: 15px;
$padding: 0 15px;
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  padding: 0.7rem;
}
.back-icon {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.head {
  font-size: 24px;
  font-weight: 500;
  color: $--text-primary;
  text-align: center;
}
.title {
  font-size: 15px;
  color: $--gray-primary;
}
.input-group {
  border-radius: 10px;
  input,
  button {
    height: 55px;
    font-weight: 500;
  }
  input {
    padding: $padding;
    border-radius: $border-radius 0 0 $border-radius;
    font-size: 20px;
  }
  button {
    border-radius: 0 $border-radius $border-radius 0;
    font-size: 16px;
    padding: 0 15px;
  }
}
.form-select {
  height: 55px;
  padding: $padding;
  border-radius: $border-radius;
}
</style>
