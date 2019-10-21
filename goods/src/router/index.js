import Vue from 'vue'
import Router from 'vue-router'
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
      path: '/product', // 产品列表
      name: 'product',
      component: () => import('@/components/commodity/product')
    },
    {
      path: '/purchase', // 采购单
      name: 'purchase',
      meta: {
        title: '采购单'
      },
      component: () => import('@/components/Purchase/purchase')
    },
    {
      path: '/record', // 采购记录
      name: 'record',
      meta: {
        title: '采购记录'
      },
      component: () => import('@/components/Purchase/record')
    },
    {
      path: '/returngoods', // 退货退款
      name: 'returngoods',
      meta: {
        title: '退货退款'
      },
      component: () => import('@/components/Purchase/returngoods')
    },
    {
      path: '/returnorder', // 退货单
      name: 'returnorder',
      meta: {
        title: '退货单'
      },
      component: () => import('@/components/Purchase/returnorder')
    },
    {
      path: '/Relatedinformation', // 相关信息
      name: 'Relatedinformation',
      meta: {
        title: '相关信息'
      },
      component: () => import('@/components/commodity/search')
    },
    {
      path: '/search', // 相关信息
      name: 'search',
      meta: {
        title: '相关信息'
      },
      component: () => import('@/components/commodity/search')
    },
    {
      path: '/CustomerInformation', // 产品信息
      name: 'CustomerInformation',
      meta: {
        title: '产品信息'
      },
      component: () => import('@/components/commodity/newProduct')
    },
    {
      path: '/CustomerInformation1', // 添加产品
      name: 'CustomerInformation1',
      meta: {
        title: '添加产品'
      },
      component: () => import('@/components/commodity/CustomerInformation1')
    },
    {
      path: '/Inventorydetails', // 库存详情 相关信息
      name: 'Inventorydetails',
      meta: {
        title: '库存详情'
      },
      component: () => import('@/components/Warehouse/Inventorydetails')
    },
    {
      path: '/Inventoryflow', // 库存流水 相关信息
      name: 'Inventoryflow',
      meta: {
        title: '库存流水'
      },
      component: () => import('@/components/Warehouse/Inventoryflow')
    },
    {
      path: '/Choosecommodity', // 选择商品
      name: 'Choosecommodity',
      meta: {
        title: '选择商品'
      },
      component: () => import('@/components/Warehouse/Choosecommodity')
    },
    {
      path: '/Warehousequery', // 仓库查询
      name: 'Warehousequery',
      meta: {
        title: '仓库查询'
      },
      component: () => import('@/components/Warehouse/Warehousequery')
    },
    {
      path: '/account', // 个人中心首页 @author liDanDan 2019-10-11
      name: 'accountIndex',
      meta: {
        title: '首页'
      },
      component: () => import('@/components/Account/index')
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
      path: '/ChangePassword', // 修改密码 @author liDanDan 2019-10-11
      name: 'ChangePassword',
      component: () => import('@/components/Account/ChangePassword')
    },
    {
      path: '/CustomerManagement', // 仓库管理 @author liDanDan 2019-10-11
      name: 'CustomerManagement',
      component: () => import('@/components/Account/CustomerManagement')
    },
    {
      path: '/CustomerManagement1', // 供应商管理 @author liDanDan 2019-10-11
      name: 'CustomerManagement1',
      component: () => import('@/components/Account/CustomerManagement1')
    },
    {
      path: '/CustomerInformation', // 仓库管理-客户信息 @author liDanDan 2019-10-11
      name: 'CustomerInformation',
      component: () => import('@/components/Account/CustomerInformation')
    },
    {
      path: '/CustomerInformation1', // 供应商管理-客户信息 @author liDanDan 2019-10-11
      name: 'CustomerInformation1',
      component: () => import('@/components/Account/CustomerInformation1')
    },
    {
      path: '/customer', // 客户管理-客户信息
      name: 'customer',
      component: () => import('@/components/Account/customer')
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
