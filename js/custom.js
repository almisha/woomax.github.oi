$(function(){
// banner slider
$('.banner-text-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
  speed:1500,
});
// service-slider
$('.service-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
  speed:1500,
});

//filter
var containerEl = document.querySelector('.project-main');
var mixer = mixitup(containerEl);    
    
//video    
 $('.venobox').venobox(); 
    
// counter    
$('.counter').counterUp({
    delay: 10,
    time: 1000
});
    
// blog-slider
$('.blog-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  centerMode:true,
  centerPadding:false,
  speed:1500,
  autoplaySpeed: 2500,
  arrows:false,
});    
    
});