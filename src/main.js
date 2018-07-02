// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.config.productionTip = false

NProgress.inc(0.2)
NProgress.configure({easing: 'ease'})

// 前置导航守卫
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})
// 后置导航守卫
router.afterEach(() => {
  NProgress.done()
})
/* eslint-disable no-new */
new Vue({
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')
