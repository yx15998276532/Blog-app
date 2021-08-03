
<template>
  <div class="test-container" >
    <div class="item" v-for="t in types" :key="t">

<Icon :type="t" />
            <label>  {{ t }} </label>
</div>
</div>

</template>

<script>
import Icon,{types} from "./"
export default {
  components:{
    Icon,
  },
  data(){
      return {
          types,
      }
  }
}
</script>

<style scoped>
/* .iconfont{
  font-size: 26px;
  color: red;
} */
.test-container{
    display: flex;
    justify-content: center;
    margin: 40px auto;
    width: 580px;
    flex-wrap: wrap;  
}
.item{
    margin: 10px;
    text-align: center;
    color: #888;

}

</style>