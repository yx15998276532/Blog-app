
import Mock from "mockjs";

Mock.mock("/api/about", "get", {
    code: 0,
    msg: "",
    // data: "https://baidu.com",
    data:"http://strml.net/",
  });
  
//http://strml.net/


   