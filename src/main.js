import Vue from 'vue'
import App from './App'
import router from './router'

import core from '@/core/core.config'
Vue.use(core)
// 淘宝响应式 
import 'lib-flexible/flexible.js'
// 图片懒加载  cnpm i  vue-lazyload --save-dev
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  loading: require('@/assets/logo.png')
})
// 引入字体  cnpm install font-awesome -S
import 'font-awesome/css/font-awesome.css'
import store from "@/core/store/index"
// 引入动画 cnpm install --save animate.css
import animate from 'animate.css'
Vue.use(animate);
Vue.config.productionTip = false
// 动态改变网页标题
Vue.use(require('vue-wechat-title'));

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
