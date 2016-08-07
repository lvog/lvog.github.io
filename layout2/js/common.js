$(document).ready(function(){

// Go-top button
  $(function() {
    $(window).scroll(function() {
		  if($(this).scrollTop() != 0) {
			 $('.go-top').fadeIn();
		  } else {
			 $('.go-top').fadeOut();
		  }
	 });
  $('.go-top').click(function() {
		$('body,html').animate({scrollTop:0},700);
	 });
  });

// Main menu
  $('.main-menu-button').click(function() {
    $('#nav ul').slideToggle(250);
  });

  $(window).resize(function(){
    var wid = $(window).width();
    if (wid < 768) $('#nav ul').css({display: 'none'});
    else $('#nav ul').css({display: 'block'});
  });

  $('#nav').on("click","a", function (event) {
    var wid = $(window).width();
    if (wid < 768) $('#nav ul').slideUp(250);
      event.preventDefault();
      var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1200);
  });
     
// Carousel
  $('.owl-carousel').owlCarousel({
  	loop:true,
    responsiveClass:true,
    items:1,
    nav:true,
    navText: [
      "<i class='fa fa-chevron-left' aria-hidden='true'></i>",
      "<i class='fa fa-chevron-right' aria-hidden='true'></i>"
      ],
  });
});