<template>
<div class="blog-category-container" v-loading="isLoading">
 <h2>分类列表</h2>

 <RightList :list="list" @select="handkeSelect " />
</div>
 
</template>

<script>
import RightList from "./RightList";
import   { getBlogsTypes  } from "@/api/blog.js";
import fetchData from "@/mixins/fetchData.js";
export default {
    mixins:[fetchData([])],
    components:{
        RightList,
    },
    computed:{
        categoryId(){
            return +this.$route.params.categoryId || -1;
        },
        limit(){
            return +this.$route.query.limit || 10;
        },
        list(){
             const totalArticleCount = this.data.reduce(
                                (a, b) => a + b.articleCount,0)
                                                
            const result = [{name:"全部", id:-1, articleCount:totalArticleCount}, ...this.data ];
                           
            return result.map((it) =>({
                ...it,
                isSelect:it.id === this.categoryId,
                 aside:`${it.articleCount}篇`,
            }));
        }
    },
    methods:{
        async fetchData(){
     return await getBlogsTypes();   
    },
    handkeSelect (item){
        // console.log(item)
         const query = {page: 1,limit:this.limit }
        //跳转到当前分类ID   当前页面容量  newPage页码
        if(this.id === -1){
         this.$router.push({
             name:"Blog",
             query,
         })
        }else {
            this.$router.push({
                name:"CategoryBlog",
                query,
                params:{
                    categoryId:item.id
                }
              });
    }
    } 
    } 
}
</script>

<style lang="less" scoped>
.blog-category-container{
    width: 300px;
    height: 100%;
    padding: 20px;
    position: relative;
    overflow-y: auto;
      h2{
        letter-spacing: 4px;
      }
}
</style>

