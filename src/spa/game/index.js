import '@/style/style.less';
import '@/style/app.scss';
import { createApp } from 'vue';
import App from '@/app.vue';

const insertPop = document.createElement('div');
insertPop.id = 'myPop';
const root = document.body.children[0];
document.body.insertBefore(insertPop, root);
createApp(App).mount('#myPop');
