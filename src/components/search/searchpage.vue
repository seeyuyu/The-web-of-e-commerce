<template>
  <div>
    <searchinput></searchinput>
    <inputhistory></inputhistory>
  </div>
</template>
<style>
html{
  background: #fff;
}
</style>
<script>
import searchinput from "components/search/searchinput"
import inputhistory from "components/search/inputhistory"
export default{
  data(){
    return{

    }
  },
  components:{
    searchinput,
    inputhistory
  }
}
</script>
