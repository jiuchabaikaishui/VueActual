// 导入模块
const express = require('express');
// 创建服务器
const app = express();

// 配置跨域中间件
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
// 配置自定义请求头
app.use('/data-json', function(req, res, next) {
    res.header('Access-Control-Allow-Headers', 'mytoken');
    next();
});
app.use('/data-json1', function(req, res, next) {
    res.header('Access-Control-Allow-Headers', 'mytoken');
    next();
});

// 配置数据解析中间件
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 监听请求
app.get('/data1', function(req, res) {
    console.log('----data1----');
    res.send('data1');
});
app.get('/data2', function(req, res) {
    console.log('----data2----');
    res.send('data2');
});
app.get('/data3', function(req, res) {
    console.log('----data3----');
    res.send('data3');
});

app.get('/data', function(req, res) {
    console.log(req.query);
    res.send({
        method: 'get',
        ...req.query
    });
});
app.get('/data/:id', function(req, res) {
    console.log(req.params);
    res.send({
        method: 'get',
        ...req.params
    });
});
app.post('/data', function(req, res) {
    console.log(req.body);
    res.send({
        method: 'post',
        ...req.body
    });
});
app.delete('/data', function(req, res) {
    console.log(req.params);
    res.send({
        method: 'delete',
        ...req.query
    });
});
app.delete('/data/:id', function(req, res) {
    console.log(req.params);
    res.send({
        method: 'delete',
        ...req.params
    });
});
app.put('/data/:id', function(req, res) {
    console.log(req.params);
    console.log(req.body);
    res.send({
        method: 'put',
        id: req.params.id,
        ...req.body
    });
});

app.get('/data-json', (req, res) => {
    console.log(req.headers);
    res.json({
        uname: '赵六',
        age: 12
    });
});
app.get('/data-json1', (req, res) => {
    console.log(req.headers);
    res.json({
        uname: '赵六',
        age: 12
    });
});

// 调用 app.listen(端口号, 启动成功后的回调函数)，启动服务器
app.listen(80, function() {
    console.log('server running at http://127.0.0.1:80');
});