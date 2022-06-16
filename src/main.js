import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// import axios from 'axios';
// const Mock = require('mockjs');
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');

const { mockXHR } = require('../mock');
mockXHR();
import request from '@/utils/request';
request({
  url: '/vue-element-admin/article/list',
  method: 'get'
}).then(res => {
  console.log(res);
});
