$(document).ready(function(){
  
  $('.main-menu-button').click(function() {
    $('#nav ul').slideToggle(250);
  });

  $(window).resize(function(){
    var wid = $(window).width();
    if (wid <= 768) $('#nav ul').css({display: 'none'});
    else $('#nav ul').css({display: 'block'});
  });

  $('#nav ul').on("click","a", function (event) {
    var wid = $(window).width();
    if (wid < 768) $('#nav ul').slideUp(250);
      event.preventDefault();
      var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1200);
  });


  $(".service-button").mouseover(function() {
   $(this).parent().addClass("hover");
  });
  $(".service-button").mouseout(function() {
   $(this).parent().removeClass("hover");
  });
  

  $(".owl-carousel").owlCarousel({
    loop:true,
    responsiveClass:true,
    items:1,
    nav:true,
    navText:false,
  });
});