// on slider
$(document).ready(function(){
  $('.slider-comment').slick({
    dots: true,
    nextArrow: $('.prev'),
    prevArrow: $('.next'),
  });
});

$('.fade').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear'
});
