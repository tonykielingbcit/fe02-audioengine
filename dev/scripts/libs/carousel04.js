// this is the JQuery code for carousel in container 04
const container04Settings = {
  //size 1000px~
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      //size 801px~1000px
      breakpoint: 1000,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    // {
    //   //size 601px ~ 800px
    //   breakpoint: 900,
    //   settings: {
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     infinite: true,
    //   },
    // },
    {
      // size 641px ~ 700px
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    }
    // ,
    // { 
    //   breakpoint: 640, 
    //   settings: "unslick"
    // },
  ],
};


$(document).ready(function () {
  $(".carousel04").slick(container04Settings);

  $(window).resize(function() {
    // if ($(window).width() >= 640 ) {
      // "Note that $(window).width() is not consistent across browsers if the scrollbar is visible. I've found that using javascript media queries is much more reliable."" 
      // https://stackoverflow.com/questions/7715124/do-something-if-screen-width-is-less-than-960-px
    if (window.innerWidth >= 640) {
      // console.log("wwwwwwwwwwwwwwwwww", $(window).width());
      // this print demonstrates the width is not matching, as the so mentioned
      if (!$(".carousel04").hasClass('slick-initialized')) {
        return $(".carousel04").slick(container04Settings);
      }

    } else {
      if ($(".carousel04").hasClass('slick-initialized'))
        return $(".carousel04").slick('unslick');
    }
  });
});



// When the page is loaded initially
if (window.matchMedia("(max-width: 640px)").matches) {
  if ($(".carousel04").hasClass("slick-initialized")) {
    $(".carousel04").slick("unslick");
  }
}
