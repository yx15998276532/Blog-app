const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin; //只运行一次，第二次会报错

if(process.env.NODE_ENV === "production"){ //生产环境
    module.exports = {
        devtool: "none",
        plugins: [new BundleAnalyzerPlugin()],
        externals: { //表示第三方不用打包
            vue: "Vue",
            vuex: "Vuex",
            "vue-router": "VueRouter",
            axios: "axios",
          },
    }
}else {//开发环境
    module.exports = { };
}