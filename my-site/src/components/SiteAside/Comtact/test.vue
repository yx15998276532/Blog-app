<template>
  <div class="test-container">
      <Comtact />
      </div>
</template>

<script>
import Comtact from "./";
import "@/styles/global.less";
export default {
    components:{
        Comtact
    }
}
</script>

<style>
.test-container{
    width: 400px;
    height:400px;
    border: 1px solid;
    margin: 0 auto;  
    background: #333;
}
</style>