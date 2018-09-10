
$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
    loop: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    autoplay: true,
    autoplayTimeout: 10000,
    responsive:{
      0:{
          items:1
      }
    }

})
});

$(document).ready(function(){
      $('#scroller').fadeOut();   
      //fade in/out based on scrollTop value
      $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
          $('#scroller').fadeIn();
        } else  {
          $('#scroller').fadeOut();
        }
      });
     
      // scroll body to 0px on click
      $('#scroller').click(function () {
        $('body,html').animate({
          scrollTop: 0
        }, 400);
        return false;
      });
    });


