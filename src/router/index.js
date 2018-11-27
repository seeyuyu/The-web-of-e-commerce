import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import classify from '@/components/classify'

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
    }
  ]
})
