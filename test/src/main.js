// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
// 导入fastclick解决手机或浏览器可能的300毫秒延迟的问题
import VueAwesomeSwiper from 'vue-awesome-swiper'

import './assets/styles/reset.css'
// 重置所有样式
import './assets/styles/border.css'
import './assets/styles/iconfont/iconfont.css'
import 'swiper/dist/css/swiper.css'
// 解决移动端1像素边框问题

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
