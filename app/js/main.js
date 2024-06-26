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
  $('.blog__img-list').slick({
    prevArrow: '<button class="blog__btn-leftArr" type="button"></button>',
    nextArrow: '<button class="blog__btn-rightArr" type="button"></button>',
  });
  Fancybox.bind('[data-fancybox]', {});
  var mixer = mixitup('.gallery__inner', {
    load: { filter: '.living-room' },
  });
});
