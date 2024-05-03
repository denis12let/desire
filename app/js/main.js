$(function () {
  $('.header__btn').on('click', function () {
    $('.right-menu').removeClass('right-menu--close');
  });
  $('.right-menu__close').on('click', function () {
    $('.right-menu').addClass('right-menu--close');
  });
});
