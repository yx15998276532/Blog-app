<template>
<div class="message-container" ref="messageContainer">
 <MessageArea title="留言板" :subTitle="`(${data.total})`" 
 :isListLoading="isLoading" :list="data.rows" @submit="handleSubmit" />
</div>
 
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData.js";
import * as msgApi from "@/api/message.js";
import mainScroll from "@/mixins/mainScroll.js";

export default {
  mixins:[fetchData( {total: 0, rows: [] } ), mainScroll("messageContainer")],
      components:{
        MessageArea,
      },
      data(){
            return {
              page:1 ,
              limit: 10
            }
      },
      created(){
        this.$bus.$on("mainScroll",this.handleScroll);
      },
      destroyed(){
        this.$bus.$off("mainScroll", this.handleScroll);
      },
      computed:{
              hasMose(){
                return this.data.rows.length < this.data.total;
              }
      },
      methods:{
        async fetchData(){
          return await msgApi.genMessage(this.page, this.limit);
        },
        handleScroll(dom){
          //console.log(dom)
          if(this.isLoading || !dom){
            //可加载更多
            return;
          }
          const range = 100;//定一个可接受的范围，在这个范围内都算达到了底部
          const dec = Math.abs(dom.scrollTop + dom.clientHeight - dom.scrollHeight);
          if(dec <= range){
            this.fetchMore();
          }
        
        },
        //加载下一页
        async fetchMore(){
            if(!this.hasMose){
              //没有更多了
              return
            }
            this.isLoading = true;
            this.page++;
            const resp = await this.fetchData();
            this.data.total = resp.total;
            this.data.rows = this.data.rows.concat(resp.rows);
            this.isLoading = false;
        },
        async handleSubmit(data, callback){
          const resp = await msgApi.postMessage(data);
              this.data.rows.unshift(resp);
              callback("感谢您的留言");
        }
      }
}
</script>

<style >
.message-container{
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  box-sizing: border-box;
}
.message-area-container{
  width: 700px;
  padding: 25px 0;
  margin: 0 auto;
}
</style>