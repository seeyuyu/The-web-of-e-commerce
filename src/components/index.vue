<template>
<div>
  <div class="navDiv">
    <div class="navLi" v-for="item in navli">
      <img :src="item.image">
      <span class="saleTips" v-if="item.tips">{{item.tips}}</span>
      <p>{{item.name}}</p>
    </div>
  </div>
  <div class="topNews">
    <div class="fl topTitle">多点头条</div>
    <a href="###" class="fl topCon text_ovh">推荐！快来围观啊优惠好多啊来围观啊优惠好多啊来围观啊优惠好多啊啊啊啊啊啊啊！</a>
  </div>
</div>
</template>
<style>
html{
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
.navLi img{
  width:50px;
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
.saleTips{
  padding: 0px 5px;
  border-radius: 10px;
  background: #f65;
  color:#fff;
  font-size:10px;
  position:absolute;
  top: 12px;
  left: 36%;
  height: 14px;
  line-height: 14px;
  overflow: hidden;
}
/* 头条 */
.topNews{
  padding: 10px;
  background: #fff;
  overflow: hidden;
  margin-bottom: 5px;
}
.topTitle{
  color:#f65;
  font-size: 16px;
  padding-right:15px;
  margin-right:15px;
  border-right:1px solid #e5e5e5;
}
.topCon{
  width: 74%;
}
</style>
<script>
export default {
  data() {
    return {
      navli:[
        {
          name:'测试',
          id:'1',
          tips:'8折特卖',
          image:'http://static1.xlzhao.com/frontend/images/navgroup1.png'
        },
        {
          name:'测试',
          id:'1',
          tips:'5折特卖',
          image:'http://static1.xlzhao.com/frontend/images/navgroup1.png'
        },
        {
          name:'测试',
          id:'1',
          tips:'',
          image:'http://static1.xlzhao.com/frontend/images/navgroup1.png'
        },
        {
          name:'测试',
          id:'1',
          tips:'',
          image:'http://static1.xlzhao.com/frontend/images/navgroup1.png'
        },
        {
          name:'测试',
          id:'1',
          tips:'',
          image:'http://static1.xlzhao.com/frontend/images/navgroup1.png'
        },
        {
          name:'测试',
          id:'1',
          tips:'',
          image:'http://static1.xlzhao.com/frontend/images/navgroup1.png'
        },
        {
          name:'测试',
          id:'1',
          tips:'',
          image:'http://static1.xlzhao.com/frontend/images/navgroup1.png'
        },
        {
          name:'测试',
          id:'1',
          tips:'',
          image:'http://static1.xlzhao.com/frontend/images/navgroup1.png'
        },
      ]
    };
  },
  created: function() {},
  methods: {}
};
</script>
