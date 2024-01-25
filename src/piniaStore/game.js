import { defineStore } from 'pinia';

export const game = defineStore('game', {
  state: () => {
    return {
      piniaMsg: 'hello aofei',
    };
  },
  // 动态设置state
  getters: {},
  // 可异步获取state
  actions: {},
});
