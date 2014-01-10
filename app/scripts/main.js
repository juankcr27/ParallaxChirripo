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
	var planets = [
			{
				id: 'sun',
				mass: new Handlebars.SafeString(''),
				density: new Handlebars.SafeString(''),
				surfaceArea: new Handlebars.SafeString(''),
				diameter: '',
				gravity: '',
				satellites: ''
			},
			{
				id: 'mercury',
				mass: new Handlebars.SafeString('3,302×10<sup>23</sup> kg'),
				density: new Handlebars.SafeString('5,43 g/cm<sup>3</sup>'),
				surfaceArea: new Handlebars.SafeString('7,5 × 10<sup>7</sup> km<sup>2</sup>'),
				diameter: '',
				gravity: '',
				satellites: ''
			},
			{
				id: 'venus',
				mass: new Handlebars.SafeString(''),
				density: new Handlebars.SafeString(''),
				surfaceArea: new Handlebars.SafeString(''),
				diameter: '',
				gravity: '',
				satellites: ''
			},
			{
				id: 'earth',
				mass: new Handlebars.SafeString(''),
				density: new Handlebars.SafeString(''),
				surfaceArea: new Handlebars.SafeString(''),
				diameter: '',
				gravity: '',
				satellites: ''
			},
			{
				id: 'mars',
				mass: new Handlebars.SafeString(''),
				density: new Handlebars.SafeString(''),
				surfaceArea: new Handlebars.SafeString(''),
				diameter: '',
				gravity: '',
				satellites: ''
			},
			{
				id: 'jupiter',
				mass: new Handlebars.SafeString(''),
				density: new Handlebars.SafeString(''),
				surfaceArea: new Handlebars.SafeString(''),
				diameter: '',
				gravity: '',
				satellites: ''
			},
			{
				id: 'saturn',
				mass: new Handlebars.SafeString(''),
				density: new Handlebars.SafeString(''),
				surfaceArea: new Handlebars.SafeString(''),
				diameter: '',
				gravity: '',
				satellites: ''
			},
			{
				id: 'uranus',
				mass: new Handlebars.SafeString(''),
				density: new Handlebars.SafeString(''),
				surfaceArea: new Handlebars.SafeString(''),
				diameter: '',
				gravity: '',
				satellites: ''
			},
			{
				id: 'neptune',
				mass: new Handlebars.SafeString(''),
				density: new Handlebars.SafeString(''),
				surfaceArea: new Handlebars.SafeString(''),
				diameter: '',
				gravity: '',
				satellites: ''
			},
			{
				id: 'pluto',
				mass: new Handlebars.SafeString(''),
				density: new Handlebars.SafeString(''),
				surfaceArea: new Handlebars.SafeString(''),
				diameter: '',
				gravity: '',
				satellites: ''
			},
		],
		i = 0,
		length = planets.length,
		templateFn,
		html,
		item;

	for(; i < length; i++) {
		item = planets[i];
		templateFn = JST['app/templates/template.hbs'];
		html = templateFn(item);
		$( '#' + item.id + ' .stats' ).append(html);
	}
}

function initializeImgOnClick() {
	$( '.img' ).click(function() {
		$(this)
			.parent()
			.find( '.stats' )
			.addClass( 'animation' );
	});
}

$( document ).ready(function() {
	var lastId = '';
	loadInfo();
	initializeImgOnClick();

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
