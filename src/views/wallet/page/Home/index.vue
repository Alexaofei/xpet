<template>
  <div class="panel">
    <div class="panel-header">
      <button class="btn bg-dark">Invite Friend</button>
    </div>
    <div class="panel-nav">
      <figure class="avatar avatar-xl">
        <img :src="pic" alt="..." />
      </figure>
      <div class="info">
        <div>aoaoaoaoao</div>
        <div>0x6103265f...a8dcc5155e</div>
      </div>
      <div class="operate">
        <button class="btn bg-dark circle" @click="gotoPage('deposit')">Deposit</button>
        <button class="btn bg-dark circle">Withdraw</button>
      </div>
    </div>
    <div class="panel-body">
      <ul class="tab tab-block">
        <li v-for="(item, index) in tabList" :key="index" :class="`tab-item ${item.active ? 'active' : ''}`">
          <span @click="switchTab(index)">{{ item.name }}</span>
        </li>
      </ul>
      <div class="tab-content">
        <Token v-if="tabList.find((v) => v.active).name === 'Tokens'" />
        <Setting v-if="tabList.find((v) => v.active).name === 'Settings'" />
      </div>
    </div>
    <div class="panel-footer"></div>
  </div>
</template>
<script setup>
// import { getList } from '@/service/wallet';
import { reactive, getCurrentInstance } from 'vue';
import { wallet } from '@/piniaStore/wallet';
import Token from './token';
import Setting from './setting';
import pic from '@/assets/logo.jpg';
// const a = await getList();
const walletStore = wallet();
const { proxy } = getCurrentInstance();
const tabList = reactive([
  {
    name: 'Tokens',
    active: true,
  },
  {
    name: 'Settings',
    active: false,
  },
]);
function gotoPage(type) {
  walletStore.activePage = type;
}

function switchTab(index) {
  const _curTab = tabList[index];
  if (_curTab.url) {
    window.open(chrome.runtime.getURL('index.html'));
  } else {
    tabList.forEach((v, i) => {
      v.active = false;
    });
    _curTab.active = true;
  }
}
</script>
<style lang="scss" scoped>
.panel {
  border: none;
}
.panel-header {
  border-bottom: 1px solid #dadee4;
  text-align: right;
}
.panel-nav {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 1rem 0;
  align-items: center;
}
.info {
  margin: 10px 0;
  text-align: center;
  color: $--gray-primary;
}
.operate {
  .btn {
    margin: 0 3px;
  }
}
</style>
