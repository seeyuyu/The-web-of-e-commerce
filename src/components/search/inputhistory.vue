<template>
  <div>
    <p class="title">搜索历史</p>
    <ul class="historyList">
      <li class="fl">这里是历史啊</li>
      <li class="fl">这里</li>
      <li class="fl">历史啊</li>
      <li class="fl">啊</li>
    </ul>
  </div>
</template>
<style>
.title {
  height: 40px;
  line-height: 40px;
  padding: 0px 0px 0px 20px;
  margin: 15px 0 5px 0;
  text-align: left;
}
.historyList {
  overflow: hidden;
  padding: 0 10px;
}
.historyList li {
  border-radius: 100px;
  border: 1px solid #e5e5e5;
  padding: 2px 10px;
  margin-right: 10px;
}
.fl {
  float: left;
}
</style>
<script>
export default {
  data() {
    return{
      cookiesArr:[]
    }
  },
  created: function() {
    var hu = this.getCookie("historySearch");
    if (this.getCookie("historySearch")) {
      this.cookiesArr = JSON.parse(this.getCookie("historySearch"));
    } else {
      this.cookiesArr = [];
    }
    console.log("22222"+this.cookiesArr)
  },
  methods:{
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
