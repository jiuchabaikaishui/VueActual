// 导入 express
const express = require('express');

// 创建服务器
const app = express();

// 配置 cors 跨域中间件
const cors = require('cors');
app.use(cors());
// 配置解析 application/x-www-form-urlencoded 格式的表单数据的中间件
app.use(express.urlencoded({ extended: false }));
// 配置解析表单中的 JSON 格式的数据的中间件
app.use(express.json());

// 启动静态资源服务
app.use(express.static('public'))

// 配置路由
let router = require('./router');
app.use(router);

// 指定端口，启动服务器
app.listen(80, function(){
    console.log('server running at http://127.0.0.1:80');
});