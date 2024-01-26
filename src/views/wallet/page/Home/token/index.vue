<template>
  <div class="wrapper">
    <div class="list-item" v-for="(item, index) in walletStore.assetList" :key="index">
      <div class="part">
        <img class="icon" :src="item.picSrc" alt="" />
        <div>
          <div class="text bold">{{ item.name }}</div>
          <div class="text num">{{ item.num }}</div>
        </div>
      </div>
      <div class="bold flex-center">
        <span>$0</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { wallet } from '@/piniaStore/wallet';
import pic from '@/assets/logo.jpg';
const walletStore = wallet();
</script>

<style lang="scss" scoped>
$iconWidth: 36px;
.wrapper {
  padding: 0.6rem;
}
.list-item {
  position: relative;
  display: flex;
  background: $--gray-bg;
  box-sizing: content-box;
  justify-content: space-between;
  -webkit-align-items: center;
  align-items: center;
  padding: 0.6rem;
  border-radius: 10px;
  margin-bottom: 15px;
  border-bottom: 1px solid rgb(209, 217, 221);
  .part {
    display: flex;
  }
  .icon {
    width: $iconWidth;
    border-radius: 30px;
    margin-right: 10px;
  }
  .text {
    font-size: 15px;
    color: $--text-primary;
  }
  .bold {
    font-weight: 700;
  }
  .num {
    color: #566370;
    font-weight: 500;
  }
}
</style>
