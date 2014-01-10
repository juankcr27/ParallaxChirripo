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
				mass: new Handlebars.SafeString('1.9891×10<sup>30</sup> kg'),
				density: new Handlebars.SafeString('1.408×10<sup>3</sup> kg/m<sup>3</sup>'),
				surfaceArea: new Handlebars.SafeString('6.0877×10<sup>12</sup> km<sup>2</sup>'),
				diameter: '1,392,684 km',
				gravity: new Handlebars.SafeString('274 m/s<sup>2</sup>'),
				satellites: '0'
			},
			{
				id: 'mercury',
				mass: new Handlebars.SafeString('3,302×10<sup>23</sup> kg'),
				density: new Handlebars.SafeString('5,43 g/cm<sup>3</sup>'),
				surfaceArea: new Handlebars.SafeString('7,5×10<sup>7</sup> km<sup>2</sup>'),
				diameter: '4.879,4 Km',
				gravity: new Handlebars.SafeString('3,7 m/s<sup>2</sup>'),
				satellites: '0'
			},
			{
				id: 'venus',
				mass: new Handlebars.SafeString('4,869×10<sup>24</sup> kg'),
				density: new Handlebars.SafeString('5,24 g/cm<sup>3</sup>'),
				surfaceArea: new Handlebars.SafeString('4,60×10<sup>8</sup> km<sup>2</sup>'),
				diameter: '12.103,6 km',
				gravity: new Handlebars.SafeString('8,87 m/s<sup>2</sup>'),
				satellites: '0'
			},
			{
				id: 'earth',
				mass: new Handlebars.SafeString('5,9736×10<sup>24</sup> kg'),
				density: new Handlebars.SafeString('5,515 g/cm<sup>3</sup>'),
				surfaceArea: new Handlebars.SafeString('510 072 000 km<sup>2</sup>'),
				diameter: '12 742 km',
				gravity: new Handlebars.SafeString('9,780327 m/s<sup>2</sup>'),
				satellites: new Handlebars.SafeString('1 natural(the moon)<br> + 8300 artificials')
			},
			{
				id: 'mars',
				mass: new Handlebars.SafeString('6,4185×10<sup>23</sup> kg'),
				density: new Handlebars.SafeString('3.9335 ± 0.0004 g/cm<sup>3</sup>'),
				surfaceArea: new Handlebars.SafeString('144 798 500 km<sup>2</sup>'),
				diameter: '6.794,4 km',
				gravity: new Handlebars.SafeString('3,711 m/s<sup>2</sup>'),
				satellites: '2'
			},
			{
				id: 'jupiter',
				mass: new Handlebars.SafeString('1,899×10<sup>27</sup> kg'),
				density: new Handlebars.SafeString('1,33 g/cm<sup>3</sup>'),
				surfaceArea: new Handlebars.SafeString('6,41×10<sup>10</sup> km<sup>2</sup>'),
				diameter: '142.984 km',
				gravity: new Handlebars.SafeString('24,79 m/s<sup>2</sup>'),
				satellites: '67 knowns'
			},
			{
				id: 'saturn',
				mass: new Handlebars.SafeString('5,688×10<sup>26</sup> kg'),
				density: new Handlebars.SafeString('690 kg/m<sup>3</sup>'),
				surfaceArea: new Handlebars.SafeString('4,38×10<sup>16</sup> m<sup>2</sup>'),
				diameter: new Handlebars.SafeString('1,20536·10<sup>8</sup> m'),
				gravity: new Handlebars.SafeString('10,44 m/s<sup>2</sup>'),
				satellites: '200 observed'
			},
			{
				id: 'uranus',
				mass: new Handlebars.SafeString('8.686×10<sup>25</sup> kg'),
				density: new Handlebars.SafeString('1.27 g/cm<sup>3</sup>'),
				surfaceArea: new Handlebars.SafeString('8.1156×10<sup>9</sup> km<sup>2</sup>'),
				diameter: '51.118 km',
				gravity: new Handlebars.SafeString('8.69 m/s<sup>2</sup>'),
				satellites: '27 knowns'
			},
			{
				id: 'neptune',
				mass: new Handlebars.SafeString('1,024×10<sup>26</sup> kg'),
				density: new Handlebars.SafeString('1,64 g/cm<sup>3</sup>'),
				surfaceArea: new Handlebars.SafeString('7,65×10<sup>9</sup> km<sup>2</sup>'),
				diameter: '49.572 km',
				gravity: new Handlebars.SafeString('11.15 m/s<sup>2</sup>'),
				satellites: '14 knowns'
			},
			{
				id: 'pluto',
				mass: new Handlebars.SafeString('1,25×10<sup>22</sup> kg'),
				density: new Handlebars.SafeString('1.750 kg/m<sup>3</sup>'),
				surfaceArea: new Handlebars.SafeString('17.000.000 km<sup>2</sup>'),
				diameter: '2.390 km',
				gravity: new Handlebars.SafeString('0,6 m/s<sup>2</sup>'),
				satellites: '5'
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
