import axios from 'axios'


/*
  【登录】
  parameter: object
  cteated by yyt 2019/08/20
*/
export const _gologins = (username, password) => {
  return axios.post("/api/users/login", {
    name: username,
    password: password
  })
  .then((res) => {
    console.log(res);
    if(res.status==200){
      // sessionStorage.setItem('userId','123');
      sessionStorage.setItem('token',res.data.token);
      this.$router.go(-1);
    }else{
      alert(res.data.msg);
    }
  });
}
/*
  【注册】
  parameter: object
  cteated by yyt 2019/08/20
*/
export const _goregister = (params) =>{
  return axios.post("/api/users", {
    name: params.name,
    password: params.password
  })
  .then((res) => {
    return Promise.resolve(res.data)
  }).catch((error)=>{
    return Promise.reject(error.response.data)
    // console.log(error.response.data)
  });
}
