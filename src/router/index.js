import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Down from '@/pages/down'
import Help from '@/pages/help'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Index
    },
    {
      path: '/down',
      name: 'Down',
      component: Down
    },
    {
      path: '/help',
      name: 'Help',
      component: Help
    }
  ]
})
