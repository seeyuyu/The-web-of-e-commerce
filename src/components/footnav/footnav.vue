<template>
  <div class="footer">
    <div v-for='(item,index) in tabBarArr' class="footerLi fl" :class='[item.cls,{select:index === idx}]' @click="$router.push(item.path)">
      <img :src="index==idx?item.iconSelect:item.icon">
      <p :class="index==idx?'selectColor':'normalColor'">{{item.name}}</p>
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
.selectColor{
  color:#222;
}
.normalColor{
  color:#999;
}
</style>
<script>
export default {
  props:['idx'],
  data() {
    return {
      tabBarArr:[
        {
          cls:'home',
          name:'首页',
          path:'/',
          icon:'http://static1.xlzhao.com/frontend/images/icon_index1.png',
          iconSelect:'http://static1.xlzhao.com/frontend/images/icon_index1_active.png',
        },
        {
          cls:'cle',
          name:'分类',
          path:'/classify',
          icon:'http://static1.xlzhao.com/frontend/images/icon_index2.png',
          iconSelect:'http://static1.xlzhao.com/frontend/images/icon_index2_active.png',
        },
        {
          cls:'car',
          name:'购物车',
          path:'/car',
          icon:'http://static1.xlzhao.com/frontend/images/icon_index4.png',
          iconSelect:'http://static1.xlzhao.com/frontend/images/icon_index4_active.png',
        },
        {
          cls:'mine',
          name:'我的',
          path:'/mine',
          icon:'http://static1.xlzhao.com/frontend/images/icon_index4.png',
          iconSelect:'http://static1.xlzhao.com/frontend/images/icon_index4_active.png',
        },
      ]
    };
  }
};
</script>
