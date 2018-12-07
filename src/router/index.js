import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import classify from '@/components/classify'
import mine from '@/components/mine'
import commodity from '@/components/mine'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path:'/classify',
      name:'classify',
      component:classify
    },
    {
      path:'/mine',
      name:'mine',
      component:mine
    },
    {
      path:'/detail',
      name:'detail',
      component:commodity
    }
  ]
})
