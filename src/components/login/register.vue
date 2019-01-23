<template>
  <div>
    <div class="ovh login-div">
      <div class="ovh login-Inputdiv">
        <span class="fl">用户名：</span>
        <input class="fl" type="text" placeholder="请输入手机号">
      </div>
      <div class="ovh login-Inputdiv">
        <span class="fl">邮箱：</span>
        <input class="fl" type="text" placeholder="请输入密码">
      </div>
    </div>
    <div class="login-btn" @click="gologin">注册</div>
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
  margin: 0 auto;
}
</style>
<script src="http://cdn.bootcss.com/blueimp-md5/1.1.0/js/md5.min.js"></script>
<script>
export default {
  data() {
    return {};
  },
  created: function() {
    let that = this;
    let md5 = crypto.createHash("md5");
    md5.update("123"); //需要加密的密码
    let password = md5.digest("hex"); //password 加密完的密码
    axios
      .post("/api/employee/register", {
        username: "生气！！",
        email: "1916175569@qq.com",
        password: password,
        code: "4c4c"
      })
      .then(function(res) {
        console.log(res);
      });
  },
  methods: {
    gologin: function() {
      let that = this;
      let md5 = crypto.createHash("md5");
      md5.update("123"); //需要加密的密码
      let password = md5.digest("hex"); //password 加密完的密码
      axios
        .post("/api/employee/login", {
          username: "yyt",
          password: password
        })
        .then(function(res) {
          console.log(res);
        });
    }
  }
};
</script>
