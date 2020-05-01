## 协议

前端 fe front end
后端 ae after end 
fe => http <=> rd（数据库里面存的东西）

fe:李宗盛 传给 后端
ae：关于李宗盛的歌 传给 前端

双方传输数据，都要遵守 HTTP 协议 （规则）
https://www.baidu.com/  浏览器：用http的方式去要资源
app也是用http

## ajax
ajax：无需重新加载整个网页的情况下，能够更新部分网页的技术
异步无刷新技术

## 同步
一行接着一行执行

## 异步
执行的顺序不是代码书写的顺序

## node
- js    chrome: v8 解释执行js
- 页面
- 网络

js 只在浏览器里面运行
v8 单独拿到服务端， node
<!-- 用node解释执行 js -->
node  index.js

1. 双击
- file:///C:/Users/Shinelon/Desktop/lesson_bm/js-fullstack/ajax-http/ajax.html
- file：协议
本地文件
2. liver-server
- http://127.0.0.1:8080/ajax.html
  http://localhost/ajax.html
- http 协议
127.0.0.1 IP 四个数字 每个都是（0 ~ 255）

- 域名和IP地址
https://www.baidu.com/ 方便记忆
数字ip 区别不同

端口存在的意义：
一台服务器（电脑）运行了很多东西
IP地址能够找到你的电脑
假设：
数据库占用 8060
提供搜索服务 占用 443

## http 规定
- 请求行
  - 方法:GET juejin.com?query=js
  - url:juejin.com?query=js
  - 版本:1.1
- 首(头)部
  - key:value 键值对
  - Content-Type  内容的类型

- 实体
  - 传输的具体数据