const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // publicPath: '/',    // 启动页地址
  // outputDir: 'dist', // 打包的目录
  lintOnSave: false, // 在保存时校验格式
  // productionSourceMap: false, // 生产环境是否生成 SourceMap
  devServer: {
    host: 'localhost',  // 主页地址
    port: 8888,    // 端口号
    open: true, // 自动打开浏览器访问主页
    // proxy: null, // 设置代理
  }
})
