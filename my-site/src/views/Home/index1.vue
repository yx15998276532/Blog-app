<template>
  <div class="home-container" ref="container" @wheel="handleWheel">
      <ul class="carousel-container" :style="{marginTop}"
      @transitionend = "handleTransitionEnd" >

          <li v-for="item in banners" :key="item.id" >
             <CarouselItem :carousel="item"/>
          </li>
      </ul>

      <div class="icon icon-up" v-show="index >= 1" @click="switchTo(index-1)">
      <Icon type="arrowUp" />
      </div>
                   
       <div class="icon icon-down" v-show ="index < banners.length-1"
        @click="switchTo(index+1)">
      <Icon type="arrowDown" />
      </div>
    
    <ul class="indicator">
        <li v-for="(item, i) in banners" :key="item.id" 
        :class=" {active:i === index}" @click="switchTo(i)"> 

        </li>
        </ul>
        <Loading v-if="isLoading"/>
  </div>
</template>

<style scoped lang="less">
@import "~@/styles/mixin.less";
@import "~@/styles/var.less";
.iconfont {
    font-size: 35px;
    }
 .home-container{
     width: 100%;
     height: 100%;
    position: relative;
    overflow: hidden;

    // //测试
    // width: 60%;
    // height: 40%;
    // border: 2px solid #008c8c;
    // margin: 100px auto;
    // overflow:visible;

       ul{
        margin: 0;
        padding: 0;
        list-style: none; 
      }
}
.carousel-container {
  width: 100%;
  height: 100%;
  transition: 500ms;
  li {
    width: 100%;
    height: 100%;
  }
}



.icon{
    .self-center();
    color: @gray;
    @gap:25px;
    font-size: 30px;
    cursor: pointer;
    transform: translateX(-50%);
    cursor: pointer;
        &.icon-up{
        top: @gap;
        animation: jump-up 2s infinite;
    }
        &.icon-down{
            top: auto;
            bottom: @gap;
            animation:jump-down 2s infinite;
        } 

@jump:10px;
@keyframes jump-up{
    0%{
        transfrom:translate(-50%, @jump);
    }
    50%{
        transform: translate(-50%, @jump);
    }
    100%{
        transform: translate(-50%,@jump);
    }
}
@keyframes jump-down{
    0%{
        transfrom:translate(-50%, @jump);
    }
    50%{
        transform: translate(-50%, @jump);
    }
    100%{
        transform: translate(-50%,@jump);
    }
}
}

.indicator{
    .self-center();
    left: auto;
    transform: translateY(-50%);
    right: 20px;
    li{
        width: 7px;
        height: 7px;
        border-radius: 50%;
        cursor: pointer;
        margin-bottom: 10px;
        box-sizing: border-box;
        border: 1px solid #fff;
        background: @words;
        &.active{
            background:#fff;
        }
    }
}

</style>


<script>
import {getBanners} from "@/api/banner";
import CarouselItem from "./Carouselitem";
import Icon from "@/components/Icon";

import Loading from "@/components/Loading";
export default {
    components:{
        CarouselItem,
        Icon,
        Loading,
    },
    data(){
        return {
            isLoading:true,
            banners:[],
            containerHeight:0, //整个容器gao度
            index:0,//当前显示的是第几张轮播图
            switching:false,  //是否正在切换中
        };
    },
     
    async created(){
        this.banners = await getBanners();
        this.isLoading = false;
     },
     
    mounted(){
        // console.log(this.$refs.container)
        this.containerHeight = this.$refs.container.clientHeight;//常规页面宽高度
        window.addEventListener("resize", this.handleResize);  //注册事件.当页面变化时，利用该事件
    },
    destroyed(){
        window.removeEventListener("resize", this.handleResize)
    },

    computed:{
        marginTop(){
            return -this.index * this.containerHeight + "px";
        }
    },
    methods:{
        //切换轮播图
        switchTo(i){
            this.index = i;
        },
        handleWheel(e){
            if(this.switching){
                return
            }
        
            if(e.deltaY < -90 && this.index > 0){
                  //往上滚动 
                  this.switching = true;   
                  this.index--;
            }else  if(e.deltaY > 90 && this.index < this.banners.length -1){
                  ///往下滚动 
                 this.switching = true;
                  this.index++;
            }
        },
        handleTransitionEnd(){
            this.switching = false;
            
        },
        handleResize(){
           this.containerHeight = this.$refs.container.clientHeight;
           
        }  
    }

}
</script>

