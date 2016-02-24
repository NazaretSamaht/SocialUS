$(document).ready(function(){

	window.sr = ScrollReveal({ reset: true });
	sr.reveal( '.social, .us', { 
		duration: 2000,
		distance    : '10000px',
		origin      : 'bottom',
		viewFactor  : 1.0,
		container   : document.querySelector('.other-div')	
	});
	/*$(".social").hide();
	$(".us").hide();
	$(window).scroll(function(){
		if (document.getElementsByClassName("intro"))
        $(".social").show();
        $(".us").show();
	});*/
});