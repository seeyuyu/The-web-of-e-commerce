<template>
  <div>
    <searchinput></searchinput>
    <inputhistory></inputhistory>
    <div>
      <p>搜索结果</p>
      <commoditylist car="0" dataList=""></commoditylist>
    </div>
  </div>
</template>
<style scoped>
html{
  background: #fff;
}
</style>
<script>
import searchinput from "components/search/searchinput"
import inputhistory from "components/search/inputhistory"
import commoditylist from "components/car/commodity"
export default{
  data(){
    return{
      dataList:[]
    }
  },
  components:{
    searchinput,
    inputhistory,
    commoditylist
  },
  created:{

  },
  methods: {
    getData:function(){
      let that = this;
      axios.get('/static/json/search.json').then(function(res){
        console.log(res.data);
        if(res.data.code==200){
            that.searchResule=res.data.data;
        }
      })
    }
  }
}
</script>
