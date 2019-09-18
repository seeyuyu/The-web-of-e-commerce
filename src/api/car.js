import axios from 'axios'
import http from 'common/js/common'

/*
  【加入购物车】
  parameter: object
  cteated by yyt 2019/09/18
*/
export const _addCar = (parameter) => {
  return axios.post("/api/shopping-cart", {
    count: parameter.num,
    _id: parameter.id
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((error) => {
    return Promise.reject(error.response.data)
  })
}
