$(document).ready(function(){
	$("html").niceScroll();
	$(window).scrollTop(0);
	var spreveal= {
		duration: 1000,
		distance    : '10000px',
		origin      : 'top',
		viewFactor  : 0.2,
		reset: true
	};
	
	
	var win = $(window);
	  // definir mediente $pos la altura en píxeles desde el borde superior de la ventana del navegador y el elemento
	var pos = $('#scroll-reveal-container').offset().top;
	window.sr = ScrollReveal();

	win.scroll(function () {

		var elements=$('.social, .us');
	    if (win.scrollTop() >= pos){
	     	elements.removeClass('hidden').addClass('fixed');
	     	
	     	sr.reveal('.social, .us', spreveal);
	    }
	    else {

      		elements.addClass('hidden').removeClass('fixed');
     	}
   	});
	
});