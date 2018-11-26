<template>
  <div class="footer">
    <div v-for='(item,index) in tabBarArr' class="footerLi fl">
      <img :src="index==idx?item.iconSelect:item.icon">
      <p>{{item.name}}</p>
    </div>
  </div>
</template>
<style>
.footer {
  display: flex;
  position: fixed;
  bottom: 0px;
  width: 100%;
  background: #fff;
}
.footerLi {
  flex: 1;
  padding-bottom: 3px;
  font-size:12px;
}
.footerLi img{
  width:30px;
  height: 30px;
}
</style>
<script>
export default {
  data() {
    return {
      props:['idx'],
      tabBarArr:[
        {
          name:'首页',
          path:'/',
          icon:'https://static1.xlzhao.com/frontend/images/icon_index1.png',
          iconSelect:'https://static1.xlzhao.com/frontend/images/icon_index1_active.png',
        },
        {
          name:'分类',
          path:'/classify',
          icon:'https://static1.xlzhao.com/frontend/images/icon_index2.png',
          iconSelect:'https://static1.xlzhao.com/frontend/images/icon_index2_active.png',
        },
        {
          name:'会员生活',
          path:'/life',
          icon:'https://static1.xlzhao.com/frontend/images/icon_index3.png',
          iconSelect:'https://static1.xlzhao.com/frontend/images/icon_index3_active.png',
        },
        {
          name:'购物车',
          path:'/car',
          icon:'https://static1.xlzhao.com/frontend/images/icon_index4.png',
          iconSelect:'https://static1.xlzhao.com/frontend/images/icon_index4_active.png',
        },
        {
          name:'我的',
          path:'/mine',
          icon:'https://static1.xlzhao.com/frontend/images/icon_index4.png',
          iconSelect:'https://static1.xlzhao.com/frontend/images/icon_index4_active.png',
        },
      ]
    };
  }
};
</script>
