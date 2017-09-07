import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import list from '@/components/list'
import detail from '@/components/detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
     path: '',
     redirect: 'home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/list',
      component: list
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detail
    }
  ]
})
