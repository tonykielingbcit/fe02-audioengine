$window = $(window);
$slick_slider = $(".carouselTK");
settings = {
  //size 1000px~
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      //size 801px~1000px
      breakpoint: 1000,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
      },
    },
    {
      //size 601px ~ 800px
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      // size 601px ~ 700px
      breakpoint: 700,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      },
    },
    { breakpoint: 600, settings: "unslick" },
  ],
};
$slick_slider.slick(settings);

// When the page is loaded initially
if (window.matchMedia("(max-width: 600px)").matches) {
  if ($slick_slider.hasClass("slick-initialized")) {
    $slick_slider.slick("unslick");
    //return;
  }
}

// Every time window size is changed
$window.on("resize", function () {
  if ($window.width() < 600) {
    if ($slick_slider.hasClass("slick-initialized")) {
      $slick_slider.slick("unslick");
      return;
    }
  }
  if (!$slick_slider.hasClass("slick-initialized"))
    return $slick_slider.slick(settings);
});
