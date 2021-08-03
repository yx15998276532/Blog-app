<template>
  <ul class="comtact-container"> 
     <li>
         <a :href="data.github">
           <div class="flex-item" >
              <Icon type="github"  />
              </div>
              <span>{{ data.githubName }}</span>
         </a>
    </li> 

      <li>
    <a :href="`mailto:${data.mail}`" >
           <div class="flex-item">
              <Icon type="mail"  />
              </div>
              <span>{{ data.mail }}</span>
         </a>
        
    </li>  

      <li>
  <a :href="`tencent://message/?Menu=yes&uin=${data.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`"> 
           <div class="flex-item">
              <Icon type="qq"  />
              </div>
              <span>{{ data.qq }}</span>
         </a> 
         <div class="pop">
           <img
          :src="data.qqQrCode"
          alt=""
        />
           </div>   
    </li>         
      <li>        
         <a>
           <div class="flex-item ">
              <Icon type="weixin" class="weixin" />
              </div>
              <span> {{ data.weixin }}</span>
         </a>
        <div class="pop">
           <img
          :src="data.weixinQrCode"
          alt=""
        />
           </div>
    </li> 
    </ul> 
</template>

<script>
import Icon from "@/components/Icon";
import { mapState } from "vuex";
export default {
    components:{
        Icon,
    },
  computed: mapState("setting", ["data"]),
}
</script>
<style scoped lang="less">
@import "~@/styles/var.less";
 @itemHeight: 30px;
.iconfont {
  font-size: 25px;
}
.comtact-container{
 padding: 20px;
 list-style: none;
  color: @gray;
  margin: 0;
}
li{
  height: @itemHeight;
  line-height: 30px;
  margin: 17px 0;
  position: relative;
    &:hover{
        .pop{
          transform: scaleY(1);
        }
    }
}
li:nth-child(1){
  margin-top: 0;
}
a{
  display: flex;
  cursor: pointer;
  align-items: center;
  font-size: 18px;
  text-decoration: none;
  color: @gray;
}
.flex-item {
  font-size: 26px;
  // width: 34px;
  & .weixin{
    font-size: 30px;
  }
}
span{
    text-indent: 1em;
  
  }
.pop{
  position: absolute;
  background: #fff;
  border: 1px solid;
  border-radius: 5px;
  left: 0px;
  bottom:@itemHeight + 15px ;
  transform:scaleY(0);
  transform-origin: center bottom;
  transition: 0.3s;
  img{
    width: 150px;
    height: 150px;
  }
  &::after{
    content:'';
    position: absolute;
    width: 8px;
    height: 8px;
    background: #fff;
    left: 50%;
    bottom: -4px;
    transform: translateX(-50%)rotate(45deg);
  }
}
</style>