import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "wallet/Home" */ '../page/Home/index.vue'),
  },
  {
    path: '/deposit',
    component: () => import(/* webpackChunkName: "wallet/Deposit" */ '../page/Deposit/index.vue'),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
