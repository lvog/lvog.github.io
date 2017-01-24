$(document).ready(function(){
  
// Main menu
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

// Slider
  $(".owl-carousel").owlCarousel({
    loop:true,
    responsiveClass:true,
    items:1,
    nav:true,
    navText:false,
  });
});

// Hover service item
  $(".service-button").mouseover(function() {
   $(this).parent().addClass("hover");
  });
  $(".service-button").mouseout(function() {
   $(this).parent().removeClass("hover");
  });

// Check message
  function validateMessage(input) {
     if (input.value.length <= 2) {
      input.setCustomValidity("Cообщение должно быть больше чем 2 символа");   
     }
     else {
      input.setCustomValidity("");
     }
}
  
