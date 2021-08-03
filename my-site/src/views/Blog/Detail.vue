<template>
<Layout>
  <div class="main-detail-container" v-loading="isLoading" ref="mainContainer" >
  <BlogDetails :blog="data"  v-if="data" />
  <BlogComment v-if="!isLoading"/>
  </div>

  <template #right>
    <div class="right-container" v-loading="isLoading">
      <BlogToc :toc="data.toc" v-if="data"/>
      </div>
     </template>

  </Layout>
</template>

<script>
import fetchData from "@/mixins/fetchData";
import {getOneBlog} from "@/api/blog"
import Layout from "@/components/Layout";
import BlogDetails from "./components/BlogDetail";
import BlogToc from "./components/BlogToc";
import BlogComment from "./components/BlogComment";
import mainScroll from "@/mixins/mainScroll.js";
import { titleController } from "@/utils";
export default {
  components:{
    Layout,
    BlogToc,
    BlogDetails,
    BlogComment,
  },
  mixins:[fetchData(null), mainScroll("mainContainer")],
     methods:{
        async fetchData(){   
         const resp = await getOneBlog(this.$route.params.id);
        if(!resp){
          //文章不存在
          this.$router.push("/404");
          return;
        }
        titleController.setRouterTitle(resp.title);
         return resp;
        },
      
        },
                              
        updated(){
          const hash = location.hash;
          location.hash = "";
          setTimeout(()=>{
          location.hash = hash;
          },50)
        }
}


</script>

<style scoped lang="less">
.main-detail-container{
  box-sizing: border-box;
  height: 100%;
  position:relative;
  overflow-y: scroll;
  padding: 20px;
  width: 100%;
  scroll-behavior: smooth;
}
.right-container {
  width: 300px;
  height: 100%;
  overflow-y: auto;
  box-sizing: border-box;
  position: relative;
  padding: 20px;
}
</style>