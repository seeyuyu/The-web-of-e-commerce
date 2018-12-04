<template>
  <div>
    <div>
      <div class="fl"></div>
      <div class="fr"></div>
    </div>
    <div class="mineHead">
      <div>Hello,你好</div>
      <div class="loginBtn">登录/注册</div>
      <div class="ovh mineNavMine">
        <div class="fl mineNav">我的订单</div>
        <div class="fl mineNav">自由购</div>
        <div class="fl mineNav">会员专属码</div>
      </div>
      <div class="marbot">
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
      <div class="moneyDiv">
          <div class="moneyLi">
            <img src="" />>
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
        </div>
    </div>
      <footnav :idx='3'></footnav>
  </div>
</template>
<style>
.mineHead{
  padding: 40px 0;
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
  background: url("https://static1.xlzhao.com/frontend/images/icon_index2_active.png") center top no-repeat;
  background-size: 30px 30px;
  padding-top:30px;
  padding-bottom:10px;
}
.moneyDiv{
  display:flex;
}
.moneyLi{
  flex:1;
  padding:10px 0;
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
</style>
<script>
export default {
  data() {
    return {};
  }
};
</script>

