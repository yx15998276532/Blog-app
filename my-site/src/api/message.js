import request from "./request";

export async function genMessage( page = 1,limit = 10){//留言板列表消息
  return await request.get("/api/message", {
      params:{
          page,
          limit
      }
  });
}

export async function postMessage(magInfo){//提交消息
    return await request.post("/api/message", magInfo);
}
// getMessage().then((r) =>{
//     console.log(r)
// })