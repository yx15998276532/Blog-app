<template>
  <div class="test-container">
      <ImagesLoader  src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
  placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"  
  @load="handle"  />
  </div>
</template>

<script>
import ImagesLoader from "./"
export default {
    components:{
        ImagesLoader
    },
    methods:{
        handle(){
            console.log("加载已完成")
        }
    }
}
</script>

<style scoped lang="less">
.test-container{
    width: 500px;
    height: 400px;
    border: 1px solid;
    margin: 100px auto;
    
}

</style>