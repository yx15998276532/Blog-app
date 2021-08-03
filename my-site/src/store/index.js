import Vue from "vue";
import Vuex from "vuex";
import banner from "./banner";
import setting from "./setting";
import about from "./about";
import project from "./project";
if(!window.Vuex){  //windowli没有就用vuex,这样设置可以避免污染全局变量
    Vue.use(Vuex);
}
   

   export default  new Vuex.Store({
    modules:{
        banner,
        setting,
        about,
        project,
    },
    strict:true  //严格模式
})
 
