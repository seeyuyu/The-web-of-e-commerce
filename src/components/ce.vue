<template>
  <div class="allDiv">
    <div class="leftNavDiv">
      <ul class="fl leftNav" v-if="classify[0]">
        <li
          v-for="item in classify[0].categoryList"
          :key="item.categoryId"
          @click="chooseNav(item.categoryId)"
          :class="{ liAct: item.categoryId === currentId }"
        >
          <span
            ><img
              v-if="item.categoryImgPathReal"
              class="navIcon"
              :src="item.categoryImgPathReal"
            />{{ item.categoryName }}</span
          >
          <ul v-if="item.childCategoryList">
            <!-- .stop阻止事件冒泡 -->
            <li
              v-for="items in item.childCategoryList"
              :key="items.categoryId"
              @click.stop="checkList(items.categoryId)"
              class="text_ovh"
              :class="{ categoryAct: items.categoryId === chooseId }"
            >
              <i class="squareIcon"></i>{{ items.categoryName }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="page-loadmore">
      <div
        class="page-loadmore-wrapper"
        ref="wrapper"
        :style="{ height: wrapperHeight + 'px' }"
      >
        <mt-loadmore
          :bottom-method="loadBottom"
          @bottom-status-change="handleBottomChange"
          :bottom-all-loaded="allLoaded"
          ref="loadmore"
        >
          <ul class="page-loadmore-list">
            <li v-for="item in list" class="page-loadmore-listitem">
              {{ item }}
            </li>
            <div class="rightListDiv">
              <div class="rightList">
                <div
                  class="rightLi"
                  v-for="(item, index) in classifyList"
                  :key="index"
                >
                  <img
                    :src="item.wareImg"
                    class="fl rightListImg"
                    onerror="../../static/images/404.jpg"
                  />
                  <div class="rightLiTxt">
                    <p class="commodityTxt text_ovh2">{{ item.wareName }}</p>
                    <div class="rightBottom">
                      <div class="fl moneyTxt">
                        {{
                          item.warePrice != "" ? "¥" + item.warePrice : "免费"
                        }}
                      </div>
                      <div class="fr addCarDiv" @click.stop="addCar(item._id)">
                        <!-- <i class="addCar"></i> -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bottomDiv" v-show="bottomTip">
                滑到底了~
              </div>
            </div>
          </ul>
          <!-- <div slot="bottom" class="mint-loadmore-bottom">
          <span v-show="bottomStatus !== 'loading'" :class="{ 'is-rotate': bottomStatus === 'drop' }">↑</span>
          <span v-show="bottomStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
        </div> -->
        </mt-loadmore>
      </div>
    </div>
    <footnav :idx="1"></footnav>
  </div>
</template>

<script type="text/babel">
import footnav from "components/footnav/footnav";
import axios from "axios";
import { getClassifyList, getClassifyNav } from "api/classify";
import { $addCar } from "api/car";
import { timeout } from "q";

export default {
  data() {
    return {
      // list: [],
      allLoaded: false,
      // bottomStatus: '',
      wrapperHeight: 0,
      navUrl: "http://h5.globalmxb.com/test/categoryLabel",
      classify: [],
      classifyList: [],
      currentId: "21382", //品牌直发
      canLoad: false,
      nowait: true,
      pageNum: 1,
      chooseId: 0,
      controlId: 0, //逻辑用全局商品id

      list: [],
      bottomStatus: "",
      wrapperHeight: 0,
      bottomTip: false
    };
  },
  components: {
    footnav
  },
  methods: {
    handleBottomChange(status) {
      //   this.bottomStatus = status;
    },
    // 点击一级菜单
    chooseNav: function(e) {
      console.log(e);
      // liAct
      this.chooseId = 0;
      this.controlId = this.currentId = e;
      this.pageNum = 1;
      // this._getList(this.controlId, this.pageNum)
    },
    // 二级菜单点击事件
    checkList: function(e) {
      // console.log(e)
      this.controlId = this.chooseId = e;
      this.pageNum = 1;
      this._getList(this.controlId, this.pageNum);
    },
    // 回去列表数据
    _getList: function(id, pageNum) {
      // let ClassifyParam = {
      //   "pageNum": pageNum,
      //   "categoryId": id,
      // }
      // getClassifyList(ClassifyParam).then((res) => {
      //   if (res.code == '0000') {
      //     this.classifyList = res.data
      //     // if(this.classifyList.pageInfo.pageCount > 1){
      //       this.canLoad = true
      //     // }
      //   } else {
      //     alert(res.msg);
      //   }
      // })
      console.log(this);
      let ClassifyParam = {};
      ClassifyParam.pageNum = pageNum;
      ClassifyParam.categoryId = id;
      getClassifyList(ClassifyParam).then(res => {
        console.log(res.data);
        this.classifyList = res.data.lists;
        //判断是否有下一页
        // 页数 * 条数 < 总条数
        if (res.data.currentIndex * 20 < res.data.total) {
          // alert(this.canLoad)
          this.canLoad = true;
          // alert(this.canLoad)
        }
      });
    },
    // 获取导航栏数据
    _getNav: function() {
      let ClassifyParam = {};
      getClassifyNav(ClassifyParam).then(res => {
        // console.log(res.data.wareCategory)
        if (res.code == "0000") {
          this.classify = res.data.wareCategory;
        } else {
          alert(res.msg);
        }
      });
    },
    // 添加购物车
    addCar(id) {
      let carInfo = {};
      carInfo.id = id;
      carInfo.num = "1";
      console.log(id);
      $addCar(carInfo);
    },
    // 上滑加载
    loadBottom() {
      console.log("loadBottom");
      let ClassifyParam = {
        pageNum: this.pageNum,
        categoryId: 11342 //this.controlId
        // categoryId: this.controlId //this.controlId
      };
      setTimeout(
        getClassifyList(ClassifyParam).then(
          res => {
            let timeout //这个声明应该放在哪里，想一下
            this.pageNum++;
            this.classifyList = this.classifyList.concat(res.data.lists);
            if (res.data.currentIndex * 20 >= res.data.total) {
              clearTimeout(timeout);
              this.bottomTip = true;
              timeout = setTimeout(() => {
                this.bottomTip = false;
              }, 1500);
              this.allLoaded = true;
              console.log("请求完毕的标志，到底了");
            }
            // 这是对齐页面的代码
            this.$refs.loadmore.onBottomLoaded();
          },
          err => {
            console.log(err);
          }
        ),
        1500
      );

      // this.$refs.loadmore.onBottomLoaded();
      // }
    }
  },
  created() {
    this.controlId = this.currentId;
    this._getList(this.controlId, this.pageNum);
    this._getNav();
    // for (let i = 1; i <= 5; i++) {
    //   this.list.push(i);
    // }
  },
  mounted() {
    this.wrapperHeight =
      document.documentElement.clientHeight -
      this.$refs.wrapper.getBoundingClientRect().top;
  }
};
</script>
<style>
html {
  background: #fff;
}

.leftNavDiv {
  width: 27%;
  position: fixed;
  left: 0px;
  top: 0px;
  background: #f6f6f6;
}

.leftNavDiv li {
  /* height: 40px; */
  line-height: 40px;
  /* border-bottom: 1px solid #e5e5e5; */
  /* border-right: 1px solid #e5e5e5; */
}
.addCarDiv {
  padding: 20px 0 0 20px;
  background: url("../../static/images/car.png") no-repeat;
  background-size: 20px 20px;
}
.addCar {
  display: inline-block;
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

.rightListDiv {
  /* width:100%; */
  margin-left: 27%;
  margin-bottom: 70px;
}

.rightList .rightListImg {
  width: 80px;
  height: 80px;
  margin-right: 3%;
}

.rightLiTxt {
  height: 100%;
  min-height: 90px;
  width: 100%;
  text-align: left;
  border-bottom: 1px solid #e5e5e5;
  padding: 0px 0px 10px 90px;
}

/* .allDiv {
    width: 100%;
    overflow: hidden;
  } */

.leftNavDiv {
  overflow-y: scroll;
  height: 100%;
}

.leftNav {
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
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  /* width: 94%; */
  width: 104%;
  background: #fff;
  border-radius: 5px;
}

.leftNav ul {
  display: none;
  text-align: left;
  list-style: disc;
  margin: 0 3% 0 25%;
  font-size: 12px;
}

.leftNav ul li:after {
  content: "";
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
/* .leftNav ul li:first-child {
    color: #f65;
  }
  .leftNav ul li:first-child .squareIcon {
    background: #f65;
  } */
.leftNav ul li.categoryAct {
  color: #f65;
}
.leftNav ul li.categoryAct .squareIcon {
  background: #f65;
}
page-loadmore-wrapper {
  overflow: auto;
  -webkit-overflow-scrolling: touch;
}
.moneyTxt {
  color: #f65;
}
.bottomDiv {
  padding: 20px 0;
  color: #999;
}
</style>
