<template>
  <div>
    <div class="searchout"><search></search></div>
    <commoditylist></commoditylist>
    <footnav :idx='2'></footnav>
  </div>
</template>
<style scoped>
html{
  background: #f6f6f6;
}
.searchout{
  background: #fff;
  overflow: hidden;
}
.searchout .searchDiv {
    border-radius: 100px;
    margin: 5px 10px;
    background: #f6f6f6;
}
</style>
<script>
import footnav from "components/footnav/footnav"
import commoditylist from "components/car/commodity"
import search from "components/search/searchdiv"
export default {
  data(){
    return{

    }
  },
  components:{
    footnav,
    search,
    commoditylist
  },
}
</script>
