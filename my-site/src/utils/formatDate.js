export default function(timestamp, showTime = false ){
    const now = new Date(+timestamp);
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const date = now.getDate().toString().padStart(2,"0");
    
    let str = `${now.getFullYear()}-${month}-${date}`;

    if(showTime){
        const hour = now.getHours().toString().padStart(2,"0");
        const minute =now.getMinutes().toString().padStart(2,"0");
        const second = now.getSeconds().toString().padStart(2,"0");
        str += ` ${hour}:${minute}:${second}`
    }
    return str;
}