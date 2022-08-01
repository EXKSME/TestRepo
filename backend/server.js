// 引入 express 框架
const express = require('express')

// 创建网站服务器
const app = express()
const port = 3001
var timeNow = new Date()

app.get('/', (req, res) => {
    console.log("-> 已更新于"+timeNow)
    res.send("启动成功,这是后台服务器")
})

// 监听端口
app.listen(port)
console.log('-> 后台服务器已启动，项目启动在: localhost:'+port)