import Vue from 'vue'
import Router from 'vue-router'
import purchase from '@/components/Toexamine/purchase'
import purchase1 from '@/components/Toexamine/purchase1'
import commodity from '@/components/Toexamine/commodity'
import commodity1 from '@/components/Toexamine/commodity1'
import commodity2 from '@/components/Toexamine/commodity2'
import payment from '@/components/Toexamine/payment'
import payment1 from '@/components/Toexamine/payment1'
import payment2 from '@/components/Toexamine/payment2'
import payment3 from '@/components/Toexamine/payment3'
import again from '@/components/Toexamine/again'
import again1 from '@/components/Toexamine/again1'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/', // 首页面
      name: 'index',
      meta: {
        title: '首页'
      },
      component: () => import('@/components/Account/index')
    },
    {
      path: '/purchase', // 采购审核
      name: 'purchase',
      meta: {
        title: '首页'
      },
      component: purchase
    },
    {
      path: '/again', // 再次审核
      name: 'again',
      meta: {
        title: '首页'
      },
      component: again
    },
    {
      path: '/again1', // 再次审核
      name: 'again1',
      meta: {
        title: '首页'
      },
      component: again1
    },
    {
      path: '/purchase1', // 退货审核
      name: 'purchase1',
      meta: {
        title: '首页'
      },
      component: purchase1
    },
    {
      path: '/commodity', // 商品状态
      name: 'commodity',
      meta: {
        title: '首页'
      },
      component: commodity
    },
    {
      path: '/commodity1', // 销售状态
      name: 'commodity1',
      meta: {
        title: '首页'
      },
      component: commodity1
    },
    {
      path: '/commodity2', // 退货状态
      name: 'commodity2',
      meta: {
        title: '首页'
      },
      component: commodity2
    },
    {
      path: '/payment', // 付款页面
      name: 'payment',
      component: payment
    },
    {
      path: '/payment2', // 付款页面未完成
      name: 'payment2',
      component: payment2
    },
    {
      path: '/payment1', // 退货付款
      name: 'payment1',
      component: payment1
    },
    {
      path: '/payment3', // 退货付款未完成
      name: 'payment3',
      component: payment3
    },
    {
      path: '/account', // 个人中心首页 @author liDanDan 2019-10-11
      name: 'accountIndex',
      meta: {
        title: '个人中心首页'
      },
      component: () => import('@/components/Account/index')
    },
    {
      path: '/vendorReconciliation', // 供应商对账 @author liDanDan 2019-10-11
      name: 'vendorReconciliation',
      component: () => import('@/components/Account/vendorReconciliation')
    },
    {
      path: '/accountMessage', // 账号信息 @author liDanDan 2019-10-11
      meta: {
        title: '账号信息'
      },
      name: 'accountMessage',
      component: () => import('@/components/Account/accountMessage')
    },
    {
      path: '/CompanyReconciliation', // 某个公司 @author liDanDan 2019-10-11
      name: 'CompanyReconciliation',
      component: () => import('@/components/Account/CompanyReconciliation')
    },
    {
      path: '/ChangePassword', // 修改密码 @author liDanDan 2019-10-11
      name: 'ChangePassword',
      component: () => import('@/components/Account/ChangePassword')
    },
    {
      path: '/CustomerReconciliation', // 客户对账 @author liDanDan 2019-10-11
      name: 'CustomerReconciliation',
      component: () => import('@/components/Account/CustomerReconciliation')
    },
    {
      path: '/OneCustomer', // 某个客户对账 @author liDanDan 2019-10-11
      name: 'OneCustomer',
      component: () => import('@/components/Account/OneCustomer')
    },
    {
      path: '/CustomerManagement', // 客户管理 @author liDanDan 2019-10-11
      name: 'CustomerManagement',
      component: () => import('@/components/Account/CustomerManagement')
    },
    {
      path: '/CustomerInformation', // 客户管理-客户信息 @author liDanDan 2019-10-11
      name: 'CustomerInformation',
      component: () => import('@/components/Account/CustomerInformation')
    },
    {
      path: '/BindNumber', // 绑定手机号 @author liDanDan 2019-10-11
      name: 'BindNumber',
      component: () => import('@/components/Account/BindNumber')
    },
    {
      path: '/login', // 登录界面 @author liDanDan 2019-10-11
      name: 'login',
      meta: {
        title: '登陆页面',
        type: 'login'
      },
      component: () => import('@/components/login/login')
    }
  ]
})
