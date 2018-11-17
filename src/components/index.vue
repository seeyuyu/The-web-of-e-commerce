<template>
<div class="navDiv">
  <div class="navLi" v-for="item in navli">
    <img src="http://static1.xlzhao.com/frontend/images/navgroup1.png">
    <p>{{item.navName}}</p>
  </div>
</div>
</template>
<style>
.navDiv {
  display: -webkit-flex; /* Safari */
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
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
}
</style>
<script>
export default {
  data() {
    return {
      navli:[
        {
          navName:'测试',
          id:'1'
        },
        {
          navName:'点击',
          id:'2'
        },
        {
          navName:'就有就有',
          id:'3'
        },
        {
          navName:'哈哈哈哈',
          id:'4'
        },
        {
          navName:'测试',
          id:'1'
        },
        {
          navName:'恩呢呢',
          id:'1'
        },
        {
          navName:'测试',
          id:'1'
        },
        {
          navName:'测试',
          id:'1'
        }
      ]
    };
  },
  created: function() {},
  methods: {}
};
</script>
