<template>
  <div class="wrapper">
    <div class="list-item" v-for="(item, index) in coins" :key="index">
      <div class="part">
        <img class="icon" :src="item.picSrc" alt="" />
        <div>
          <div class="text name">{{ item.name }}</div>
          <div class="text num">{{ item.num }}</div>
        </div>
      </div>
      <p class="part amount">$0</p>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue';
import pic from '@/assets/logo.jpg';
import { game } from '@/piniaStore/game';
const gameStore = game();
const picSrc = chrome.runtime ? chrome.runtime.getURL('images/logo.jpg') : pic;
const coins = reactive([
  {
    name: 'ETH',
    num: '1.34',
    usd: '2356',
    picSrc,
  },
  {
    name: 'XPET',
    num: '0',
    usd: '0',
    picSrc,
  },
  {
    name: 'BPET',
    num: '0',
    usd: '0',
    picSrc,
  },
]);

onMounted(() => {
  setInterval(() => {
    console.log(gameStore.piniaMsg);
  }, 3000);
  console.log('this is tokensPage');
});
function changeName() {
  name.b = 'b';
}
</script>

<style lang="less" scoped>
@import '@/style/style.less';
@iconWidth: 36px;
.wrapper {
  padding: 0.6rem;
}
.list-item {
  position: relative;
  display: flex;
  background: rgb(239, 241, 241);
  box-sizing: content-box;
  justify-content: space-between;
  align-items: center;
  -webkit-align-items: center;
  padding: 0.6rem;
  border-radius: 10px;
  margin-bottom: 15px;
  border-bottom: 1px solid rgb(209, 217, 221);
  .part {
    display: flex;
  }
  .icon {
    width: @iconWidth;
    border-radius: 30px;
    margin-right: 10px;
  }
  .text {
    font-size: 15px;
    color: #000;
  }
  .name {
    font-weight: 700;
  }
  .num {
    color: #566370;
    font-weight: 500;
  }
  .amount {
    line-height: 1.5;
  }
}
</style>
