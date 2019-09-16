// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'static/css/main.css'
import global_ from 'components/global'
// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-default/index.css'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';

Vue.use(Mint)

import MtRadio from 'mint-ui/lib/radio';
import 'mint-ui/lib/radio/style.css';

Vue.component(MtRadio.name, MtRadio);
import { Swipe, SwipeItem, Toast } from 'mint-ui';
// 轮播图
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.prototype.$toast = Toast

Vue.config.productionTip = false
Vue.prototype.GLOBAL = global_ //挂载到Vue实例上面

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})

// 路由判断登录 根据路由配置文件的参数
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) { // 判断该路由是否需要登录权限
    // console.log('需要登录权限');
    if (sessionStorage.getItem('token')) { // 判断当前的token是否存在 ； 登录存入的token
      next();
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        } // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next();
  }
});
