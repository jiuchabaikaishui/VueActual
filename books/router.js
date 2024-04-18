// 路由模块
let express = require('express');
let router = express.Router();
let handle = require('./handle');

// 获取图书
router.get('/books', handle.books);

// 添加图书
router.post('/books', handle.addBook);

// 获取单个图书
router.get('/books/:id', handle.oneBook);

// 编辑图书
router.put('/books', handle.editBook);

// 删除图书
router.delete('/books/:id', handle.deleteBook);

// 验证图书名是否存在
router.get('/books/check/:name', handle.checkName);

module.exports = router;