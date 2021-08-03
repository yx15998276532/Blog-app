export default function (refValue){

    return {
        mounted(){
            this.$bus.$on('setMainScroll', this.handleSetMainScroll);
            this.$refs[refValue].addEventListener("scroll", this.handleScroll);
        },
        
        beforeDestroy(){
            this.$bus.$emit("mainScroll");//触发事件，当事件是undefined,表示dom元素已经不存在
            this.$refs[refValue].removeEventListener("scroll", this.handleScroll);
            this.$bus.$off('setMainScroll', this.handleSetMainScroll);
          },
          methods:{
            handleScroll(){
                this.$bus.$emit('mainScroll', this.$refs[refValue]);
           //console.log("滚动条滚动");
           },
            handleSetMainScroll(scrollTop){
             this.$refs[refValue].scrollTop = scrollTop;
           },
          }
      

    }
}