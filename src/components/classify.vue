<template>
<div class="allDiv">
    <!-- <div><input type="text"></div> -->
    <div class="">
      <div class="leftNavDiv">
        <ul class="fl leftNav" v-if="classify.length>0">
          <li v-for="item in classify[0].categoryList" :key="item.categoryId" @click="chooseNav(item.categoryId)" :class="{liAct:item.categoryId===currentId}">
            <span><img v-if="item.categoryImgPathReal" class="navIcon" :src="item.categoryImgPathReal" />{{item.categoryName}}</span>
            <ul v-if="item.childCategoryList">
              <li @click="checkList" class="text_ovh" v-for="(items, index) in item.childCategoryList" :key="index"><i class="squareIcon"></i>{{items.categoryName}}</li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
      <mt-loadmore :bottom-method="loadBottom"  @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded"  ref="loadmore">
        <div class="rightList">
          <div class="rightLi" v-for="(item, index) in classifyList.wareList" :key="index">
            <img :src="item.wareImg" class="fl">
            <div class="rightLiTxt fl">
              <p class="commodityTxt text_ovh2">{{item.wareName}}</p>
              <div class="rightBottom">
                <div class="fl">{{item.warePrice!=''?'¥'+item.warePrice:'免费'}}</div>
                <div class="fr addCar">+</div>
              </div>
            </div>
          </div>
        </div>
        <div slot="bottom" class="mint-loadmore-bottom">
          <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
          <span v-show="bottomStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
        </div>
      </mt-loadmore>
      </div>
      <!-- <mt-loadmore :bottom-method="loadBottom" @bottom-status-change="handleBottomChange" :bottom-all-loaded="allLoaded" ref="loadmore">
        <ul class="page-loadmore-list">
          <li v-for="item in list" class="page-loadmore-listitem">{{ item }}</li>
        </ul>
        <div slot="bottom" class="mint-loadmore-bottom">
          <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
          <span v-show="bottomStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
        </div>
      </mt-loadmore> -->
    </div>
    <footnav :idx='1'></footnav>
  </div>
</template>

<script>
  import footnav from "components/footnav/footnav"
  import axios from "axios"
  import { getClassifyList, getClassifyNav } from "api/classify"

  export default {
    data() {
      return {
        navUrl: 'http://h5.globalmxb.com/test/categoryLabel',
        classify: [],
        classifyList: [],
        currentId: 2,

        list: [],
        allLoaded: false,
        bottomStatus: '',
        wrapperHeight: 0
      }
    },
    components: {
      footnav
    },
    created: function() {
      // this.getData()
      this._getList()
      this._getNav()
      for (let i = 1; i <= 20; i++) {
        this.list.push(i);
      }
    },
    mounted() {
      this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
    },
    methods: {
      getData: function() {
        let that = this
        axios.get("/static/json/navList.json").then(function(res) {
          if (res.status == 200) {
            let dataLocal = res.data.data.wareCategory;
            for (let i = 0; i < dataLocal.length; i++) {
              if (res.data.data.wareCategory[i].defaultChosed) {
                // 左侧导航
                that.classify = res.data.data.wareCategory[i]
              }
            }
          }
        })
        // axios.get("/static/json/classify.json").then(function(res) {
        //   console.log(res);
        //   that.classifyList = res.data.data
        // })
      },
      chooseNav: function(e) {
        console.log(e)
        // liAct
        this.currentId = e
        let ClassifyParam = {
          "categoryId": e,
        }
        getClassifyList(ClassifyParam).then((res) => {
          if (res.code == '0000') {
            this.classifyList = res.data
          } else {
            alert(res.msg);
          }
        })
      },
      // 商品列表
      _getList: function() {
        let ClassifyParam = {
          // "pageNum": 1,
          "categoryId": "11340",
        }
        getClassifyList(ClassifyParam).then((res) => {
          if (res.code == '0000') {
            this.classifyList = res.data
          } else {
            alert(res.msg);
          }
        })
      },
      _getNav: function() {
        let ClassifyParam = {

        }
        getClassifyNav(ClassifyParam).then((res) => {
          console.log(res.data.wareCategory)
          if (res.code == '0000') {
            this.classify = res.data.wareCategory
          } else {
            alert(res.msg);
          }
        })
      },
      checkList:function(){

      },
      // loadBottom() {
      //   // alert("1222")
      // },
      handleBottomChange(status) {
        this.bottomStatus = status;
      },

      loadBottom() {
        console.log("dasdasdasfg")
        this.wrapperHeight = document.documentElement.clientHeight - this.$refs.wrapper.getBoundingClientRect().top;
         this.$refs.loadmore.onBottomLoaded();
        // setTimeout(() => {
        //   // let lastValue = this.list[this.list.length - 1];
        //   // if (lastValue < 40) {

        //   // } else {
        //   //   this.allLoaded = true;
        //   // }
        //   this.$refs.loadmore.onBottomLoaded();
        // }, 1500);
      }
    }
  }
</script>
<style scoped>
  html {
    background: #fff;
  }

  .leftNavDiv {
    width: 27%;
    position: fixed;
    left: 0px;
    top: 0px;
  }

  .leftNavDiv li {
    /* height: 40px; */
    line-height: 40px;
    /* border-bottom: 1px solid #e5e5e5; */
    /* border-right: 1px solid #e5e5e5; */
  }

  .addCar {
    width: 20px;
    height: 20px;
    border-radius: 4px;
    border: 1px solid #f65;
    vertical-align: middle;
    text-align: center;
    font-size: 18px;
    color: #f65;
  }

  .rightLi {
    padding: 10px;
    overflow: hidden;
    position: relative;
    padding-bottom: 0px;
  }

  .rightList {
    /* width:100%; */
    margin-left: 27%;
    margin-bottom: 70px;
  }

  .rightList img {
    width: 27%;
    /* height: 80px; */
    margin-right: 3%;
  }

  .rightLiTxt {
    height: 100%;
    width: 70%;
    text-align: left;
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 10px;
  }

  .allDiv {
    width: 100%;
    overflow: hidden;
  }

  .leftNavDiv {
    overflow-y: scroll;
    height: 100%;
  }

  .leftNav {
    background: #f6f6f6;
    width: 90%;
    margin-bottom: 50px;
  }

  .commodityTxt {
    height: 40px;
    /* line-height: 40px; */
  }

  .rightBottom {
    margin-top: 20px;
    overflow: hidden;
  }

  .rightLiTxtc {
    border-bottom: 1px solid #f6f6f6;
  }

  .borderBootom {
    width: 100%;
    height: 2px;
    background: #f6f6f6;
  }

  .navIcon {
    width: 18px;
    height: 18px;
    margin-right: 2%;
    display: inline-block;
  }

  .liAct {
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.10);
    /* width: 94%; */
    width: 104%;
    background: #fff;
    border-radius: 5px;
  }

  .leftNav ul {
    display: none;
    text-align: left;
    list-style: disc;
    margin-left: 22px;
    font-size: 12px;
  }

  .leftNav ul li:first-child {
    color: #f65;
  }

  .leftNav ul li:after {
    content: '';
    width: 50px;
    height: 1px;
    border-bottom: 1px solid #ccc;
    display: block;
  }

  .leftNav ul li:last-child:after {
    border-bottom: none;
  }

  .liAct ul {
    display: block;
  }

  .squareIcon {
    width: 5px;
    height: 5px;
    background: #999;
    display: inline-block;
    border-radius: 50%;
    margin-right: 5px;
  }

  .leftNav ul li:first-child .squareIcon {
    background: #f65;
  }
  @component-namespace page {
    @component loadmore {
      @descendent desc {
        text-align: center;
        color: #666;
        padding-bottom: 5px;
        &:last-of-type {
          border-bottom: solid 1px #eee;
        }
      }

      @descendent listitem {
        height: 50px;
        line-height: 50px;
        border-bottom: solid 1px #eee;
        text-align: center;
        &:first-child {
          border-top: solid 1px #eee;
        }
      }

      @descendent wrapper {
        overflow: scroll;
      }

      .mint-spinner {
        display: inline-block;
        vertical-align: middle;
      }
    }
  }

  @component mint-loadmore-bottom {
    span {
      display: inline-block;
      transition: .2s linear;
      vertical-align: middle;

      @when rotate {
        transform: rotate(180deg);
      }
    }
  }
</style>



