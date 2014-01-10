'use strict';

function goToByScroll(id){
	var $id = $('#'+id),
		offsetTop = $id.offset().top;
	$('html,body').animate({
			scrollTop: offsetTop
		},
		'slow');
}


function loadInfo() {
	var mercury = {
		mass: new Handlebars.SafeString('3,302×10<sup>23</sup> kg'),
		density: new Handlebars.SafeString('5,43 g/cm<sup>3</sup>'),
		surfaceArea: new Handlebars.SafeString('7,5 × 10<sup>7</sup> km<sup>2</sup>'),
		diameter: '',
		gravity: '',
		satellites: ''
	};
	var postTemplate = JST['app/templates/template.hbs'];
	var html = postTemplate(mercury);
	$( '#mercury .stats' ).append(html);
}

$( document ).ready(function() {
	var lastId = '';

	loadInfo();

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
});
