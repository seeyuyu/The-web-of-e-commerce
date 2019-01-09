<template>
  <div>
    <p class="title">搜索历史<span class="delete fr"></span></p>
    <ul class="historyList">
      <li class="fl" v-for="item in historyArr">{{item}}</li>
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
  padding: 5px 15px;
  margin: 0 20px 15px 0;
}
.fl {
  float: left;
}
.fr{
  float:right;
}
.delete{
    width: 30px;
    height: 30px;
    display: inline-block;
    background: url("../../../static/images/delete.png");
    background-size: 30px 30px;
    margin-right: 20px;
    margin-top: 5px;
}
</style>
<script>
import search from './search'
export default {
  data() {
    return{
      cookiesArr:[],
      historyArr:[]
    }
  },
  created: function() {
    var hu = this.getCookie("historySearch");
    if (this.getCookie("historySearch")) {
      this.historyArr = JSON.parse(this.getCookie("historySearch"));
    } else {
      this.historyArr = [];
    }
    console.log("22222"+this.cookiesArr);
    search.$on('send', data => {
      this.historyArr = data
    })

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
