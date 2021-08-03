<template>
 <div class="carouse-item-container" ref="container"
 @mousemove = "handleMouseMove"  @mouseleave="handleMouseleave"   >
    
    <div class="carousel-img"  :style=" imagePosition" ref="image">
        <ImagesLoader  @load=" this.showWords" 
         :src="carousel.bigImg " 
        :placeholder="carousel.midImg"/>
        </div>
       
        <div class="title" ref="title">{{ carousel.title }}</div>

        <div class="desc" ref="desc">{{ carousel.description }}</div>
     </div>
  
</template>


<script>
import ImagesLoader from "@/components/ImageLoader";

 export default {
       props:["carousel"],
    components:{
        ImagesLoader,   
    },
        data(){
            return{
            titleWidth:0,
            descWidth:0,
            containerSize:null,   //外层容器的尺寸
            innerSize:null,  //里层容器的尺寸
            mouseX:0,//鼠标横坐标
            mouseY:0  //  鼠标纵坐标
        };
        },
        computed:{
            //得到图片坐标
            imagePosition(){
                  if(!this.innerSize || !this.containerSize){
                return;
            }
             const extraWidth = this.innerSize.width - this.containerSize.width;//多出的宽度
             const extraHeight = this.innerSize.height- this.containerSize.height;//多出宽度
             const left = (-extraWidth / this.containerSize.width) * this.mouseX;
             const top = (-extraHeight / this.containerSize.height) * this.mouseY;
             return {
                 transform:`translate(${left}px, ${top}px)`,
            };
            },
            center(){
                return{
                    x:this.containerSize.width / 2,
                    y:this.containerSize.height / 2,
                };
            },
        },
        mounted(){
            this.titleWidth = this.$refs.title.clientWidth;
             this.descWidth = this.$refs.desc.clientWidth;
            //  console.log(this.titleWidth, this.descWidth)
            // this.showWords()
          this. setSize();
       
        this.mouseY = this.center.y;
        this.mouseX = this.center.x;

          window.addEventListener("resize", this.setSize);     
        },
        destroyed(){
            window.removeEventListener("resize", this.setSize)
        },          
        methods:{
            //调用该方法，显示文字
            showWords(){
                this.$refs.title.style.opacity = 1;
                this.$refs.title.style.width = 0;
                // 强制让浏览器渲染一次
                this.$refs.title.clientWidth;  //reflow
                this.$refs.title.style.transition ="1s";
                this.$refs.title.style.width = this.titleWidth + "px";

                //描述也是一样
                this.$refs.desc.style.opacity = 1;
                this.$refs.desc.style.width = 0;
                //强制渲染一次
                this.$refs.desc.clientWidth;
                this.$refs.desc.style.transition = "2s 1s";
                this.$refs.desc.style.width = this.descWidth + "px";
            },

            setSize(){
            this.containerSize = {         
                width: this.$refs.container.clientWidth,
                height:this.$refs.container.clientHeight,
            }
            this.innerSize = {
                width: this.$refs.image.clientWidth,
                height:this.$refs.image.clientHeight,
            };
            // console.log(this.containerSize, this.innerSize)
      },
      handleMouseMove(e){
          const rect = this.$refs.container.getBoundingClientRect();//拿到元素的矩形，getBoundingClientRect方法
          
        this.mouseX = e.clientX - rect.left;
         this.mouseY = e.clientY - rect.top;
         
      },
      handleMouseleave(e){
          this.mouseX = this.center.x;
          this.mouseY = this.center.y;
      }
        }
        
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.carouse-item-container{
    color:#fff;
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
}
.carousel-img{
 width: 110%;
 height: 110%;
 position: absolute;
transition: 0.3s;

}
.title, .desc{
    position: absolute;
    color: #fff;
    left: 30px;
    letter-spacing: 3px;
    text-shadow: 1px 0 0 rgba(0,0,0,0.5), -1px 0 0 rgba(0,0,0,0.5),
    0 1px 0 rgba(0,0,0,0.5),0 -1px 0 rgba(0,0,0,0.5);
    white-space: nowrap;
    overflow: hidden;
    opacity: 0;
}
.title{
    top:calc(50% - 40px);
    font-size: 2em;
}
.desc{
    top:calc(50% + 20px);
     font-size: 1.2em;
}

</style>