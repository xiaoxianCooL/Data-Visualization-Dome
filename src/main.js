// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/init.css' //引入初始化样式
import './assets/css/common.css' //引入公共样式

import Axios from 'axios'
const $http = Axios.create({
  baseURL:'http://localhost:8080/',
  timeout:3000,
  headers:{'Content-Type': 'application/json;charset=UTF-8'}
})
Vue.prototype.$http = $http;

import echarts from 'echarts'//全局引用echar
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
