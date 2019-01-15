<template>
  <div>
    <searchinput></searchinput>
    <inputhistory></inputhistory>
    <div>
      <p>搜索结果</p>
      <commoditylist car="0"></commoditylist>
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

    }
  },
  components:{
    searchinput,
    inputhistory,
    commoditylist
  }
}
</script>
