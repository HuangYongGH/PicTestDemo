import Vue from 'vue'
import Router from 'vue-router'
import PictureList from '@/components/PictureList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PictureList',
      component: PictureList
    }
  ]
})
