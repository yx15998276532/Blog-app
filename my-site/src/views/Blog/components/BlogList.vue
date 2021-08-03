<template>
  <div  v-loading="isLoading" class="blog-list-container" ref="mainContainer">
      <ul >
          <li v-for="item in data.rows" :key="item.id">
              <div class="thumb" v-if="item.thumb">
                  <RouterLink :to="{name:'BlogDetail', params:{ id : item.id },}"> 
                      
                      <img v-lazy = "item.thumb" :alt="item.title" :title="item.title"/>
                  
                  </RouterLink>
              </div>
              <div class="main">
                  <RouterLink :to="{name:'BlogDetail', params:{ id:item.id},}">
                      
                      <h2>{{ item.title }}</h2></RouterLink>
                  <div class="aside">
                        <span>日期:{{formatDate(item.createDate)  }}</span>
                        <span>浏览:{{item.scanNumber}}</span>
                        <span>评论{{item.commentNumber}}</span>
                        <RouterLink :to="{   name: 'CategoryBlog',
                        params:{
                            categoryId:item.category.id
                        },
                         }" >
                           
                            {{item.category.name}}
                            
                            </RouterLink>
                  </div>
                  <div class="desc">
                       {{item.description}}
                  </div>
              </div>
          </li>
      </ul> 
        <Empty v-if="data.rows.length === 0 && !isLoading" />
      <!-- 分页放到这里 --> 
          <Pager  
          v-if="data.total"  :current="routeInfo.page" 
          :limit="routeInfo.limit" :total="data.total" 
          :visibleNumber="10" @pageChange="handlePageChange" 
          />


  </div>
</template>
<script>
import Pager from "@/components/Pager";
import {  getBlogs } from "@/api/blog.js";
import  fetchData from "@/mixins/fetchData.js";
import { formatDate } from "@/utils";
import mainScroll from "@/mixins/mainScroll.js";
import Empty from "@/components/Empty";
export default {
    mixins:[fetchData({ total : 0, rows : [] }), mainScroll("mainContainer")],
    components:{ 
        Pager,
        Empty    
    },
   
    computed:{
        //获取路由信息
        routeInfo(){
            const categoryId = +this.$route.params.categoryId  || -1;
            const page = +this.$route.query.page || 1;
            const limit = +this.$route.query.limit || 10;
            return {
                categoryId,
                page,
                limit,
            }
        },
    },

    
    methods:{       
        formatDate,
         mainScroll,
         async fetchData(){
        return await getBlogs()
      this.isLoading = false;  
    },
    handlePageChange(newpage){
        const query = {page: newpage,limit:this.routeInfo.limit }
        //跳转到当前分类ID   当前页面容量  newPage页码
        if(this.routeInfo.categoryId === -1){
         this.$router.push({
             name:"Blog",
             query,
         })
        }else {
            this.$router.push({
                name:"CategoryBlog",
                query,
                params:{
                    categoryId:this.routeInfo.categoryId,
                },
                
            });
        };
        // console.log(newpage)
    },
      
      },
    watch:{
      async $route(){
        this.isLoading = true;
        // // 滚动高度为0
        this.$refs.mainContainer.scrollTop = 0;
        this.data = await this.fetchData();
    
        this.isLoading = false;
        }
    },    
}
              
</script>


  <style scoped lang="less">
@import "~@/styles/var.less";
.blog-list-container{
    line-height: 1.7;
    width: 100%;
    height: 100%;
    padding: 20px;
    box-sizing: border-box;
    position: relative;
    overflow-y: scroll;
    scroll-behavior: smooth;
     
ul{
    list-style: none;
    padding: 0;
    margin: 0;
}
li{
    display: flex;
    border-bottom: 1px solid @gray;
    padding: 15px 0;

.thumb{
    flex: 0 0 auto;
    img{
        display: block;
        max-width: 200px;
        border-radius: 5px;
    }
}
}
.main{
    flex: 1 1 auto;
     margin-left: 15px; 
     h2{
         margin: 0;
     } 
}
    .aside{
        font-size: 12px;
        color: @gray;
        span{
            margin-right: 15px;
        }
    }
    .desc{
        margin: 15px 0;
        overflow: hidden;
    }
}
</style>


