import '@/style/style.less';
import '@/style/global.scss';
import 'spectre.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from '@/views/game/app.vue';

// 往需注入的页面body插入我们的dom
const targetNodeId = 'myPop';
const webRoot = document.body.children[0];
const _element = document.createElement('div');
_element.id = targetNodeId;
document.body.insertBefore(webRoot, _element);

createApp(App)
  .use(createPinia())
  .mount('#' + targetNodeId);
