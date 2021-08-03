<template>
<div class="project-container" v-loading="loading" ref="projectContainer">
<div class="project-item" v-for="item in data" :key="item.id">
<a :href="item.url ? item.url : `javascript:alert('该项目无法通过外网访问')`"
   :target="item.url ? '_blank' : '_self' " > 

  <img class="thumb" v-lazy="item.thumb">
  </a>

<div class="info">
  <h2>
    <a :href="item.url ? item.url : `javascript:alert('该项目无法通过外网访问')`"
    :target="item.url ? '_blank' : '_self' ">
  </a> 
  {{ item.name }}
  </h2>
  <a :href="item.github" class="github" v-if="item.github"
  target="_blank" >
    github
  </a>
  <p v-for="(desc,i) in item.description" :key="i"> 
    {{ desc }}
     </p>
</div>
</div>
<Empty v-if="data.length === 0 && !loading" />
</div> 
</template>

<script>
import  mainScroll  from "@/mixins/mainScroll.js"
import { mapState } from "vuex";
import Empty from "@/components/Empty";

export default {
      mixins: [mainScroll("projectContainer")],
      components:{
          Empty,
      },
      computed: mapState("project", ["loading", "data"]),
      created(){
        this.$store.dispatch("project/fetchProject");
      }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.project-container{
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
  overflow-y: auto;
  position: relative;
  scroll-behavior: smooth;
}
.project-item{
  transition:0.5s;
  display: flex;
  padding: 20px;
  margin-bottom: 20px;
  &:hover{
    box-shadow:-1px 1px 5px #000;
    transform:scale(1.01) translate(3px, -3px);
    color: inherit;
  }
  .thumb{
    width: 250px;
    min-height: 150px;
    border-radius: 5px;
    margin-right: 15px;
    flex: 0 0 auto;
    object-fit: cover;
  }
  .info{
    flex: 1 1 auto;
    line-height: 1.7;
    h2{
      margin: 0;
    }
  }
  .github{
    font-size: 14px;
    color:  @primary;
  }
}

</style>