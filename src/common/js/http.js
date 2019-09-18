// 1.加token
// 2.防止重复提交
// 3.消息提示

import axios from 'axios'

//http request 拦截器
axios.interceptors.request.use(config => {
    // config.headers = {
    //   'Content-Type':'application/x-www-form-urlencoded'
    // }
    if (promiseArr[config.url]) {
      promiseArr[config.url]('操作取消')
      promiseArr[config.url] = cancel
    } else {
      promiseArr[config.url] = cancel
    }
    return config
}, error => {
    return Promise.reject(err)
})
axios.interceptors.response.use(response => {
  // 获取token并把token放在sessionStorage中,根据实际需求选择存储方式即可
  let list = response.data.list;      // 根据实际数据结构取得返回的token
  if (list.hasOwnProperty("token")) {
    sessionStorage.setItem('token', list.token);
    axios.defaults.headers.token = sessionStorage.getItem('token');
  }
  return response;
})
