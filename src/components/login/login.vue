<template>
  <div>
    <div class="ovh login-div">
      <div class="ovh login-Inputdiv">
        <span class="fl">账号：</span>
        <input class="fl" type="text" placeholder="请输入手机号">
      </div>
      <div class="ovh login-Inputdiv">
        <span class="fl">密码：</span>
        <input class="fl" type="password" placeholder="请输入密码">
      </div>
    </div>
    <div class="login-btn">登陆</div>
    <re>注册</re>
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
<script>
export default {
  data() {
    return {};
  }
};
</script>
