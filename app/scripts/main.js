'use strict';

function goToByScroll(id){
	var r = /\d+/,
		$id = $("#"+id),
		offsetTop = $id.offset().top;
	$('html,body').animate({
			scrollTop: offsetTop// - $id.height() /2 + top
		},
		'slow');
}

$( document ).ready(function() {
	var lastId = '';


	$( 'nav a' ).each(function() {
		var id = $(this).data('id');
		$(this).click(function( e ) {
			e.preventDefault();
			if(lastId !== id) {
				lastId = id;
				goToByScroll(id);
			}
		});
	});

	$( window ).stellar({
		verticalScrolling: true,
		hideDistantElements: false
	});

	$(this).scrollTop(0);
});
