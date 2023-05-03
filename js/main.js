window.addEventListener('load', function () {
  var $button = document.querySelector('#toggle-menu-button');
  var $menu = document.querySelector('.header-site-menu');
  $button.addEventListener('click', function () {
    if ($menu.classList.contains('is-show')) {
      $menu.classList.remove('is-show');
    }
    else {
      $menu.classList.add('is-show');
    }
  });
});


$(window).scroll(function () {
  var scrollAnimationElm = document.querySelectorAll('.scroll_up');
  var scrollAnimationFunc = function () {
    for (var i = 0; i < scrollAnimationElm.length; i++) {
      var triggerMargin = 150;
      if (window.innerHeight > scrollAnimationElm[i].getBoundingClientRect().top + triggerMargin) {
        scrollAnimationElm[i].classList.add('on');
      }
    }
  }
  window.addEventListener('load', scrollAnimationFunc);
  window.addEventListener('scroll', scrollAnimationFunc);
});

$(".qa dt").on("click", function () {
  $(this).parent().toggleClass("open");
  $(this).next().slideToggle();
});
