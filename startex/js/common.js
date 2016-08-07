$(document).ready(function(){
			$('#logo').owlCarousel({
				items:3,
				nav:false,
				loop:false,
				mouseDrag:false,
				responsiveClass:true,
				responsive:{
					239:{
						items:1,
						nav:true,
						loop:true
					},
					320:{
						items:2,
						nav:true,
						loop:true
					},
					480:{
						items:3,
						nav:true,
						loop:true
					},
					768:{
						items:4,
						nav:true,
						loop:true
					},
					992:{
						items:5,
						loop:false
					}
				}
			});
	});
$(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#top').fadeIn();
		} else {
			$('#top').fadeOut();
		}
		});
	$('#top').click(function() {
		$('body,html').animate({scrollTop:0},700);
		});
});