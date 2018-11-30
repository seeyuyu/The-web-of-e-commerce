// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'static/css/main.css'
import global_ from 'components/global'

Vue.config.productionTip = false
Vue.prototype.GLOBAL= global_//挂载到Vue实例上面

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
