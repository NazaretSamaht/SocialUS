$(document).ready(function(){
	$(window).scrollTop(0);
	var spreveal={
		duration: 200,
		distance    : '10000px',
		origin      : 'bottom',
		viewFactor  : 0.2
	};
	
/*
	jQuery('.social, .us').addClass("fixed");
	$(".social").hide();
	$(".us").hide();
	$(window).scroll(function(){
		if (document.getElementsByClassName("intro"))
        $(".social").show();
        $(".us").show();
	});*/
	
	var win = $(window);
	  // definir mediente $pos la altura en píxeles desde el borde superior de la ventana del navegador y el elemento
	var pos = 800;
	window.sr = ScrollReveal();
	win.scroll(function () {
	    if (win.scrollTop() >= pos){
	     	$('.social, .us').removeClass('hidden');
	     	$('.social, .us').addClass('show');
	     	
			sr.reveal( '.social, .us', spreveal);
	    }
	    else {
      		$('.social, .us').removeClass('show');
      		$('.social, .us').addClass('hidden');
     	}
   	});
	
});