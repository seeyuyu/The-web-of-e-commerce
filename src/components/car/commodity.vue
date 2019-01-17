<template>
  <div>
    <div class="rightList" v-for="item in dataList">
      <div class="rightLi">
          <img src="item.image" class="fl">
          <div class="rightLiTxt fl">
            <p class="commodityTxt text_ovh2">{{item.name}}</p>
            <div class="rightBottom">
              <div class="fl">¥9.00</div>
              <div v-if="car>0">
                <div class="fr countnum">-</div>
                <div class="fr counttxt">0</div>
                <div class="fr countnum">+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>
<style scoped>
.rightLi{
    padding: 10px;
    overflow: hidden;
    position: relative;
    padding-bottom: 0px;
    background: #fff;
    border-radius: 8px;
    margin: 5px 10px;
}
.rightList{
  /* width:100%; */
  /* margin-left:20%; */
}
.rightList img{
  width: 80px;
  height: 80px;
  margin-right:3%;
}
.rightLiTxt{
  height: 100%;
  width:70%;
  text-align: left;
  /* border-bottom: 1px solid #e5e5e5; */
  padding-bottom:10px;
}
.allDiv{
  width:100%;
  overflow: hidden;
}
.leftNav{
    overflow-y: scroll;
    height: 100%;
}
.commodityTxt{
  height: 40px;
  /* line-height: 40px; */
}
.rightBottom{
    margin-top: 20px;
    overflow: hidden;
}
.rightLiTxtc{
      border-bottom: 1px solid #f6f6f6;
}
.borderBootom{
  width:100%;
  height: 2px;
  background: #f6f6f6;
}
.countnum{
  padding: 5px 10px;
  border:1px solid #f6f6f6;
}
.counttxt{
  width: 30px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  border:1px solid #f6f6f6;
  margin:0 5px;
  padding: 0 10px;
}
</style>
<script>
export default {
  props:{
    "car":Number,
    "dataList":Array
  }
}
</script>

