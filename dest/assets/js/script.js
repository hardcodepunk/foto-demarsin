var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    //document.getElementById("site-nav").style.transform = "translate(0,0)"
  } else {
    //document.getElementById("site-nav").style.transform = "translate(0,-115px)"
    document.getElementById("index-page__scroll-instruction").style.display = "none";
  }
  prevScrollpos = currentScrollPos;
}

var toggleNav = document.querySelector('.js-menu-toggle');
toggleNav.onclick = function() {
  document.querySelector('.body').classList.toggle('open-menu');
}

window.onload = function() {
  $(".flexslider").flexslider({
    directionNav: !1
  })
}
