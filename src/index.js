import $ from 'jquery'

import DocumentHeader from './modules/DocumentHeader'
import Table from './modules/Table'

import WindowSize from './utils/WindowSize'

let fetchData = function() {
	$('.spinner').show();
	$.getJSON('https://www.mockaroo.com/db665250/download?count=300&key=d0878e70', function(data) {
	  Table.init(data);
	  $('.spinner').hide();
	  console.log(data)
	})
};

let slideHideAnimate = function() {
	$('.spinner')
	.animate({
		opacity: 0,
		height: 0,
		padding: 0
	}, 1000, function() {
		$('.header .phone img').addClass('vibro')
	});
	//.slideUp(1000)
};

let scrollTop = function() {
	window.scrollTo( 0, 0 )
};

$(document).ready(function() {

	scrollTop();

	$('.spinner').css({
		height: WindowSize.height()
	});

	$('.layout').css({
		opacity: 1
	});
	//DocumentHeader.init()
	//fetchData()
	WindowSize.init();

	setTimeout(function() {
		slideHideAnimate()
	}, 1000)

});

$(window).resize(function() {

	WindowSize.init()

});