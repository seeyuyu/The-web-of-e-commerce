<template>
  <div>
    <div class="ovh login-div">
      <div class="ovh login-Inputdiv">
        <span class="fl">账号：</span>
        <input class="fl" type="text" value="ssdsfs"  v-model="username" placeholder="用户名">
      </div>
      <div class="ovh login-Inputdiv">
        <span class="fl">密码：</span>
        <input class="fl" type="password" v-model="password" placeholder="请输入密码">
      </div>
    </div>
    <div class="login-btn" @click="gologin">登陆</div>
    <router-link to="/register">注册</router-link>
  </div>
</template>
<style>
.login-div {
  margin-top: 35%;
}
.login-Inputdiv {
  margin: 0 auto;
  width: 60%;
  line-height: 40px;
  margin-bottom: 20px;
}
.login-Inputdiv input {
  height: 40px;
  line-height: 40px;
  border: 1px solid #999;
  border-radius: 4px;
  padding: 0 5px;
}
.login-btn {
  width: 30%;
  /* border: 1px solid #333; */
  background: rgb(252, 231, 108);
  color: rgb(51, 51, 51);
  border-radius: 8px;
  padding: 8px 10px;
  margin: 20px auto;
}
</style>
<script src="http://cdn.bootcss.com/blueimp-md5/1.1.0/js/md5.min.js"></script>
<script>
import axios from "axios";
import crypto from "crypto";
export default {
  data() {
return {
  username:'',
  password:''
}
  },
  created: function() {

  },
  methods: {
    gologin: function() {
      // console.log(this.input1)
      let that = this;
      let md5 = crypto.createHash("md5");
      md5.update(that.password); //需要加密的密码
      let password = md5.digest("hex"); //password 加密完的密码
      axios
        .post("/api/employee/login", {
          username: that.username,
          password: password
        })
        .then(function(res) {
          console.log(res);
          if(res.data.code==0){

          }else{
            alert(res.data.msg)
          }
        });
    }
  }
};
</script>
