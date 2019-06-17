<template>
<el-container>
  <el-header>Header</el-header>
  <el-main>Main</el-main>
</el-container>
</template>
<style>
</style>
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
            sessionStorage.setItem('userId','123');
            that.$router.go(-1);
          }else{
            alert(res.data.msg);
          }
        });
    }
  }
};
</script>

