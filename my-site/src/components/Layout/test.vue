<template>
  <div class="test-container">
      <Layout>

            <div class="main">
                主区域，宽度占满剩余空间 主区域，宽度占满剩余空间 主区域，宽度占满剩余空间 主区域，宽度占满剩余空间
                 主区域，宽度占满剩余空间 主区域，宽度占满剩余空间 主区域，宽度占满剩余空间 主区域，宽度占满剩余空间
                  主区域，宽度占满剩余空间 主区域，宽度占满剩余空间 主区域，宽度占满剩余空间 主区域，宽度占满剩余空间
                   主区域，宽度占满剩余空间 主区域，宽度占满剩余空间v 主区域，宽度占满剩余空间 主区域，宽度占满剩余空间
                    主区域，宽度占满剩余空间 主区域，宽度占满剩余空间 主区域，宽度占满剩余空间 主区域，宽度占满剩余空间
                     主区域，宽度占满剩余空间 主区域，宽度占满剩余空间 主区域，宽度占满剩余空间 主区域，宽度占满剩余空间
                      主区域，宽度占满剩余空间 主区域，宽度占满剩余空间 主区域，宽度占满剩余空间 主区域，宽度占满剩余空间
            </div>

           <template #right>
               <div class="right">
                   右边栏区域，宽度适应内容，溢出隐藏
               </div>
          </template>
      </Layout>
  </div>
</template>

<script>
import Layout from "./";
export default {
    components:{
        Layout,
    }
}
</script>

<style scoped>
.test-container{
    width: 60%;
    height: 600px;
    margin: 0 auto;
    border: 1px solid;  
    white-space: nowrap; 
}
.left{
    width: 200px;
    height: 100%;
    background: forestgreen;
}
.main{
    width: 100%;
    height: 100%;
    background: fuchsia;
}
.right{
    width: 150px;
    height: 100%;
    background: lightblue;
}
</style>