// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/init.css' //引入初始化样式
import './assets/css/common.css' //引入公共样式

import './assets/iconfont/iconfont.css';
import Axios from 'axios'
const $http = Axios.create({
  baseURL:'http://localhost:8080/',
  timeout:3000,
  headers:{'Content-Type': 'application/json;charset=UTF-8'}
})
Vue.prototype.$http = $http;

import echarts from 'echarts'//全局引用echar
Vue.prototype.$echarts = echarts
import china from 'echarts/map/json/china.json'
echarts.registerMap('china', china)
Vue.config.productionTip = false

import VueAwesomeSwiper from 'vue-awesome-swiper'
// import 'swiper/swiper-bundle.css'
import 'swiper/css/swiper.css'
// import 'vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
