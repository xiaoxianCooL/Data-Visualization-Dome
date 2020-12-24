import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'
import login from '../views/login.vue'
import index from '../views/index.vue'
import map from '../demo/demo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      redirect: '/index',
      component: App,
    },
    {
      path: '/index',
      name: 'index',
      component: index,
    },
    {
      path: '/map',
      name: 'map',
      component: map,
    },
  ],
  mode:"history" //干掉地址栏#号键
})
