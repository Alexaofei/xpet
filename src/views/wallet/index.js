import 'spectre.css';
import '@/assets/icon/iconfont.css';
import '@/style/global.scss';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router';
import App from '@/views/wallet/app.vue';

createApp(App).use(router).use(createPinia()).mount('#app');
