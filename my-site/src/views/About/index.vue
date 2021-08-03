<template>
<div class="about-centent-containe" v-loading="loading || !srcLoaded">
    <iframe   v-if="src"
      class="about-content"
      :src="src"
      frameborder="0"
      @load="srcLoaded = true"
    ></iframe>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
        data(){
              return {
      srcLoaded: false,
    };
        },
    created(){
           this.$store.dispatch("about/fetchAbout");
    },
    computed: mapState("about",{
             src: "data",
            loading: "laoding",
            
        }),
    
}
</script>

<style scoped lang="less">
.about-centent-container{
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    overflow-x:hidden;
    }
.about-content{
    position: absolute;
    width: 100%;
    height: 100%;
    display: block;
    box-sizing: border-box;
     
}
</style>