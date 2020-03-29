<template>
  <div>
    <div class="rightList" v-for="item in dataList">
      <div class="rightLi">
        <a>
          <img :src="item.wareImg" class="fl">
          <div class="rightLiTxt">
            <p class="commodityTxt text_ovh2">{{item.wareName}}</p>
            <div class="rightBottom">
              <div class="fl">{{Number(item.warePrice)>0?'¥'+item.warePrice:''}}</div>
              <div v-if="car>0">
                <div class="fr countnum" @click="addNum(item._id)">+</div>
                <input class="fr counttxt" :value="item.amount" />
                <div class="fr countnum" @click="reduceNum(item.amount, item._id)" :data-id="item._id" data-num="">-</div>
              </div>
            </div>
          </div>
        </a>
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
  width:100%;
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
  width: 50px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  border:1px solid #f6f6f6;
  margin:0 5px;
  padding: 0 5px;
}
</style>
<script>
import { $addCar } from "api/car"
import { $deleteCar } from "api/car"
export default {
  props:{
    "car":Number,
    "data-list":Array
  },
  methods: {
    deleteGoods: function () {
      let target ='5d5cfaace6a8bf3f94fc8486'
      $deleteCar(target)
    },
    reduceNum: function (amount, id) { // 减少商品数量
      console.log("减少数量")
      console.log(amount)
      if(amount<2){
        // 删除商品
        this.deleteGoods()
      }else{
        // 减少商品数量
        let carInfo = {}
        carInfo.id = id
        carInfo.num = amount - 1
        $addCar(carInfo)
      }
    },
    addNum: function (id) { // 增加商品数量
      let carInfo = {}
      carInfo.id = id
      carInfo.num = 1
      $addCar(carInfo)
    }
  }
}
</script>

