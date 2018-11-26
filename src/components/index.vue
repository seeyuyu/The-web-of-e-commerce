<template>
<div>
  <div class="navDiv">
    <div class="navLi" v-for="(item,i) in navli">
      <img :src="item.image">
      <span class="saleTips" v-if="item.tips">{{item.tips}}</span>
      <p>{{item.name}}</p>
    </div>
  </div>
  <div class="topNews">
    <div class="fl topTitle">多点头条</div>
    <a href="###" class="fl topCon text_ovh">推荐！快来围观啊优惠好多啊来围观啊优惠好多啊来围观啊优惠好多啊啊啊啊啊啊啊！</a>
  </div>
  <div class="recommend">
    <div class="recommend">超市优选</div>
    <div class="recommendLi" v-for="(item,i) in recommendli">
      <p>{{item.title}}</p>
      <p>{{item.text}}</p>
      <img :src="item.image">
    </div>
  </div>
  <div class="describeDiv">
    <div class="describeTitle">舌尖美味</div>
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
  </div>
  <footnav idx='0'></footnav>
</div>
</template>
<style>
html {
  background: #f6f6f6;
}
.navDiv {
  display: -webkit-flex; /* Safari */
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  background: #fff;
  margin-bottom: 5px;
  overflow: hidden;
}
.navLi img {
  width: 50px;
  height: 50px;
}
.navLi {
  height: 100px;
  width: 25%;
  /* background: url(http://static1.xlzhao.com/frontend/images/navgroup1.png) */
  /* no-repeat center 16px; */
  /* background-size: 0.8rem 0.8rem; */
  padding-top: 15px;
  position: relative;
}
.saleTips {
  padding: 0px 5px;
  border-radius: 10px;
  background: #f65;
  color: #fff;
  font-size: 10px;
  position: absolute;
  top: 12px;
  left: 36%;
  height: 14px;
  line-height: 14px;
  overflow: hidden;
}
/* 头条 */
.topNews {
  padding: 10px;
  background: #fff;
  overflow: hidden;
  margin-bottom: 5px;
}
.topTitle {
  color: #f65;
  font-size: 16px;
  padding-right: 15px;
  margin-right: 15px;
  border-right: 1px solid #e5e5e5;
}
.topCon {
  width: 74%;
}
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
/* 超市优选 */
.recommendLi {
  height: 150px;
  width: 33.3%;
  padding: 15px 10px;
  background: #dde;
  border:1px solid #fff;
  float: left;
  border-radius: 4px;
  text-align: left;
}
</style>
<script>
import axios from "axios";
import footnav from "components/footnav/footnav"
export default {
  data() {
    return {
      navUrl:'http://h5.globalmxb.com/test/categoryLabel',
      recommendUrl:'http://h5.globalmxb.com/test/firstList',
      describeUrl:'',
      navli: [],
      recommendli:[],
      describeList: [
        {
          name: "原价原价原价原价原价原价原价原价原价原价原价原价原价原价原价",
          image:
            "https://gw.alicdn.com/bao/uploaded/i3/3644584684/TB21EZ2I21TBuNjy0FjXXajyXXa_!!3644584684.png_290x10000.jpg_.webp",
          originPrice: "100.00",
          newPrice: "80.00"
        },
        {
          name:
            "原价原价srjryskdut原价原价原价原价原价原价原价原价原价原价原价原价原价",
          image:
            "https://gw.alicdn.com/bao/uploaded/i3/3644584684/TB21EZ2I21TBuNjy0FjXXajyXXa_!!3644584684.png_290x10000.jpg_.webp",
          originPrice: "200.00",
          newPrice: "30.00"
        },
        {
          name:
            "原价原价srjryskdut原价原价原价原价原价原价原价原价原价原价原价原价原价",
          image:
            "https://gw.alicdn.com/bao/uploaded/i3/3644584684/TB21EZ2I21TBuNjy0FjXXajyXXa_!!3644584684.png_290x10000.jpg_.webp",
          originPrice: "200.00",
          newPrice: "30.00"
        },
        {
          name:
            "原价原价srjryskdut原价原价原价原价原价原价原价原价原价原价原价原价原价",
          image:
            "https://gw.alicdn.com/bao/uploaded/i3/3644584684/TB21EZ2I21TBuNjy0FjXXajyXXa_!!3644584684.png_290x10000.jpg_.webp",
          originPrice: "200.00",
          newPrice: "30.00"
        },
        {
          name:
            "原价原价srjryskdut原价原价原价原价原价原价原价原价原价原价原价原价原价",
          image:
            "https://gw.alicdn.com/bao/uploaded/i3/3644584684/TB21EZ2I21TBuNjy0FjXXajyXXa_!!3644584684.png_290x10000.jpg_.webp",
          originPrice: "200.00",
          newPrice: "30.00"
        }
      ]
    };
  },
  components:{
    footnav
  },
  created: function() {
    this.navData();
  },
  methods: {
    navData: function() {
      let that = this;
      axios.get(that.navUrl).then(function(res){
        console.log(res.data);
        that.navli=res.data;
      })
    },
    recommendData:function(){
      let that=this;
      axios.get(that.recommendUrl).then(function(res){
        console.log(res.data);
        that.recommendli=res.data;
      })

    }
  }
};
</script>
