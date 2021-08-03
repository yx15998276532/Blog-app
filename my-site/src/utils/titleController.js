//网页标题控制
let routerTitle="", siteTitle = "";
  function setTitle(){
      if(!routerTitle && !siteTitle){
            document.title = "loading....";
      }else if(routerTitle && !siteTitle){
      document.title = routerTitle;
      }else if(!routerTitle && siteTitle){
          document.title = siteTitle;
      }else {
          document.title = `${siteTitle} - ${routerTitle}`;
      }
  }
  
export default {
    //设置路由标题
    setRouterTitle(title){
         //console.log("路由标题:", title);
         routerTitle=title;
        setTitle()
    },
    //设置网站标题
    setSiteTitle(title){
         //console.log("网站标题:", title);
         siteTitle = title;
        setTitle()
    }
    
}