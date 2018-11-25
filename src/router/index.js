import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import footer from '@/components/footer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/footer',
      name: 'footer',
      component: footer
    }
  ]
})
