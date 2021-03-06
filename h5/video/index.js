// 获取dom结构的js  documen.querySelector('.speed') 类名用. id用#
const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');
const video = document.querySelector('.flex');

// console.log(video.offsetTop)
// offsetTop 获取一个dom元素到浏览器顶部的距离
// offsetheight用来获取某个 DOM元素自身的高度


function handlemove(e) {
  // console.log(e.pageY);
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  const min = 0.4;
  const max = 4;
  const height = Math.round(percent * 100) + '%';
  const playbackRate = percent * ( max - min) + min;
  video.playbackRate = playbackRate;

  // console.log(y,percent,min,max,playbackRate)

  // 在js里修改css里面bar的高度
  bar.style.height = height;
  // 修改html中bar里面的内容
  bar.textContent = playbackRate.toFixed(2) + 'x';
}

// 当鼠标在speed上发生mousemove事件的时候，handlemove函数就会执行
speed.addEventListener('mousemove',handlemove);



// const speed = document.querySelector('.speed')
// const bar = document.querySelector('.speed-bar')
// const video = document.querySelector('.flex')

// // console.log(video.offsetHeight)

// function handleMove(e) {
//   // console.log(e.pageY)
//   const y = e.pageY - this.offsetTop; // offsetTop获取某个dom结构到浏览器顶部的距离
//   const percent = y / this.offsetHeight; // offsetHeight用来获取某dom结构的自身高度
//   const min = 0.4;
//   const max = 4;
//   const height = Math.round(percent * 100) + '%';
//   const playbackRate = percent * ( max - min ) + min;

//   // console.log(y, percent, height, playbackRate)
//   bar.style.height = height
//   bar.textContent = playbackRate.toFixed(2) + 'x'
//   video.playbackRate = playbackRate
// }


// speed.addEventListener('mousemove', handleMove)