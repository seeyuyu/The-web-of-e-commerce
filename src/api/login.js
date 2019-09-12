import { apiurl } from './config'
import axios from 'axios'


/*
  【登录】
  parameter: object
  cteated by yyt 2019/08/20
*/
export function gologins (username, password) {

  return axios.post(apiurl+"/users/login", {
    name: username,
    password: password
  })
  .then(function(res) {
    console.log(res);
    if(res.data.code==0){
      sessionStorage.setItem('userId','123');
      that.$router.go(-1);
    }else{
      alert(res.data.msg);
    }
  });
}
