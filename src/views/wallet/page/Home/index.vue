<template>
  <div class="panel">
    <div class="panel-header">
      <button class="btn btn-primary">Invite Friend</button>
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
        <button class="btn btn-primary circle">Deposit</button>
        <button class="btn btn-primary circle">Withdraw</button>
      </div>
    </div>
    <div class="panel-body">
      <ul class="tab tab-block">
        <li v-for="(item, index) in tabList" :key="index" :class="`tab-item ${item.active ? 'active' : ''}`">
          <a href="javascript:" @click="switchTab(index)">{{ item.name }}</a>
        </li>
      </ul>
      <div class="tab-content">
        <Token v-if="tabList[0].active" />
      </div>
    </div>
    <div class="panel-footer">
      <!-- buttons or inputs -->
      footer
    </div>
  </div>
</template>
<script setup>
// import { getList } from '@/service/wallet';
import { reactive } from 'vue';
import Token from './tokens';
import pic from '@/assets/logo.jpg';
// const a = await getList();
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

function switchTab(index) {
  this.tabList.forEach((v, i) => {
    if (v.url) {
      window.open(chrome.runtime.getURL(v.url));
    } else {
      v.active = +i === +index;
    }
  });
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
