// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './App'
import instance from './http'
import store from './store'
import router from './router'

// 挂载ajax到全局
Vue.prototype.$ajax = instance
Vue.use(Mint)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  const type = to.meta.type
  console.log(type)
  // 判断该路由是否需要登录权限
  if (type === 'login') {
    next()
  } else {
    let userInfo = (localStorage.getItem('userInfo'))
    if (userInfo && JSON.parse(userInfo)) {
      next()
    } else {
      next('/login')
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
