$(document).ready(function(){

// Main menu
  $('.menu_button').click(function() {
    $('#main_menu ul').slideToggle(250);
  });

  $(window).resize(function(){
    var wid = $(window).width();
    if (wid < 1056) $('#main_menu ul').css({display: 'none'});
    else $('#main_menu ul').css({display: 'block'});
  });

  $('#main_menu').on("click","a", function (event) {
    var wid = $(window).width();
    if (wid < 1056) $('#main_menu ul').slideUp(250);
      event.preventDefault();
      var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1200);
  });


// Footer menu
  $('.second_button').click(function() {
    $('.menu ul').slideToggle(250);
  });

  $(window).resize(function(){
    var wid = $(window).width();
    if (wid < 992) $('.menu ul').css({display: 'none'});
    else $('.menu ul').css({display: 'block'});
  });

  $('.menu').on("click","a", function (event) {
    var wid = $(window).width();
    if (wid < 992) $('.menu ul').slideUp(250);
      event.preventDefault();
      var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1200);
  });
});    