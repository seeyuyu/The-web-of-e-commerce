import axios from 'axios'
import { get, post} from 'common/js/http'


/*
  【加入购物车】
  parameter: object
  cteated by yyt 2019/09/18
*/
export const $addCar = (parameter) => {
  // return service.post("/api/shopping-cart", {
  //   count: parameter.num,
  //   _id: parameter.id
  // }).then((res) => {
  //   return Promise.resolve(res.data)
  // }).catch((error) => {
  //   return Promise.reject(error)
  // })
  console.log(parameter)
  return post("/api/shopping-cart", {
    count: parameter.num,
    _id: parameter.id
  })
}

export const $carlist = (res) =>{
  // 这里也是装饰者模式，返回一个函数，此处没有任何装饰
  return get("/api/shopping-cart", {})
}
