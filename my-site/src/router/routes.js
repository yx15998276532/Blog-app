import "nprogress/nprogress.css";
import { start, done, configure } from "nprogress";
import  NotFound from "@/views/NotFound.vue";

configure({
  trickleSpeed: 20,
  showSpinner: false,
});

function delay(duration){
  return new Promise((resolve)=>{
    setTimeout(()=>{
    resolve();
    }, duration)
  });
};

 function getRouterContainer(pageCompResolver){
 return  async () => {
  start();
 if(process.env.NODE_ENV === "development"){
    await delay(2000);
 }
const comp = await pageCompResolver();
done();
return comp;
}
 }


export default [

  { name: "Home", path: "/",
   component:getRouterContainer(() => import("@/views/Home")),meta:{ title: "首页"} },

  
  { name: "About", path: "/about", 
  component:getRouterContainer( () => import("@/views/About")), meta:{ title: "关于我" } },
  

  { name: "Blog", path: "/article",
   component:getRouterContainer(() => import( "@/views/Blog")), meta:{ title:"文章" } },
 

  { name:"CategoryBlog", path:"/article/cate/:categoryId", 
  component: getRouterContainer(() => import( "@/views/Blog")), meta:{ title:"文章" }}, 
 
  { name: "BlogDetail", path:"/article/:id", 
  component:getRouterContainer(() => import( "@/views/Blog/Detail")), meta:{ title:"文章详情"}},
  

  { name: "Project", path: "/project",
   component:getRouterContainer(() => import( "@/views/Project")), meta:{ title:"项目&效果" } },
  

  { name: "Message", path: "/message", 
  component:getRouterContainer(() => import( "@/views/Message")), meta:{ title:"留言板"} }, 
  
  { name: "NotFound",path:"*", component: NotFound,}
];

