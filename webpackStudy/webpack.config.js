const path = require('path');

// 导入生成预览页面的插件，得到一个构造函数
const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlugin = new HtmlWebpackPlugin({ // 创建插件的实例对象
    template: './src/index.html', // 指定要用到的模板文件
    filename: 'index.html' // 指定生成的文件的名称，该文件存在于内存中，在目录中不显示
});

const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: 'development', // mode 用来指定构建模式，可以设置为development(开发模式)，production(发布模式)
    // 设置入口文件路径
    entry: path.join(__dirname, './src/index.js'),
    // 设置出口文件
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'res.js'
    },
    devServer: {
        static: __dirname,//根目录，需要点击进入src才能查看
        // static: path.join(__dirname, 'src'),//可以直接访问到src页面，实现页面的实时查看。
        // host: "localhost", // 服务器域名
        // port: 8080, // 服务器端口号
        // open: true// 是否自动打开浏览器
    },
    plugins: [ htmlPlugin, new VueLoaderPlugin() ], // plugins 数组是 webpack 打包期间会用到的一些插件列表
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader'] },
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
            { test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/, 
                type: 'asset', // 这里使用asset相当于就是webpack4中使用了url-loader来处理
                parser: {
                    dataUrlCondition: {
                        maxSize: 16941 // 小于16941字节的图片会被base64处理
                    }
                }
            },
            // exclude 为排除项，表示 babel-loader 不需要处理 node_modules 中的 js 文件
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.vue$/, loader: 'vue-loader' }
        ]
    }
}