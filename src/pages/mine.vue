<template>
  <div>
    <div>
      <div class="fl"></div>
      <div class="fr"></div>
    </div>
    <div class="mineHead">
      <div class="mineHeadDiv">
        <div>Hello,你好</div>
        <router-link to="/login"><div class="loginBtn">登录/注册</div></router-link>
        <div class="ovh mineNavMine">
          <div class="fl mineNav">我的订单</div>
          <div class="fl mineNav">自由购</div>
          <div class="fl mineNav">会员专属码</div>
        </div>
      </div>
      <div class="marbot bgfff">
        <div class="textleft moneyTitle">我的资产</div>
        <div class="moneyDiv">
          <div class="moneyLi">
            <p>--</p>
            <p>余额</p>
          </div>
          <div class="moneyLi">
            <p>--</p>
            <p>积分</p>
          </div>
          <div class="moneyLi">
            <p>--</p>
            <p>卡包</p>
          </div>
          <div class="moneyLi">
            <p>--</p>
            <p>优惠券</p>
          </div>
        </div>
      </div>
      <div class="moneyDiv bgfff">
          <div class="moneyLi">
            <img src="" />
            <p>余额</p>
          </div>
          <div class="moneyLi">
            <img src="" />
            <p>积分</p>
          </div>
          <div class="moneyLi">
            <img src="" />
            <p>卡包</p>
          </div>
          <div class="moneyLi">
            <img src="" />
            <p>优惠券</p>
          </div>
          <div class="moneyLi">
            <img src="" />
            <p>优惠券</p>
          </div>
          <div class="moneyLi">
            <img src="" />
            <p>优惠券</p>
          </div>
          <div class="moneyLi">
            <img src="" />
            <p>优惠券</p>
          </div>
        </div>
    </div>
      <footnav :idx='3'></footnav>
  </div>
</template>
<style scoped>
.mineHead{
  /* padding: 40px 0; */
}
.mineHeadDiv{
  padding: 40px 0 0 0;
  background: #fff;
}
.loginBtn{
  color:#fff;
  padding:5px 25px;
  background: #f63;
  display:inline-block;
  border-radius: 100px;
  margin: 15px 0 25px 0;
  font-size: 14px;
}
.ovh{
  overflow: hidden;
}
.mineNavMine{
  display:flex;
}
.mineNav{
  flex:1;
}
.mineNav{
  background: url("http://static1.xlzhao.com/frontend/images/icon_index2_active.png") center top no-repeat;
  background-size: 30px 30px;
  padding-top:30px;
  padding-bottom:10px;
}
.moneyDiv{
  display:flex;
}
.moneyLi{
  flex:1;
  padding: 10px 0;
  line-height: 25px;
}
.textleft{
  text-align: left;
}
.mineNavMine{
  margin-bottom:10px;
}
.moneyTitle{
  height: 40px;
  line-height: 40px;
  padding: 0 15px;
  border-bottom: 1px solid #f6f6f6;
}
.marbot{
  margin-bottom:10px;
}
.bgfff{
  background: #fff;
}
</style>
<script>
import footnav from "components/footnav/footnav"
export default {
  data() {
    return {
      gologin:[
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
  },
  beforeCreate () {
      document.querySelector('body').setAttribute('style', 'background-color:#f6f6f6;')
    },

    beforeDestroy () {
      document.querySelector('body').removeAttribute('style')
    },
  components:{
    footnav
  },
  mounted: function() {
    if(!sessionStorage.getItem('token')){
      // 未登录
    }
  },
};
</script>

