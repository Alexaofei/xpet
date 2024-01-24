import '@/style/style.less';
import '@/style/app.scss';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from '@/app.vue';

const targetNodeId = 'myPop';

function getScriptElement() {
  const _element = document.createElement('script');
  _element.src = 'https://unpkg.com/vue@3/dist/vue.global.js';
  return _element;
}

function getNodeElement() {
  const _element = document.createElement('div');
  _element.id = targetNodeId;
  return _element;
}

function insertElement(targetElement, elementList) {
  elementList.forEach((v) => {
    document.body.insertBefore(v, targetElement);
  });
}

const root = document.body.children[0];
insertElement(root, [getNodeElement()]);

createApp(App)
  .use(createPinia())
  .mount('#' + targetNodeId);
