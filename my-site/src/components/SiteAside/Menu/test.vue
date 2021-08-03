<template>
  <div class="test-container">
      <Menu></Menu>
  </div>
</template>

<script>
import Menu from "./";
import "@/styles/global.less";
export default {
    components:{
        Menu
    }
}
</script>

<style  lang="less" scoped>
.test-container{
    width: 400px;
    height:600px;
    border: 1px solid;
    margin: 200px auto;  
    background:#333;
}

</style>