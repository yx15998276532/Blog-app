import "./mock";
import Vue from 'vue'
import App from './App.vue'
import "@/styles/global.less"
import router from './router';

 import showMessage from "./utils/showMessage";
 import "./eventBus";
  Vue.prototype.$showMessage = showMessage;
 //注册全局指令
  import vLoading from "./directives/loading";
 Vue.directive('loading',vLoading);

 import vLazy from "./directives/lazy";
 Vue.directive('lazy',vLazy);
 import store from "./store";
store.dispatch("setting/fetchSetting");


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

//随便测试一下
// import * as blogApi from "./api/blog";

// blogApi.getBlogsTypes().then((r) =>{
//   console.log("博客分类", r)
// })

// blogApi.getBlogs(2, 10, 3).then((r) =>{
//   console.log("博客", r)
// })

// import * as blogApi from "./api/blog";

// blogApi.getOneBlog("hkjjj").then((r) =>{
//   console.log("个人博客",r)
// });

// blogApi.postComment({
//   nickname: "昵称",
// 	content: "评论内容，纯文本",
// 	blogId:	1223 ,  //评论的博客id
// }).then((r)=>{
//   console.log("提交评论",r)
// });


// blogApi.getComment("107236315").then((r)=>{
//   console.log('获取评论',r);
// })
// blogApi.getComments("2332").then((r) => {
//   console.log(r);
// });


//测试事件总线
// import eventBus from "./eventBus";

// function handle1(data){
// console.log('handle1',data);
// };
// function handle2(data){
// console.log('handle2', data)
// }

// eventBus.$on('event1', handle1);
// eventBus.$on('event1', handle2);
// eventBus.$on('event2', handle1);

// window.eventBus = eventBus;
// window.handle1 = handle1;
// window.handle2 = handle2;


//测试
// import { getSetting } from "./api/setting";

// getSetting().then((resp) =>{
//     console.log(resp);
// })

// import { getAbout } from "./api/about";

// getAbout().then((resp) =>{
//   console.log(resp)
// })

// import {getProject} from "./api/project"
// getProject().then((r)=>{
//  console.log(r)
// })
//    window.store = store;