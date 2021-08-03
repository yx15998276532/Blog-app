import loadingUrl from "@/assets/loading.svg";
import styles from "./loading.module.less";

function getImage(){
    const img = document.createElement("img");
      img.dataset.role = "loading";
      img.src=loadingUrl;
    img.className=styles.loading
      
    return img
}

function getImgUrl(el){
    const str = el.querySelector("img[data-role = loading]");
    // console.log("el",str)
 return str
};


export default function(el, binding){
    // console.log(el)
   const srcImg = getImgUrl(el);
//    console.log("1",srcImg)
    if(binding.value){
        // console.log("2",srcImg,binding.value)
        if(!srcImg){
            //添加img
        const img = getImage();
        el.appendChild(img)
        
        }    
    }else{
        //删除img
        if(srcImg){
    
     srcImg.remove();
        }  
   
}

}
