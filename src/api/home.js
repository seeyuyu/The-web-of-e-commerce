import { classifyParams, navParams } from './config'
import axios from 'axios'
import { get, post} from 'common/js/http'

/*
  【首页】
  parameter: string
  cteated by yyt 2020/03/31
*/
export function getHomeDetail (parameter) {
  console.log(3)
  return get("/wxdmall/weixin/home/businessIndex?" + parameter, {})
}
