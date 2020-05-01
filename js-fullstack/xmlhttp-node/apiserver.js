const http = require('http');
const fs =require('fs');

const server = http.createServer(function (req,res) {
  // https://www.baidu.com/
  // https://www.baidu.com/s?wd=asd
  // get方法把请求放在 URL内
  // post方法把请求放在 实体内
  if (req.url == '/') {
    // 同步读文件
    // const html = fs.readFileSync('./index.html','utf-8');
    // res.end(html);
    // http 状态码
    // 1xx:
    // 2xx:成功
    // 3xx:301/302 重定向
    // 4xx:401未授权 404找不到客户端
    // 5xx:服务器
    res.writeHead(200, {
      'Content-Type': 'text/html'
    })
    res.end(`<h2>123</h2>`)
  } else if (req.url === '/getPosts') {
    let posts = [
      {
        title:'js',
        star:1000
      },
      {
        title:'php',
        star:2000
      }
    ]
    let str = '';
    // 分段得到
    req.on('data', function(chunk) {
      str += chunk;
    })
    // 接收完毕 str能组装完成
    req.on('end', function () {
      console.log(JSON.parse(str));
    })
    
    res.end(JSON.stringify(posts))
  }
  // console.log(req, req.url);
  // if (req)
  // res.end('hello sercer');
})
server.listen(8081, function () {
  console.log('server is running 8081');
})