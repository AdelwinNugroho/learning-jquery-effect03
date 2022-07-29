$(document).ready(function() {
	$('#adelwin').click(function(){
		$('.box').fadeIn();
	});

	$('#adelwin2').click(function() {
		$('.box').fadeOut();
	});

	$('#adelwin3').click(function() {
		$('.box').fadeToggle();
	});
})