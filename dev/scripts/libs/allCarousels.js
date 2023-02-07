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
    const carousels = $(".carousel");
    
    carousels.each(function() {
      if ($(this).is("#container04")) {
        console.log("container04 carousel")
        $(window).resize(function() {
            console.log("resizing")
            if ($(window).width() >= 640 ) {
                if ( !$(this).hasClass('slick-initialized'))
                    return $(this).slick(settings);

            } else {
                if ($(this).hasClass('slick-initialized'))
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