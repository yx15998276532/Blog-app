<template>
  <ul class="data-list-container">
      <li v-for="item in list" :key="item.id"> 
          <Avatar :url="item.avatar" :size="50"/>
         <div class="data">
         <div class="nickname"> {{ item.nickname }}</div>
         <div class="createDate">{{ formatDate(item.createDate, true) }}</div>
          <div class="content">{{ item.content}} </div>
          
          </div>
      </li>
  </ul>

</template>

<script>
import Avatar from "@/components/Avatar";
import { formatDate } from "@/utils";
 export default {
    components:{
        Avatar,
    },
    props:{
        list:{
            type:Array,
            default:() => [],
        }
    },
    methods:{
        formatDate,
    }
   
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.data-list-container{
    list-style: none;
    margin: 0;
    padding: 0;
    li{
    display: flex;
     border: 1px solid lighten(@gray, 25%);
     padding: 15px 0;
     
    }
    .avatar-container{
        margin-right: 15px;
    }
    .nickname{
         font-weight: bold;
        margin-top: 10px;
    }
    .content{
        margin-top: 12px;
        font-size: 12px;
    }
    .data{
        flex: 1 1 auto;
        position: relative;
    }
    .createDate{
        position: absolute;
        top: 20px;
        right: 10px;
        color: @gray;
         font-size: 12px;
    }
   
}
</style>