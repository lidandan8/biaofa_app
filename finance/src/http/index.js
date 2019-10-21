import Vue from 'vue'
import axios from 'axios'
// 全局配置
const instance = axios.create({
  baseURL: 'https://www.fastmock.site/mock/a66ca8c6c3e0578801284bceb3677c40/shop1',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

// 请求钩子
instance.interceptors.request.use(function (config) {
  // Do something before request is sent

  console.log(config)

  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

/**
 * 数据返回钩子
 * @author liDanDan 2019-10-13
 * response.data.code 接口的返回状态，，0返回成功，1，未登录，&&&其他错误
 */
instance.interceptors.response.use(function (response) {
  // Do something with response data
  if (parseInt(response.data.code) === 0) {
    return response.data
  } else if (parseInt(response.data.code) === 1) {
    Vue.prototype.$toast('请先登录')
    Vue.prototype.$router.push('/login')
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject('')
  } else {
    console.log('其他状态待定')
    console.log(response.data.desc)
    Vue.prototype.$toast(response.data.desc)
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject('')
  }
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})
export default instance
