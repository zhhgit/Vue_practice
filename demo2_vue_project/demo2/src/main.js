// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  // 根元素
  el: '#app',
  // 路由
  router,
  // 模板
  template: '<App/>',
  // 局部组件
  components: { App }
})
