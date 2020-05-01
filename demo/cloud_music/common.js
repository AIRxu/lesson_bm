window.onload = function () {
  const tabLinks = document.querySelectorAll('.tabbar a');
  tabLinks.forEach( function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();

    },false);
  })
}