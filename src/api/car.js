import axios from 'axios'
import { get, post} from 'common/js/http'


/*
  【加入购物车】
  parameter: object
  cteated by yyt 2019/09/18
*/
export const _addCar = (parameter) => {
  // return service.post("/api/shopping-cart", {
  //   count: parameter.num,
  //   _id: parameter.id
  // }).then((res) => {
  //   return Promise.resolve(res.data)
  // }).catch((error) => {
  //   return Promise.reject(error)
  // })

  return post("/api/shopping-cart", {
    count: parameter.num,
    _id: parameter.id
  })
}

export const _carlist = () =>{
  return get("/api/shopping-cart", {})
}