<template>
  <div class="blog-comment-container">
    <MessageArea title="评论列表" 
    :subTitle="`(${data.total})`" 
    :list="data.rows" :isListLoading="isLoading"
    @submit="handleSubmit"
    />
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData.js";
import { getComments, postComment } from "@/api/blog.js";
export default {
  mixins:[fetchData({total:0, rows:[]})],
    components:{
        MessageArea,
    },
    data(){
      return{
        page:1,
        limit:10,
      }
    },
    created(){
        // window.fetchMore = this.fetchMore;
        this.$bus.$on("mainScroll", this.handleScorll);
    },
    destroyed(){
      this.$bus.$off("mainScroll", this.handleScorll);
    },

    computed:{
        hasMore(){
          return this.data.rows.length < this.data.total;
        },
    },
    methods:{
        //触发滚动条的到底部位置
        handleScorll(dom){
          // console.log(dom);
          if(this.isLoading || !dom){
            //目前正在加载更多
                return;
          }
         const range = 100; //定一个可以接受的范围，在这个范围内都算到达到底部
        const dec = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight);
        if(dec <= range){
          // console.log('加载更多');
          this.fetchMore();
        }      
        },
        async fetchData(){
           return await getComments(this.$route.params.id, this.page,this.limit)
        }, 
        //加载下一页
        async fetchMore(){
          if(!this.hasMore){
            //没有更多数据了
            return;
          }
            this.isLoading = true;
            this.page++;
            const resp = await this.fetchData();
              this.data.total = resp.total;
              this.data.rows = this.data.rows.concat(resp.rows);
              this.isLoading = false;

        } ,     
      async  handleSubmit(formData, callback){
       const resp = await  postComment({
              blogId: this.$route.params.id,
              ...formData
             });       
             this.data.rows.unshift(resp);
             this.data.total++;
             callback('评论成功');//告诉子组件。我这边处理完了，你继续
        }            
    }
}
</script>

<style scoped lang="less">
.blog-comment-container{
  margin: 30px 0;
}
</style>