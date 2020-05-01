// MIME
// 
const http = require('http');
const fs = require('fs')
// 1. 前端 ajax 传输数据给后端，后端接收前端的数据
// 2. 响应数据给前端
// baidu.com -> 一段html -> 浏览器发现是html 渲染成了页面
const server = http.createServer(function(req, res) {
  res.writeHead(200,{
    'Content-Type':'text/html;charset=utf-8'
  })
  const file = fs.readFileSync('./ajax.html',{encoding:'utf8'})
  res.end(file);
})

server.listen(8082, function() {
  console.log('server is running http：127.0.0.1:8082')
})