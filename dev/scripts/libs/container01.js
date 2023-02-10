$(document).ready(function () {
  $(".banner-slide").slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows: true,
    fade: true,
    responsive: [
      { breakpoint: 1024 },
      { breakpoint: 700 },
      { breakpoint: 300 },
    ],
    prevArrow: `<button type='button' class='slick-prev pull-left'><i class="fa-solid fa-chevron-left"></i></button>`,
    nextArrow: `<button type='button' class='slick-next pull-right'><i class="fa-solid fa-chevron-right"></i></button>`,
  });
});
