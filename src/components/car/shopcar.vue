<template>
  <div>
    <search></search>
    <commoditylist></commoditylist>
    <footnav :idx='2'></footnav>
  </div>
</template>
<style>
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
