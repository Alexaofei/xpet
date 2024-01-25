import '@/style/style.less';
import '@/style/global.scss';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from '@/app.vue';
import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/style.css';

const insertPop = document.createElement('div');
insertPop.id = 'myPop';
const root = document.body.children[0];
document.body.insertBefore(insertPop, root);
createApp(App).use(NutUI).use(createPinia()).mount('#myPop');
