import eventBus from "@/eventBus";
import { debounce } from "@/utils";
import defaultGif from "@/assets/default.gif";

let imgs = []; //设置数组，往里面加进去图片;


function lazyImage(img){
    img.dom.src = defaultGif;//先暂时使用默认图片
 //console.log('加载了');
 //处理图片
 //该图片是否在视口范围内
 const clientHeight = document.documentElement.clientHeight;  //容器高度
 const  rect = img.dom.getBoundingClientRect();//获取视口返回值
 const height = rect.height || 150;  //取视口高度或者默认150
 if(rect.top >= -height && rect.top <= clientHeight){
       // 在视口范围内
    // const tempImg = new Image();
    // tempImg.onload = function() {
    //   // 当真实图片加载完成之后
    //   img.dom.src = img.src;
    // };
    // tempImg.src = img.src;
    img.dom.src = img.src;
    imgs = imgs.filter((i) => i !== img)
 }
};
//希望调用这个函数实现图片懒加载
function setImages(){
    for(const img of imgs){
        //处理该图片
        lazyImage(img);
    }
}

function debounceScroll(){
    setImages()
  
};

// setInterval(() =>{  //测试一下加进来的图片
//   console.log(imgs);
// }, 2000)

eventBus.$on('mainScroll', debounce(debounceScroll, 50))

export default {
   inserted(el, binding){  
       const img = {
        dom: el,
        src: binding.value,
       };
        imgs.push(img);
        // 立即处理它
        lazyImage(img);
   },
   unbind(el){
       imgs = imgs.filter((img) => img.dom !== el);
   }
}
