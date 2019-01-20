<template>
  <div class="searchDiv1">
    <span class="searchIcon1"></span>
    <input class="searchInput fl" v-model="searchValue" placeholder="搜索宝贝">
    <div class="fl gosearch" @click="gosearch">搜索</div>
  </div>
</template>
<style>
.searchDiv1 {
  width: 100%;
  padding: 10px;
  overflow: hidden;
  background: #fff;
}
.fl {
  float: left;
}
.searchIcon1 {
  width: 40px;
  height: 40px;
  background: url("../../../static/images/search.png") no-repeat;
  background-size: 15px;
  display: inline-block;
  position: absolute;
  left: 20px;
  top: 21px;
}
.searchInput {
  height: 40px;
  line-height: 40px;
  width: 80%;
  background: #f6f6f6;
  border-radius: 100px;
  padding: 0 30px;
  border-bottom: 1px solid #333;
  border-radius: 0px;
  background: #fff;
}
.gosearch {
  background: pink;
  width: 16%;
  border-radius: 100px;
  height: 35px;
  line-height: 35px;
  margin-left: 3%;
}
</style>
<script>
import search from './search'
import axios from "axios";
export default {
  data() {
    return {
      searchValue: "",
      cookiesArr:[],
      searchResule:[]
    };
  },
  created:function(){
    var hu=this.getCookie("historySearch");
    if(this.getCookie("historySearch")){
      this.cookiesArr=JSON.parse(this.getCookie("historySearch"));
    }else{
      this.cookiesArr=[]
    }
    console.log(this.cookiesArr)
  },
  methods: {
    gosearch() {
      // 通过v-model获取input的值
      if(this.searchValue!=''){
        this.cookiesArr.push(this.searchValue);
        var objArr=JSON.stringify(this.cookiesArr)
        this.setCookie("historySearch", objArr, 1);
        search.$emit('send',this.cookiesArr);
        this.searchValue='';
        let that = this;
        axios.get('/static/json/search.json').then(function(res){
          if(res.data.code==200){
              that.searchResule=res.data.data;
              that.$emit("searchResule",that.searchResule)
          }
        })
      }
    },
    // 设置cookie
    setCookie: function(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      var expires = "expires=" + d.toUTCString();
      console.info(cname + "=" + cvalue + "; " + expires);
      document.cookie = cname + "=" + cvalue + "; " + expires;
      console.info(document.cookie);
    },
    //获取cookie
    getCookie: function(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
      }
      return "";
    }
  }
};
</script>
