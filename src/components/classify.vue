<template>
  <div class="allDiv">
    <!-- <div><input type="text"></div> -->
    <div class="">
      <div>
        <ul class="fl leftNav">
          <li>这是三个字</li>
          <li>这是三个字</li>
        </ul>
      </div>
      <div class="rightList">
        <div class="rightLi">
          <img src="https://gw.alicdn.com/bao/uploaded/i3/3644584684/TB21EZ2I21TBuNjy0FjXXajyXXa_!!3644584684.png_290x10000.jpg_.webp" class="fl">
          <div class="rightLiTxt fl">
            <p class="commodityTxt text_ovh2">这里是标题这里是标题这里是标题这里是标题</p>
            <div class="rightBottom">
              <div class="fl">¥9.00</div>
              <div class="fr addCar">+</div>
            </div>
          </div>
        </div>

        <div class="rightLi">
          <img src="https://gw.alicdn.com/bao/uploaded/i3/3644584684/TB21EZ2I21TBuNjy0FjXXajyXXa_!!3644584684.png_290x10000.jpg_.webp" class="fl">
          <div class="rightLiTxt fl">
            <p class="commodityTxt text_ovh2">这里是标题这里是标题这里是标题这里是标题</p>
            <div class="rightBottom">
              <div class="fl">¥9.00</div>
              <div class="fr addCar">+</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footnav :idx='1'></footnav>
  </div>
</template>
<style scoped>
html{
  background: #fff;
}
ul{
  width:20%;
  /* margin-right:10px; */
  position: fixed;
    left: 0px;
    top: 0px;
}
li{
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #e5e5e5;
  border-right: 1px solid #e5e5e5;
}
.addCar{
    width: 20px;
    height: 20px;
    border-radius: 4px;
    border: 1px solid #f65;
    vertical-align: middle;
    text-align: center;
    font-size: 18px;
    color: #f65;
}
.rightLi{
  padding: 10px;
  overflow: hidden;
  position: relative;
  padding-bottom:0px;
}
.rightList{
  /* width:100%; */
  margin-left:20%;
}
.rightList img{
  width: 27%;;
  height: 80px;
  margin-right:3%;
}
.rightLiTxt{
  height: 100%;
  width:70%;
  text-align: left;
  border-bottom: 1px solid #e5e5e5;
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
</style>
<script>
import footnav from "components/footnav/footnav"
export default {
  data(){
    return{
      navUrl:'http://h5.globalmxb.com/test/categoryLabel'
    }
  },
  components:{
    footnav
  },
}
</script>

