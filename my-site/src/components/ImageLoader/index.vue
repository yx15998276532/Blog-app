<template>
  <div class="images-container">
      <img :src="placeholder" class="placeholder" v-if="!handleLoader">
      <img @load="handlelazy" :src="src" :style="{opacity:handleOpacity , transition:`${duration}ms`}">
  </div>
</template>

<script>

export default {
        props:{
            src:{
                type:String,
                required:true
            },
            placeholder:{
                type:String,
                required:true,
            },
            duration:{
                type:Number,
                default:500,
            }
        },
        data(){
            return {
                 originLoad:false,
                 handleLoader:false
            }      
        },
       computed:{
           handleOpacity(){
               return this.originLoad ? 1 : 0;
           }
       },
        methods:{   
            handlelazy(){
                 this.originLoad=true;
                setTimeout(() => {
                 this.handleLoader=true;
                 this.$emit("load");    
                }, this.duration);
            } 
        }
}
</script>

<style scoped lang="less">
@import "~@/styles/mixin.less";
.images-container{
   width: 100%;
   height: 100%;
   position: relative;
   overflow: hidden;
    img{
         .self-fill();
         object-fit: cover;
    }
}
.placeholder{
    filter: blur(1vw);
}
</style>