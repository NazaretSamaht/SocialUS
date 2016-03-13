$(document).ready(function(){

	$("html").niceScroll({
		horizrailenabled: false
		//mousescrollstep: 475
	});
	$(window).scrollTop(0);
	var spreveal= {
		duration: 1000,
		distance    : '10000px',
		origin      : 'bottom',
		viewFactor  : 0.2,
		reset: true
	};
	
	
	var win = $(window);
	  // definir mediente $pos la altura en píxeles desde el borde superior de la ventana del navegador y el elemento
	var pos = $('#two').offset().top-1;

	window.sr = ScrollReveal();

	win.scroll(function () {

		var elements=$('.us');
	    if (win.scrollTop() >= pos){
	     	elements.removeClass('hidden').addClass('fixed');
	     	
	     	sr.reveal('.us', spreveal);
	    }
	    else {

      		elements.addClass('hidden').removeClass('fixed');
     	}
   	});

   $("#mosca").on("mouseenter", function(){
    	$(".menu-bar").animate({top:'60%', opacity:'1'},'slow').removeClass('hidden');
    });
   $("#parent-animation").on("mouseleave", function(){

    	$(".menu-bar").animate({top:'40%', opacity:'0'},'slow', function(){
    		$(this).addClass('hidden');
    	});
    });
    	/**/

   $('body').scrollspy({ target: '#navbar-example' })

   $('#navbar-example').on('activate.bs.scrollspy', function (event) {
  		$("#menu li a").removeClass('ra-800');/**/
	    $(event.target).find('a').addClass('ra-800');

	});


    $('#menu li a').click(function(){
   		var id = $(this).attr('href');
	    $('html, body').animate({
	        scrollTop: $(id).offset().top
	    }, 750);
	    return false;
	});

    
    
    /*$("#menu").on("mouseenter", function(){
    	$("#menu li a").fadeTo("slow", 1);
    });
    $("#menu").on("mouseleave", function(){
    	$("#menu li a").fadeTo("slow", 0.4);
    });*/

    
    
    
});