// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import AV from './leancloud/av'

Vue.config.productionTip = false
Vue.prototype.AV = AV
Vue.prototype.SEAT = '桌号'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
