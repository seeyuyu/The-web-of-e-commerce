<template>
  <div>
    <!-- <div class="searchout"><search></search></div> -->

    <commoditylist :car="1" :data-list="searchResule" class="shopContent"></commoditylist>
    <div class="TotalDiv">
      <div>合计：</div>
      <div class="submitOrder">选好了</div>
    </div>
    <footnav :idx='2'></footnav>
  </div>
</template>
<script>
import axios from "axios";
import footnav from "components/footnav/footnav"
import commoditylist from "components/car/commodity"
import search from "components/search/searchdiv"
import { $carlist } from "api/car"
// import { Indicator } from 'mint-ui'
export default {
  data(){
    return{
      searchResule:[]
    }
  },
  components:{
    footnav,
    search,
    commoditylist
  },
  methods:{
    // carlist(){
    //   var that=this;
    //   axios.get('/static/json/search.json').then(function(res){
    //     if(res.data.code==200){
    //       console.log(res.data.data)
    //         that.searchResule=res.data.data;
    //         // Indicator.close();//关闭加载框
    //     }
    //   })
    // }
  },
  created:function(){
    // Indicator.open()//加载框
    // this.carlist()

    // then 写在这里代表着同步调用
    $carlist().then(res => {
        if(res.status == 200){
          console.log(res.data)
          if(res.data.length == 0){
            // 没有数据
          }else{
            this.searchResule=res.data;
          }
          // Indicator.close();//关闭加载框
        }
      }, err =>{
        console.log(err)
    })
  }
}
</script>
<style scoped>
html{
  background: #f6f6f6;
}
.searchout{
  background: #fff;
  overflow: hidden;
}
.searchout .searchDiv {
    border-radius: 100px;
    margin: 5px 10px;
    background: #f6f6f6;
}
.TotalDiv{
  position:fixed;
  bottom:52px;
  left:0px;
  width:100%;
}
.shopContent{
  margin-bottom:200px;
}
.TotalDiv{
  background: #fff;
}
.submitOrder{
    display: inline-block;
    width: 100px;
    height: 40px;
    border-radius: 3px;
    background: #ff7b38;
    line-height: 40px;
    color: #fff;
}
</style>
