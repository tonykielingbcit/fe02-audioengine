/**
 * Created by chase.marcum on 11/13/2014.
 * https://codepen.io/saif711/pen/bGVrGWq
 */
// https://codepen.io/f8cUsman/pen/NVxdGB

const settings = {
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    arrows: true
};

$(document).ready(function ($) { 
    const carousels = $(".carouselTK");
    
    carousels.each(function() {
      if ($(this).is(".carouselTK")) {
        console.log("container04 carousel")
        $(window).resize(function() {
            console.log("resizing")
            if ($(window).width() >= 640 ) {
              console.log("turning slick ON: ", $(".carouselTK").hasClass('slick-initialized'))
              if ( !$(".carouselTK").hasClass('slick-initialized')) {
                $(".carouselTK").slick(settings);
                return 
              }

            } else {
              if ($(".carouselTK").hasClass('slick-initialized'))
                $(this).slick('unslick');
                return
            } 

        });
      } 
      else if ($(this).is(".banner-slide")) {
        console.log(".banner-slide carousel")
        $(this).slick({
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            adaptiveHeight: true
        });
      }
      else {
        $(this).slick();
      }
    });
    
  }); // end of os-carousel.js