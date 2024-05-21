$(function () {
  $('.header__btn').on('click', function () {
    $('.right-menu').removeClass('right-menu--close');
  });
  $('.right-menu__close').on('click', function () {
    $('.right-menu').addClass('right-menu--close');
  });
  $('.top__slider').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
  });
  var mixer = mixitup('.gallery__inner', {
    load: { filter: '.living-room' },
  });
});
