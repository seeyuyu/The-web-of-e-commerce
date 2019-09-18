<template>
  <div>
    <div class="ovh login-div">
      <!-- <div class="ovh login-Inputdiv">
        <span class="fl">用&nbsp;户&nbsp;名：</span>
        <input class="fl" type="text" v-model="username" placeholder="请输入用户名">
      </div>
      <div class="ovh login-Inputdiv">
        <span class="fl">邮&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;箱：</span>
        <input class="fl" type="text" v-model="email" placeholder="请输入邮箱">
      </div>
      <div class="ovh login-Inputdiv">
        <span class="fl"></span>
        <div class="getcode-btn" @click="getcode">获取验证码</div>
      </div>
      <div class="ovh login-Inputdiv">
        <span class="fl">验&nbsp;&nbsp;证&nbsp;&nbsp;码：</span>
        <input class="fl" type="text" v-model="verify" placeholder="请输入验证码">
      </div> -->
      <div class="ovh login-Inputdiv">
        <span class="fl">昵&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称：</span>
        <input class="fl" type="text" v-model="username" placeholder="请输入昵称">
      </div>
      <div class="ovh login-Inputdiv">
        <span class="fl">密&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：</span>
        <input class="fl" type="password" v-model="password" placeholder="请输入密码">
      </div>
      <div class="ovh login-Inputdiv">
        <span class="fl">确认密码：</span>
        <input class="fl" type="password" v-model="password1" placeholder="确认密码">
      </div>
    </div>
    <div class="login-btn" @click="goregister">注册</div>
  </div>
</template>
<script src="http://cdn.bootcss.com/blueimp-md5/1.1.0/js/md5.min.js"></script>
<script>
import axios from "axios"
import crypto from "crypto"
import { _goregister } from "api/login"
import { setTost } from "api/config"
import { popToast } from "common/js/common"

const params = {}

export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      password1: "",
      verify: ""
    };
  },
  created: function() {
    let that = this;
  },
  methods: {
    // getcode: function() {
    // 获取验证码
    //   let that = this;
    //   axios
    //     .post("/api/employee/verify", {
    //       username: this.username,
    //       email: this.email
    //     })
    //     .then(function(res) {
    //       console.log(res);
    //     });
    // },
    // 注册
    goregister() {
      let that = this
      if (this.password == this.password1) {
        let md5 = crypto.createHash("md5");
        md5.update(this.password); //需要加密的密码
        let password = md5.digest("hex"); //password 加密完的密码
        params.name = this.username
        params.password = password
        _goregister(params).then((res) => {
          console.log(res);
          // if(res.data.code==0){
            // that.$router.go(-1);
            popToast({ that, msg:'注册成功，请登录' })
            setTimeout(function(){
              that.$router.push({ path:'/login'})
            },1500)
          // }else{
          //   popToast({ that, msg:error })
          // }
        }).catch(error => {
          // this.$toast({
          //   message: error,
          //   position: 'bottom',
          //   duration: 2000
          // });
          popToast({ that, msg:error })
        });
      }else{
        popToast({ that, msg:"密码输入不一致" })
      }
    }
  }
};
</script>
<style>
.login-div {
  margin-top: 35%;
}
.login-Inputdiv {
  margin: 0 auto;
  width: 70%;
  line-height: 40px;
  margin-bottom: 20px;
}
.login-Inputdiv input {
  height: 40px;
  line-height: 40px;
  border: 1px solid #999;
  border-radius: 4px;
  padding: 0 5px;
  width:65%;
}
.login-btn {
  width: 30%;
  /* border: 1px solid #333; */
  background: rgb(252, 231, 108);
  color: rgb(51, 51, 51);
  border-radius: 8px;
  padding: 8px 10px;
  margin: 0 auto;
}
.getcode-btn {
  display: inline-block;
  background: rgb(252, 231, 108);
  color: rgb(51, 51, 51);
  border-radius: 8px;
  padding: 0px 10px;
  margin: 0 auto;
}
</style>
