<template>
  <form class="data-form-container" @submit.prevent="handleSubmit"
   ref="form" id="data-form-container">
   <div class="form-item">
       <div class="input-area">                              
           <input type="text" placeholder="用户昵称" v-model="formData.nickname"
          maxlength="10"
           />
           <span class="tip">{{ formData.nickname.length }}/10</span>
       </div>
    <div class="error"> {{ error.nickname }} </div>
   </div>
   <div class="form-item">
       <div class="text-area">
           <textarea maxlength="300" v-model="formData.content"
           placeholder="输入内容">  </textarea>
        <span class="tip">{{ formData.content.length }}/300</span>
       </div>
       <div class="error"> {{ error.content  }} </div>
   </div>
   <div class="form-item">
       <div class="button-area" >
           <button :disabled="isSubmiting" >
             {{ isSubmiting ? "提交中..." : "提交" }}
           </button>
       </div>
   </div>
  </form>
</template>

<script>
export default {
     data(){
        return{
          formData:{
              nickname:"",
              content:"",
          } ,
          error:{
              nickname:"",
              content:"",
          } ,
          isSubmiting: false,
        };
    },
    methods:{
                      handleSubmit(){
                    this.error.nickname = this.formData.nickname ? "" : '请填写用户昵称';
                    this.error.content = this.formData.content ? "" : '请填写内容';
                    if(this.error.nickname || this.error.content){
                        return 
                    }
                    //正在提交，防止重复点击
                   this.isSubmiting = true;        
                   this.$emit("submit", this.formData, (successMag) => {
                     this.$showMessage({
                          content:successMag,
                          type:'success',
                          duration:1000,
                          container:this.$refs.form,
                            callback:() => {
                              this.isSubmiting = false;   //处理完之后返回
                           this.formData.nickname = "";
                           this.formData.content = " ";
       
                          }
                      })               
                    } );// 让父组件来处理事件
          }       
     }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.data-form-container{
    margin-bottom: 20px;
    overflow: hidden;
}
.form-item{
    margin-bottom: 8px;
}
.input-area{
    width: 50%;
    position: relative;
}
.text-area{
    position:relative;
}
input, textarea{
    outline: none;
    width: 100%;
    box-sizing: border-box;
    border: 1px dashed @gray;
    color: @words;
    font-size: 14px;
    border-radius: 4px;
    display:block ;
}
.tip{
    position: absolute;
    right: 5px;
    font-size: 12px;
    color: #b4b8bc;
    bottom: 5px;
}
input{
    height: 40px;
    padding: 0 15px;
}
textarea{
    height: 120px;
    padding: 8px 15px;
    resize: none;
}
.error{
    margin-top: 6px;
    color:@danger;
    font-size:"14px";
    height: 20px;
    line-height: 20px;
}
button{
    position: relative;
    color:#fff;
    border: none;
    cursor: pointer;
    outline: none;
    width: 100px;
    height: 34px;
    border-radius: 4px;
    background: @primary;
}
</style>