<template>
  <nav class="menu-container">
          <RouterLink  v-for="item in items"
            :exact="item.exact" 
            active-class="selected"
            exact-active-class=""
            :to="{name:item.name}" 
            :key="item.link">

              <div class="flex-item">
              <Icon :type="item.icon" />
              </div>
              <span>{{item.title}}</span>
          </RouterLink>
  </nav>
</template>
<script>
import Icon from "@/components/Icon";

export default {
        components:{
            Icon,
        },
        data(){
            return {
                items:[
                    {
                    name:"Home",
                    title:"首页",
                    icon:"home",
                     exact:true,
                    },
                    {
                    name:'Blog',
                    title:"文章",
                    icon:"blog",
                    exact:false,// 激活状态是否要精确匹配
                    },
                    {
                    name:'About',
                    title:"关于我",
                    icon:"about",
                    exact:true,
                    },
                    {
                    name:'Project',
                    title:"项目&效果",
                    icon:"code",
                    exact:true,
                    },
                     {
                    name:'Message',
                    title:'留言板',
                    icon:"chat",
                    exact:true,
                     }
                ]
            }
        }
}
</script>


<style scoped  lang="less">
 @import "~@/styles/var.less";
.iconfont {
  font-size: 18px;
}
.menu-container{
    list-style: none;
    margin: 24px 0;
a{    
    &.selected{
        background: darken(@words, 5%);
    }
    display: block;
    display: flex;
    height: 45px;
    padding: 0 40px;
    align-items: center;
    color:@gray;
    text-decoration: none;
     &:hover{
         color: #fff;
     }
     .flex-item{
    width: 40px;
}   
span{
       font-weight: 400;
          font-size: 18px;
}
}
}
</style>

