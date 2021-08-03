<template>
<div v-show="show"  class="top-container" @click="handleClick">
  Top
</div>
</template>

<script>
export default {
        data(){
            return{
                show:false,
            }
        },
        created(){
            this.$bus.$on('mainScroll', this.handleScroll);  //创建事件名
        },
        destroyed(){
            this.$bus.$off('mainScroll', this.handleScroll);
        },
        methods:{
            handleScroll(dom){
                if(!dom){
                    this.show = false;
                    return;
                }
               this.show = dom.scrollTop >=500;
            },
            handleClick(){
                this.$bus.$emit('setMainScroll', 0);//点击时触发setMainScroll方法
            }
        }
}
</script>

<style scoped lang="less">
  @import "~@/styles/var.less";
  .top-container{
      background:@primary ;
      width: 50px;
      height: 50px;
    border-radius: 50%;
    cursor:pointer;
    z-index: 99;
    position: fixed;
    right: 25px;
    bottom: 30px;
    text-align: center;
    line-height: 50px;
    color: #ffffff;
    font-weight: bold;
  }
</style>