<template>
  <div class="siteAside-container">
      <template v-if="data">
      <Avatar :url="data.avatar" />
      <h1 class="titleName"> {{ data.siteTitle }}</h1>
      </template>
      <Menu />
      <Comtact v-if="data" />
    <p class="footer" v-if="data">
      {{ data.icp }}
    </p>
     
  </div>
</template>

<script>
import Avatar from "@/components/Avatar";
import Menu from "./Menu";
import Comtact from "./Comtact";
import { mapState } from "vuex";
export default {
    components:{
        Avatar, 
         Menu,
         Comtact,
    },
    // created(){
    //     this.$store.dispatch("setting/fetchSetting")
    // },
    computed: mapState("setting", ["data"]),  
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.siteAside-container{
    width: 100%;
    height:100%;
    background: @dark;
    padding: 20px 0;
    overflow-x: hidden;
    overflow-y: auto;
    box-sizing: border-box;
}
.avatar-container{
    margin: 0 auto;
}
.titleName{
    font-size: 18px;
    text-align: center;
    color: #fff;
}
.footer{
    text-align: center;
    font-size: 12px;
    color: #000;
}
</style>