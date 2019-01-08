<template>
<div class="searchDiv" @click="jump">
  <span class="searchIcon"></span>搜索宝贝
</div>
</template>
<style>
.searchIcon{
  margin-right: 5px;
  width:10px;
  height: 10px;
  background:url("../../../static/images/search.png") no-repeat;
  background-size:10px;
  display: inline-block;
}
.searchDiv{
  /* height: 40px; */
  line-height: 40px;
  padding:0px;
}
</style>
<script>
export default{
  data(){
    return{

    }
  },
  methods:{
    jump(){
      this.$router.push({path:'/searchpage'})
    }
  }
}
</script>
