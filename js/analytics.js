(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-75042430-1', 'auto');
ga('send', 'pageview');

$(document).on('ready', function() {
	$('[data-ga-event]').on('click', function(event) {
		//event.preventDefault();
		var data = $(this).data('gaEvent');
		ga('send', 'event', data.category, data.event);
	});
});