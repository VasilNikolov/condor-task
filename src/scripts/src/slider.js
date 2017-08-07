$(document).ready(function () {
   $('.slider-paragraph__content').slick({
       lazyLoad: 'ondemand',
       dots: true,
       infinite: true,
       speed: 300,
       slidesToShow: 1,
       adaptiveHeight: true,
       arrows: false
   });
});