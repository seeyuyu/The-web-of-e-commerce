import axios from 'axios'


/*
  【登录】
  parameter: object
  cteated by yyt 2019/08/20
*/
export const _gologins = (username, password,that) => {
  const redirect = that.$route.query.redirect
  return axios.post("/api/users/login", {
    name: username,
    password: password
  })
  .then((res) => {
    if(res.status==200){
      sessionStorage.setItem('token',res.data.token);
      if(redirect){
        //存在回跳地址就回跳
        that.$router.push(redirect)
      }else{
          //否则就跳到默认的首页
          that.$router.push({
            name: 'index'
          })
      }
    }else{
      return Promise.resolve(res.data)
    }
  }).catch((error)=>{
    return Promise.reject(error.response.data)
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
    console.log(res)
    return Promise.resolve(res.data)
  }).catch((error)=>{
    return Promise.reject(error.response.data)
    // console.log(error.response.data)
  });
}
