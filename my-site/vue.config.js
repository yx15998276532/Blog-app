
//vue-cli配置文件
module.exports = {
    devServer:{
        proxy:{
            "/api":{
                target:"http://test.my-site.com",
            },
        },
    },
    configureWebpack: require("./webpack.config"),//导入webpack
    
      
};