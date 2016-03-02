$(document).ready(function(){
	$("html").niceScroll();
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

		var elements=$('.social, .us, .menu-bar');
	    if (win.scrollTop() >= pos){
	     	elements.removeClass('hidden').addClass('fixed');
	     	
	     	sr.reveal('.social, .us, .menu-bar', spreveal);
	    }
	    else {

      		elements.addClass('hidden').removeClass('fixed');
     	}

   	});

   $('body').scrollspy({ target: '#navbar-example' })

   $('#navbar-example').on('activate.bs.scrollspy', function (event) {
  		$("#menu li i").removeClass('fa-circle').addClass('fa-circle-thin');
	    $(event.target).find('i').removeClass('fa-circle-thin').addClass('fa-circle');
	});

    $('#menu li a').click(function(){
   		var id = $(this).attr('href');
	    $('html, body').animate({
	        scrollTop: $(id).offset().top
	    }, 750);
	    return false;
	});

    $('#menu li a').tooltip();
    $("#menu").on("mouseenter", function(){
    	$("#menu li a").fadeTo("slow", 1);
    });
    $("#menu").on("mouseleave", function(){
    	$("#menu li a").fadeTo("slow", 0.4);
    })


   /*$('#menu li a').on("hover", function(){
   		$("#menu li i").removeClass('fa-circle-thin').addClass('fa-arrow-circle-left');
   });
	$('#menu li a').on("mouseenter", function(){
   		$(this).removeClass('fa-circle-thin').addClass('fa-arrow-circle-left');
    });
	$('#menu li a').on("mouseleave", function(){
   		$(this).removeClass('fa-arrow-circle-left').addClass('fa-circle-thin');
    });*/
});