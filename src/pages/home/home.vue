<template>
  <div v-if="dataArr[0]">
    <search></search>
    <mt-swipe :auto="400000" class="swiperDiv">
      <mt-swipe-item v-for="(item,i) in dataArr[0].dataList">
        <img
          class="bannerImg"
          :src="item.imageUrl"
        >
      </mt-swipe-item>
    </mt-swipe>

    <!-- displayType: 146、119 - 一张图100%布局 -->
    <!-- displayType: 135 - 一堆图100%布局 -->
    <!-- displayType: 134 - 一拖二    未完成-->
    <!-- displayType: 130 - 50% -->
    <!-- displayType: 130 - 50% -->
    <div v-for="(item,i) in dataArr">
      <div v-if="item.displayType === 146 || item.displayType === 119">
        <img class="advImg" :src="item.dataList[0].imageUrl">
      </div>
      <div class="imgDiv_2" v-if="item.displayType === 130">
        <img class="advImg" v-for="(itemImg,indexs) in item.dataList" :src="itemImg.imageUrl">
      </div>
      <div class="imgDiv_2" v-if="item.displayType === 135">
        <div class="imgDiv_2">
          <img class="advImg" v-for="(itemarr,index) in item.dataList"  v-if="index < 2" :key="index" :src="itemarr.imageUrl">
        </div>
        <div class="imgDiv_4">
          <img class="advImg" v-for="(itemarr,i) in item.dataList.slice(2)" :src="itemarr.imageUrl">
        </div>
      </div>
    </div>

    <div>
      <img class="advImg" :src="dataArr[2].dataList[0].imageUrl">
    </div>
    <div>
      <img class="advImg" :src="dataArr[4].dataList[0].imageUrl">
    </div>
    <div class="imgDiv_2">
      <img class="advImg" v-for="(item,index) in dataArr[5].dataList"  v-if="index < 2" :key="index" :src="item.imageUrl">
    </div>
    <div class="imgDiv_4">
      <img class="advImg" v-for="(item,i) in dataArr[5].dataList.slice(2)" :src="item.imageUrl">
    </div>

    <div>
      <img class="advImg" :src="dataArr[6].dataList[0].imageUrl">
    </div>
    <div>
      <img class="advImg" :src="dataArr[7].dataList[0].imageUrl">
    </div>
    <div class="navDiv">
      <div class="navLi" v-for="(item,i) in navli">
        <img :src="item.image">
        <span class="saleTips" v-if="item.tips">{{item.tips}}</span>
        <p>{{item.name}}</p>
      </div>
    </div>
    <div class="topNews">
      <div class="fl topTitle">多点头条</div>
      <div class="marquee_box">
        <ul class="marquee_list" :class="{marquee_top:animate}">
          <li v-for="(item,index) in marqueeList">{{item.name}}</li>
        </ul>
      </div>
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
      <goods :describelist="describeList"></goods>
    </div>
    <footnav :idx="0"></footnav>
  </div>
</template>
<style scoped>
html {
  background: #f6f6f6;
}
.swiperDiv {
  height: 116px;
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
  font-size: 14px;
  padding-right: 15px;
  margin-right: 10px;
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
.recommend {
  overflow: hidden;
}
.recommendLi {
  height: 150px;
  width: 33.3%;
  padding: 15px 10px;
  background: #dde;
  border: 1px solid #fff;
  float: left;
  border-radius: 4px;
  text-align: left;
}
.recommendLi img {
  width: 100px;
}
.bannerImg {
  width: 100%;
}
/* 文字竖向轮播图 */
.marquee {
  width: 100%;
  height: 50px;
  align-items: center;
  color: #3a3a3a;
  background-color: white;
  display: flex;
  box-sizing: border-box;
  overflow: hidden;
}

.marquee_title {
  padding: 0 20px;
  height: 21px;
  font-size: 14px;
  border-right: 1px solid #d8d8d8;
  align-items: center;
}

.marquee_box {
  display: block;
  position: relative;
  /* width: 60%; */
  height: 24px;
  overflow: hidden;
}

.marquee_list {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
}

.marquee_top {
  transition: all 0.5s;
  margin-top: -24px;
}

.marquee_list li {
  height: 24px;
  line-height: 24px;
  font-size: 14px;
  /* padding-left: 20px; */

  width:200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: left;
}

.marquee_list li span {
  padding: 0 2px;
}
.advImg{
  width:100%;
}
.imgDiv_2 .advImg{
  width:50%;
}
.imgDiv_4 .advImg{
  width:25%;
  margin-top: -2px;
}
</style>
<script>
import axios from "axios"
import footnav from "components/footnav/footnav"
import search from "components/search/searchdiv"
import goods from "components/goods/goods"
import { getHomeDetail } from "api/home"
import { Indicator } from 'mint-ui'
export default {
  data() {
    return {
      navUrl: "http://h5.globalmxb.com/test/categoryLabel",
      recommendUrl: "http://h5.globalmxb.com/test/firstList",
      describeUrl: "",
      navli: [],
      recommendli: [],
      dataArr:[],
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
      ],
      animate: false,
      marqueeList: [
        {
          name:
            "推荐！快来围观啊优惠好多啊来围观啊优惠好多啊来围观啊优惠好多啊啊啊啊啊啊啊！"
        },

        {
          name: "特价"
        },

        {
          name: "大甩卖"
        }
      ]
    };
  },
  computed: {
    text() {
      return {
        id: this.number,
        val: this.textArr[this.number]
      };
    }
  },
  components: {
    footnav,
    search,
    goods
  },
  created: function() {
    Indicator.open();//加载框
    // this.navData();
    // this.recommendData();
    this.getDetail()
    // 页面显示
    setInterval(this.showMarquee, 2000);
  },
  methods: {
    getDetail:function() {
      let parameter = 'param=%7B%22index%22%3A0%2C%22currentPage%22%3A1%2C%22reqUrl%22%3A%22https%3A%2F%2Fcmsapi.dmall.com%2Fapp%2Fweb%2Fjson%2F1%2F142%22%2C%22pairs%22%3A%221-0-142%22%2C%22code%22%3A%221%22%2C%22networkType%22%3A2%7D&source=2&tempid=C89E5CB6724000021B1C1ED510A0112A'
      // getHomeDetail(parameter)
      getHomeDetail(parameter).then(res => {
          console.log(res.data.data)
          this.dataArr=res.data.data.pageModules

          Indicator.close();//关闭加载框
      });
    },
    navData: function() {
      let that = this;
      // console.log(this.GLOBAL.apiUrl)
      // axios.get(this.GLOBAL.apiUrl+'categoryLabel').then(function(res){
      //   // console.log(res.data);
      //   that.navli=res.data;
      // })
      axios.get("/static/json/commodity.json").then(function(res) {
        console.log(res.data.data);
        that.navli = res.data.data;
      });
    },
    recommendData: function() {
      let that = this;
      // axios.get(this.GLOBAL.apiUrl+'firstList').then(function(res){
      //   // console.log(res.data);
      //   that.recommendli=res.data;
      // })
      axios.get("/static/json/commodity.json").then(function(res) {
        console.log(res.data);
        that.recommendli = res.data.data;
        Indicator.close();//关闭加载框
      });
    },
    showMarquee: function() {
      this.animate = true;
      setTimeout(() => {
        this.marqueeList.push(this.marqueeList[0]);
        this.marqueeList.shift();
        this.animate = false;
      }, 5000);
    }
  }
};
</script>
