<template>
  <div class="describeList fl" v-for="item in describeList">
    <div class="imgDiv">
      <img :src="item.image">
    </div>
    <div class="describetxt text_ovh2">{{item.name}}</div>
    <div class="yuanprice">¥{{item.originPrice}}</div>
    <div class="describeBottom">
      <span class="redColor txtPrice fl">¥{{item.newPrice}}</span>
      <div class="fr addCart">+</div>
    </div>
  </div>
</template>
<style scoped>
.describeList {
  width: 33.3%;
  padding: 10px 8px;
  border-right: 1px solid #e5e5e5;
  border-bottom: 1px solid #e5e5e5;
}
.imgDiv {
  width: 100%;
  padding: 10px;
}
.imgDiv img {
  width: 100%;
}
.describetxt {
  font-size: 12px;
}
.yuanprice {
  color: #999;
  text-decoration: line-through;
  font-size: 10px;
  margin-top: 8px;
  text-align: left;
}
.describeBottom {
  /* padding: 0 5px; */
}
.redColor {
  color: #f65;
}
.describeDiv {
  background: #fff;
  overflow: hidden;
}
.addCart {
  width: 24px;
  height: 24px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  color: #f65;
  line-height: 24px;
  text-align: center;
  vertical-align: middle;
  font-size: 30px;
  padding: 0px;
  margin: 0px;
  margin-top: -5px;
}
.txtPrice {
  margin-top: 3px;
}
.describeTitle {
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #689;
  color: #fff;
}
</style>
<script>
export default {
  props:{
    "describe-list":Array
  }
}
</script>

