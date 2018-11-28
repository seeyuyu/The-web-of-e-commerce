<template>
  <div class="">
    <div><input type="text"></div>
    <div class="">
      <div>
        <ul class="fl">
          <li>这是三个字</li>
          <li>这是三个字</li>
        </ul>
      </div>
      <div class="rightList">
        <div class="rightLi">
          <img src="" class="fl">
          <div class="rightLiTxt">
            <p class="commodityTxt text_ovh2">这里是标题这里是标题这里是标题这里是标题</p>
            <div>
              <div class="fl">¥9.00</div>
              <div class="fr addCar"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footnav :idx='1'></footnav>
  </div>
</template>
<style>
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
  width:5px;
  height: 5px;
  border-radius: 4px;
  border:1px solid #f65;
}
.rightLi{
  padding: 0 10px 10px 0;
  overflow: hidden;
  position: relative;
}
.rightList{
  width:100%;
  margin-left:20%;
}
.rightList img{
  width:80px;
  height: 80px;
  margin-right:10px;
}
.rightLiTxt{
  height: 100%;
  text-align: left;
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

