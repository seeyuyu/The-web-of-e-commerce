import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home/home'
import ce from '@/pages/ce'
import pullload from '@/pages/pullload'
import classify from '@/pages/classify'
import mine from '@/pages/mine'
import commodity from '@/pages/detail/commodity'
import searchpage from '@/pages/search/searchpage'
import shopcar from '@/pages/car/shopcar'
import login from '@/pages/login/login'
import register from '@/pages/login/register'
import { Loadmore } from 'mint-ui'
import classifyTesting from '@/pages/classifyTesting'
Vue.component(Loadmore.name, Loadmore);
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/pullload',
      name: 'pullload',
      component: pullload
    },
    {
      path:'/classify',
      name:'classify',
      component:classify
    },
    {
      path:'/mine',
      name:'mine',
      component:mine,
      meta: {
        requireAuth: true, // 判断是否需要登录
      },
    },
    {
      path:'/detail',
      name:'detail',
      component:commodity
    },
    {
      path:'/searchpage',
      name:'searchpage',
      component:searchpage
    },
    {
      path:'/car',
      name:'shopcar',
      component:shopcar
    },
    {
      path:'/login',
      name:'login',
      component:login
    },
    {
      path:'/register',
      name:'register',
      component:register
    },
    {
      path:'/ce',
      name:'ce',
      component:ce
    },
    {
      path:'/classifyTesting',
      name:'classifyTesting',
      component:classifyTesting
    }
  ]
})
