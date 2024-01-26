import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import(/* webpackChunkName: "wallet/Home" */ '@wallet/app.vue'),
    children: [
      {
        path: '/home',
        component: () => import(/* webpackChunkName: "wallet/Home" */ '@wallet/page/Home/index.vue'),
      },
      {
        path: '/deposit',
        component: () => import(/* webpackChunkName: "wallet/Deposit" */ '@wallet/page/Deposit/index.vue'),
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
