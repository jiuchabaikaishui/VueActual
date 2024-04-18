// 处理文件
const path = require('path');
const fs = require('fs');
const data = require('./data.json');

// 生成图书id
function generateBookId() {
    return Math.max.apply(null, data.map(function(v) {
        return v.id;
    })) + 1;
}
// 写入数据
function writeData(res) {
    fs.writeFile(path.join(__dirname, 'data.json'), JSON.stringify(data), function(err) {
        if (err) {
            res.json({
                code: 500,
                err: err
            });
        } else {
            res.json({
                code: 200,
                msg: '成功'
            });
        }
    })
}
// 获取图书
function books(req, res) {
    res.send(data);
}
// 添加图书
function addBook(req, res) {
    const body = req.body;
    const book = {
        id: generateBookId(),
        name: body.name,
        date: + new Date()
    };
    console.log('book: ', book);
    data.unshift(book);
    writeData(res);
}
// 获取单个图书
function oneBook(req, res) {
    console.log('params: ', req.params);
    const id = req.params.id;
    let book = null;
    data.some(function(v, i, a) {
        console.log('v: ', v);
        if (v.id == id) {
            book = v;
            return true;
        }
    });
    console.log('book: ', book);
    res.json(book);
}
// 编辑图书
function editBook(req, res) {
    const body = req.body;
    console.log('body: ', body);
    data.some(function(v, i, a) {
        if (body.id == v.id) {
            v.name = body.name;
        }
    });
    writeData(res);
}
// 删除图书
function deleteBook(req, res) {
    console.log('params: ', req.params);
    const id = req.params.id;
    data.some((v, i, a) => {
        if (v.id == id) {
            data.splice(i, 1);
        }
    });
    writeData(res);
}
// 验证图书名是否存在
function checkName(req, res) {
    const name = req.params.name;
    let result = false;
    data.some(function(v, i, a) {
        result = name == v.name;
        return result;
    });
    res.json({
        status: result
    });
}

module.exports = {
    books,
    addBook,
    oneBook,
    editBook,
    deleteBook,
    checkName
}