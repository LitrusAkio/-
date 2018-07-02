import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/helloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      // 示例文件
      path: '/test',
      name: 'Test',
      component: () => import('@/views/Test')
    },
    {
      // 首页
      path: '/',
      name: 'Home',
      component: () => import('@/views/home/Home')
    },
    {
      // 城市
      path: '/city',
      name: 'City',
      component: () => import('@/views/city/City')
    }
  ]
})
