<template>
  <div class="searchDiv">
    <span class="searchIcon"></span>
    <input class="searchInput fl" v-model='searchValue' placeholder="搜索宝贝">
    <div class="fl gosearch" @click="gosearch">搜索</div>
  </div>
</template>
<style>
.searchDiv {
  width: 100%;
  padding: 10px;
}
.fl{
  float:left;
}
.searchIcon {
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
}
.gosearch{
  background: pink;
  width: 16%;
  border-radius: 100px;
  height: 40px;
  line-height: 40px;
  margin-left: 3%;
}
</style>
<script>
export default {
  data() {
    return {
      searchValue:''
    };
  },
  methods: {
    gosearch(){
      console.log(this.searchValue)
    }
  }
};
</script>
