<template>
<div class="right-detail-container">
  <h2>目录</h2>
  <RightList :list="tocWintSelect" @select="handkeSelect " class="list"/>
</div>
 
</template>

<script>
import RightList from "./RightList";
import { debounce } from "@/utils";
export default {
components:{
  RightList,
},
props:{
  toc:{
    type:Array,
  }
},
data(){
  return{
    activeAnchor:"",  //假设默认选中
  }
},
computed:{
    tocWintSelect(){
      //根据toc属性以及activeAnchor得到带有isSelect属性的toc数组
      const getToc = (toc = [])=> {
         return toc.map( (t) =>({  //toc数组映射
           ...t,
           isSelect:t.anchor === this.activeAnchor,  //判断toc数组是不是和默认activeAnchor匹配
           children:getToc(t.children),
         }));
      }; 
     return getToc(this.toc)

    },
    //根据toc 得到它们对应的元素数组
  doms(){   //循环toc数据，获取id并添加到doms数组里
    const doms = [];

    const addToDoms = (toc) =>{
        for (const t of toc) {
          // console.log(t.anchor);
            doms.push( document.getElementById(t.anchor));
          if(t.children && t.children.length){
            addToDoms(t.children)
          }
        }
    }
      addToDoms(this.toc);
      return doms;
  }

},
created(){
// window.setSelect = this.setSelect;
  this.setSelectDebounce =  debounce(this.setSelect, 50);
   this.$bus.$on("mainScroll", this.setSelectDebounce );
},
destroyed(){
  this.$bus.$off("mainScroll", this.setSelectDebounce );
},
methods:{
  handkeSelect(item){
    // console.log(item);
    location.hash = item.anchor;   
  },

//设置activeAnchor为正确的值
setSelect(){
  //console.log(1);
  this.activeAnchor = ""; //由于后面要持续更新，先清空之前的状态
  const range = 200;
    for(const dom of this.doms){
      //看一下这个元素是不是被选中
      if(!dom){
          continue;
      }
      
      //得到元素离视口到顶部的距离
      const top = dom.getBoundingClientRect().top;
        if(top >= 0 && top <= range ){
          //在规定范围
          this.activeAnchor = dom.id;
          return
        }else if(top > range){
            //在规定范围下方
            return
        } else {
          // 在规定范围上方
           this.activeAnchor = dom.id;  //假设自己被激活的，然后继续看后面
        }
    }
  }
 }
}
</script>

<style lang="less" scoped>
// @import "~@/styles/var.less";
.right-detail-container{
  h2{
      letter-spacing: 2px;
       margin: 0;
  }
  .list{
    font-size: 1em;
     font-weight: bold;
  }
}
  
  
</style>