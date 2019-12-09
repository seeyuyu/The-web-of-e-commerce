import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import ce from '@/components/ce'
import pullload from '@/components/pullload'
import classify from '@/components/classify'
import mine from '@/components/mine'
import commodity from '@/components/detail/commodity'
import searchpage from '@/components/search/searchpage'
import shopcar from '@/components/car/shopcar'
import login from '@/components/login/login'
import register from '@/components/login/register'
import { Loadmore } from 'mint-ui'
import classifyTesting from '@/pages/classifyTesting'
Vue.component(Loadmore.name, Loadmore);
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
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
