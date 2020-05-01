// 请求 豆瓣的top250
const https = require('https');
const cheerio = require('cheerio')
const fs = require('fs')

// 在浏览器里输入一个 url， get请求
https.get('https://movie.douban.com/top250', function (res) {
  console.log(res);
  // res是分段返回的 要自己拼接
  let html = '';
  // 有数据产生的时候
  // 流：水管里面的水
  res.on('data', function (chunk) {
    // chunk 桶子
    html += chunk;
  })
  console.log('等着无聊的时候干点别的');
  // 数据返回完毕的时候 end
  res.on('end', function () {
    // console.log(html);
    const $ = cheerio.load(html);
    // 选中25个li
    // document.querySelector =>在整个html中查找

    // 循环li中的item
    let allFilms = [];
    $('li .item').each(function () {
      // this 指向循环时 当前这个电影
      // 当前这个电影下的title
      // 第二个参数this  this.querySelector =>在当前这个元素下查找
      const title = $('.title', this).text();
      const star = $('.rating_num', this).text();
      const pic = $('.pic img', this).attr('src');
      console.log(title, star, pic);
      // 存数据库
      // 存成一个 JSON文件 fs

      // 拼接成一个数组
      allFilms.push({
        title, star, pic
      })
    })
    // 每次调用最后一个参数都是异步回调函数
    fs.writeFile('./films.json', JSON.stringify(allFilms), function (err) {
      if (!err) {
        console.log('文件写入成功');
      }
    })
    // 图片下载一下
    downloadImage(allFilms);
  })

})

function downloadImage(allFilms) {
  for (let i = 0; i < allFilms.length; i++) {
    const picUrl = allFilms[i].pic;
    // 下载
    // 页面 url === html(普通文本) utf-8 浏览器帮你渲染了
    // 图片 url === 图片内容(binary) 浏览器也帮你渲染了
    // xx.png   双击打开了一个图片
    // 请求 -> 拿到内容
    // fs.writeFile('./xx.png', '内容')
    https.get(picUrl, function (res) {
      res.setEncoding('binary');
      let str = '';
      res.on('data', function (chunk) {
        str += chunk;
      })
      res.on('end', function () {
        fs.writeFile(`./images/${i}.png`, str, 'binary', function (err) {
          // console.log(err);
          if (!err) {
            console.log(`第${i}张图片下载成功`);
          }
        });
      })
    })
  }
}
