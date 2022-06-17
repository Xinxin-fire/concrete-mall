import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import '@/utils/componentsUse';
// 屏幕分辨率适配
import 'amfe-flexible/index.js';

// 全局样式
import '@/styles/index.scss';

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');

const { mockXHR } = require('../mock');
mockXHR();
// import request from '@/utils/request';
// request({
//   url: '/vue-element-admin/article/list',
//   method: 'get'
// }).then(res => {
//   console.log(res);
// });
