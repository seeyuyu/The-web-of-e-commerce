import { classifyParams, navParams } from './config'
import axios from 'axios'
import { get, post} from 'common/js/http'

/*
  【首页】
  parameter: string
  cteated by yyt 2020/03/31
*/
// export function getHomeDetail (parameter) {
//   console.log(3)
//   return get("/wxdmall/weixin/home/businessIndex?" + parameter, {})
// }
/*
  【首页】
  cteated by yyt 2020/05/16
*/
export function $getHomeDetail () {
  return get("../../static/json/index.json", {})
}
/*
  【首页-秒杀数据】
  cteated by yyt 2020/05/16
*/
export function $getHomeSeckill () {  // 请求首页数据
  return get("../../static/json/indexSeckill.json", {})
}
