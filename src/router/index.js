import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home'
import Shop from '@/pages/shop'
import GoodsDetail from '@/pages/goods-detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/shop/:id',
      name: 'Shop',
      component: Shop
    },
    {
      path: '/goods-detail/:id',
      name: 'GoodsDetail',
      component: GoodsDetail
    }

  ]
})
