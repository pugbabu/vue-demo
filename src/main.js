// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import bus from './utils/bus'
import VueDND from 'awe-dnd'
import colorPicker from '@/components/base/color-picker'
import Util from '@/utils'
Vue.config.productionTip = false
Vue.prototype.$bus = bus
Vue.use(ViewUI)
Vue.use(VueDND)
Vue.use(colorPicker)
Vue.prototype.$Util = Util

// 过滤取
Vue.filter('formatTime', (value) => {
  let now = new Date(value)
  let year = now.getFullYear()
  let month = now.getMonth() + 1
  let date = now.getDate()
  let hour = now.getHours()
  let minute = now.getMinutes()
  let second = now.getSeconds()
  return year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second
})

// 全局指令
Vue.directive('integer', {
  bind: function (el, binding, vnode) {
    el.handler = function () {
      el.value = el.value.replace(/\D+/g, '')
    }
    el.addEventListener('input', el.handler)
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
