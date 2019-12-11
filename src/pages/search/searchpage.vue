<template>
  <div>
    <searchinput v-on:searchResule="we"></searchinput>
    <inputhistory></inputhistory>
    <div>
      <p v-if="searchre" class="title">搜索结果</p>
      <p v-else class="nosearch">{{searchtip}}</p>
      <commoditylist :car="0" :data-list="searchResule"></commoditylist>
    </div>
  </div>
</template>
<style scoped>
html{
  background: #fff;
}
.title {
    height: 40px;
    line-height: 40px;
    padding: 0px 0px 0px 20px;
    margin: 15px 0 5px 0;
    text-align: left;
}
.nosearch{
  text-align: center;
}
</style>
<script>
import axios from "axios";
import searchinput from "components/search/searchinput"
import inputhistory from "components/search/inputhistory"
import commoditylist from "components/car/commodity"
export default {
  data(){
    return{
      searchResule:[],
      searchre:false,
      searchtip:''
    }
  },
  components:{
    searchinput,
    inputhistory,
    commoditylist
  },
  methods: {
    we:function(data){
      console.log(data);
      this.searchResule=data;
      if(data.length>0){
        this.searchre=true;
      }else{
        this.searchre=false;
        this.searchtip='暂无'
      }
    }
  },
  created:function(){
  },
}
</script>
