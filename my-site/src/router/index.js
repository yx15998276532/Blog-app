// import Vue from 'vue'

// import routers from "./routers"
// import VueRouter from 'vue-router';

// Vue.use(VueRouter); //使用一个vue插件
// const router = new VueRouter({  //路由实例
//     mode:"history",  //路由匹配规则
//     routers          //配置

// })

// export default router;

import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import { titleController } from "@/utils";
if(!window.VueRouter){ //使用传统的script导入，就不需要vueRouter导入，所以判断一下windouw里没有，就倒入，可避免污染
  Vue.use(VueRouter); // 使用一个vue插件
}


const router = new VueRouter({
  // 配置
  routes, // 路由匹配规则
  mode: "history",
});
  router.afterEach((to,from) =>{ //全局导航守卫
     //   console.log(to.meta.title);
              if(to.meta.title){
                // document.title = to.meta.title;
                titleController.setRouterTitle(to.meta.title);
              }
  });

export default router;