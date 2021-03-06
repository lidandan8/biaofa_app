import axios from 'axios'
import qs from 'qs'
axios.defaults.baseURL = 'https://www.fastmock.site/mock/a66ca8c6c3e0578801284bceb3677c40/shop1'
axios.defaults.timeout = 5000
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
//
axios.interceptors.request.use(config => {
  // loading
  return config
})
axios.interceptors.response.use(function (res) {
  // Do something with response data
  return res
}, function (error) {
  // Do something with res error
  return Promise.reject(error)
})
const fetch = (opts, data) => {
  let httpDefaultOpts = { // http默认配置
    method: opts.method,
    url: opts.url,
    timeout: 10000,
    params: data,
    data: qs.stringify(data),
    headers: opts.method === 'get' ? {
      'X-Requested-With': 'XMLHttpRequest',
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=UTF-8'
    } : {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  }

  if (opts.method === 'get') {
    delete httpDefaultOpts.data
  } else {
    delete httpDefaultOpts.params
  }

  let promise = new Promise(function (resolve, reject) {
    axios(httpDefaultOpts).then(
      (res) => {
        resolve(res)
      }
    ).catch(
      (response) => {
        reject(response)
      }
    )
  })
  return promise
}
export default fetch
