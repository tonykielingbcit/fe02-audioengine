$(document).ready(function (){
$(".sliderimage").slick({
     prevArrow: `<button type="button" class="slick-prev pull-left"><div class="arrow-prev"></div></button>`,
    nextArrow: `<button type="button" class="slick-next pull-right"><div class="arrow-next"></div></button>`,

    slidesToShow: 2,
    

responsive: [
{
    breakpoint: 768,
    settings: {
                slidesToShow: 3
              },

},
{
    breakpoint: 1024,
    settings: {
                slidesToShow: 4
              },
},
{
    breakpoint: 1420,
    settings: {
                slidesToShow: 5
              },
}

]

})


})