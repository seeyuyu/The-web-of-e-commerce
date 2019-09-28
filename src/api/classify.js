import { classifyParams, navParams } from './config'
import axios from 'axios'
import { get, post} from 'common/js/http'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';
// 数据发送到服务器之前进行的操作
axios.defaults.transformRequest = [function(data) {
  let ret = ''
  for (let it in data) {
    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
  }
  return ret
}]

/*
  【分类】 -> 商品列表
  parameter: object
  cteated by yyt 2019/08/20
*/
export function getClassifyList (parameter) {
  // const dataJson = Object.assign({}, classifyParams, parameter)

  // return axios.post("/dmall/mp/search/wareSearch", {
  //   param: JSON.stringify(dataJson)
  // })
  // .then(function(res) {
  //   return Promise.resolve(res.data)
  // });
  return get("/api/lists/?q="+parameter.categoryId+"&page="+parameter.pageNum, {})
}

/*
  【分类】 -> 导航列表
  parameter: object
  cteated by yyt 2019/08/20
*/
export function getClassifyNav (parameter) {
  const dataJson = Object.assign({}, navParams, parameter)

  return axios.post("/dmall/mp/wareCategory/list", {
    param: JSON.stringify(dataJson)
  })
  .then(function(res) {
    return Promise.resolve(res.data)
  });
}
