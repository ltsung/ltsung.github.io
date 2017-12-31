var lastScrollTop = 0;
var st = 0;

$( window ).resize(function() {

   if (st == 0 && $(window).width() > 768) {
     $('.navbar-inverse').css('cssText', 'background-color: rgba(0,0,0,0) !important');
   }
   
   if ($(window).width() <= 768) {
       $('.navbar-inverse').css('cssText', 'background-color: #1C1E37 !important');   
   }
});


$(window).scroll(function(event) {

   st = $(this).scrollTop();

   if (st > lastScrollTop){
       // Down
       
       if (st > 50) {	       
	       $('.navbar-wrapper').fadeOut();
	       
	       setTimeout(function() { 
               $('.navbar-wrapper').css('position', 'absolute');
	       }, 400);
       }
       
   } else {
      // Up

       $('.navbar li a').css('cssText', 'color: #FFF !important');

       $('.navbar-inverse').css('cssText', 'background-color: #1C1E37 !important');

     
       $('.navbar-wrapper').css('position', 'fixed');
       
       $('.navbar-wrapper').fadeIn();
       
       // At very top
       if (st == 0 && $(window).width() > 768) {
         $('.navbar-inverse').css('cssText', 'background-color: rgba(0,0,0,0) !important');
       }
   }

   lastScrollTop = st;
});

jQuery(document).ready(function($) {
 
    // create player
    $('#player1').mediaelementplayer({
        // add desired features in order
        // I've put the loop function second,
        features: ['playpause','loop','current','progress','duration','volume']
    }).attr("poster", "../images/joule.png");
 
});