const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    //webpack-dev-server 相关配置
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        pathRewrite: { "^/api": "" }, //对于请求路径进行重定向以匹配到正确的地址
        changeOrigin: true, //本地就会虚拟一个服务器接收你的请求并代你发送该请求
        // 本地虚拟一个服务器用于发送你的请求 服务器和服务器之间没有跨域问题
      },
      //请求到/api/xxx 现在会被代理到 http://localhost:3000/xxx
    },
  },
});
