var lastScrollTop = 0;


$(window).scroll(function(event) {

   var st = $(this).scrollTop();

   if (st > lastScrollTop){
       // Down
       
       if (st > 50) {	       
	       $('.navbar-wrapper').css('position', 'absolute');
	       $('.navbar-wrapper').fadeOut();
       }

   } else {
      // Up
       $('.navbar-inverse').css('cssText', 'background-color: rgba(0,0,0,0.5) !important');
       $('.navbar-wrapper').css('position', 'fixed');
       $('.navbar-wrapper').fadeIn();
       
       // At very top
       if (st == 0) {
         $('.navbar-inverse').css('cssText', 'background-color: rgba(0,0,0,0) !important');
       }
   }

   lastScrollTop = st;
});