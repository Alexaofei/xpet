import { defineStore } from 'pinia';
import pic from '@/assets/logo.jpg';
const picSrc = chrome.runtime ? chrome.runtime.getURL('images/logo.jpg') : pic;

export const wallet = defineStore('wallet', {
  state: () => {
    return {
      activePage: 'home',
      assetList: [
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
      ],
    };
  },
  // 动态设置state
  getters: {},
  // 可异步获取state
  actions: {},
});
