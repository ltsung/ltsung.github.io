var lastScrollTop = 0;
var st = 0;

$(".show-more div").on("click", function() {
    var $this = $(this);
    var $content = $this.parent().prev("div.content");
    var linkText = $this.text().toUpperCase();

    //if(linkText === "SHOW MORE"){
    //    linkText = "Show less";
    $content.switchClass("hideContent", "showContent", 400);
    $this.parent().css('opacity', 0);
    $this.css('display', 'none');
    //} else {
    //    linkText = "Show more";
    //    $content.switchClass("showContent", "hideContent", 400);
    //};

    $this.text(linkText);
});

$("#nav-up").click(function () {
   $("html, body").animate({scrollTop: 0}, 300);
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

$('#player1').mediaelementplayer({
    features: ['playpause','loop','current','progress','duration','volume']
}).attr("poster", "../images/joule.png");

setInterval(function() {
  document.getElementById("dot_dot_dot").play();
}, 1500);
