$(document).ready(function(){
  $(window).load(function(){
      var oldSSB = $.fn.modal.Constructor.prototype.setScrollbar;
        $.fn.modal.Constructor.prototype.setScrollbar = function () 
        {
          oldSSB.apply(this);
          if(this.bodyIsOverflowing && this.scrollbarWidth) 
          {
            $('#main_menu_button').css('margin-right', this.scrollbarWidth);
          }       
        }
          var oldRSB = $.fn.modal.Constructor.prototype.resetScrollbar;
          $.fn.modal.Constructor.prototype.resetScrollbar = function () 
       {
          oldRSB.apply(this);
          $('#main_menu_button').css('margin-right', '');
       }
  });
});

document.getElementById('main_menu_button').addEventListener('click', checkNav);
window.addEventListener("keyup", function(e) {
  if (e.keyCode == 27) closeNav();
}, false);

function checkNav() {
  if (document.body.classList.contains('main_menu_button_active')) {
    closeNav();
  } else {
    openNav();
  }
}

function closeNav() {
  document.body.classList.remove('main_menu_button_active');
}

function openNav() {
  document.body.classList.add('main_menu_button_active');
};

$(document).ready(function(){
  $(".main_menu").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1200);
      closeNav();
  });
});

$(function() {
  $('.modal_form_button').click(function() {
    var formValid = true;
    $('input, textarea').each(function() {
      var formGroup = $(this).parents('.modal-group');
      if (this.checkValidity()) {
        formGroup.addClass('has-success').removeClass('has-error');
      } else {
        formGroup.addClass('has-error').removeClass('has-success');
        formValid = false;  
      }
    });
  })
});

  $('.newsletter_btn').click(function() {
    var formValid = true;
    $('input').each(function() {
      var formGroup = $(this).parents('.newsletter-group');
      if (this.checkValidity()) {
        formGroup.addClass('has-success').removeClass('has-error');
      } else {
        formGroup.addClass('has-error').removeClass('has-success');
        formValid = false;  
      }
    })
  });
  
  $('.contact_btn').click(function() {
    var formValid = true;
    $('input, textarea').each(function() {
      var formGroup = $(this).parents('.contact-group');
      if (this.checkValidity()) {
        formGroup.addClass('has-success').removeClass('has-error');
      } else {
        formGroup.addClass('has-error').removeClass('has-success');
        formValid = false;  
      }
    })
});
  
$(document).ready(function(){
  $(".arrow_down").click(function() {
    $("html, body").animate({ scrollTop: $("#header").height()+20 }, "slow");
    return false;
  });
  $(".button_to_works").click(function() {
    var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1200);
    return false;
  });
});

$(document).ready(function(){

  $('#reviewer_slider').owlCarousel({
    loop:false,
    navText: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            stagePadding:0,
            nav: false,
            dots: true         
        },
        560:{
            items:1,
            nav: true,
            dots: false,  
            stagePadding:20        
        }
    }
});
  $('#team_slider').owlCarousel({
    loop:false,
    nav:false,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        560:{
            items:2,
            stagePadding:30,
            margin: 30,  
          },
        768:{
            items:3,
            stagePadding:10,
            margin: 40,
            dots:true,           
        },
        1200:{
            items:4,
            mouseDrag: false,
            stagePadding:20,
            margin:60           
        }
    }
})
})

