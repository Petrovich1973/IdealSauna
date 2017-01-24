//import $ from 'jquery'

//import DocumentHeader from './modules/DocumentHeader'
//import Table from './modules/Table'

import WindowSize from './utils/WindowSize'


let scrollTop = function() {
	$(document).scrollTop(0)
}

var num = 88;

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
	  	$('.topBar').addClass('navbar-fixed-top')
	  	$('.mainBox').css('margin-top', '44px') 
    } else {
		$('.topBar').removeClass('navbar-fixed-top')
		$('.mainBox').css('margin-top', '0px') 
    }
})


$(document).ready(function() {

	scrollTop()

	// $('.spinner').css({
	// 	height: WindowSize.height()
	// })	
	$('.phone img').addClass('vibro')
	$('.layout').css({
		opacity: 1
	})

	//DocumentHeader.init()
	//fetchData()
	WindowSize.init()

	$('.row.catalog').owlCarousel({
		items: 4,
		loop: true,
		nav: true,
		margin: 8,
		stagePadding: 6,
		lazyLoad: false,
		smartSpeed:300,
		slideBy: 4,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
	    responsive:{
	        0:{
	            items: 1
	        },
	        575:{
	            items: 3,
				slideBy: 3
	        },
	        1200:{
	            items: 4,
				slideBy: 4
	        }
	    }
	})

	$('.row.brands').owlCarousel({
		items: 7,
		loop: true,
		nav: true,
		margin: 8,
		stagePadding: 6,
		lazyLoad: false,
		smartSpeed:300,
		slideBy: 4,
		navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
	    responsive:{
	        0:{
	            items: 1
	        },
	        575:{
	            items: 4
	        },
	        1200:{
	            items: 7
	        }
	    }
	})


	$('.topBar .nav li > a').click(function () {
		if( $(this).next().hasClass('sub') ) return false
    })

	$('a.smooth-scroll').on('click', function(e) {
	    var $anchor = $(this);
	    $('html, body').stop().animate({
	        scrollTop: $($anchor.attr('href')).offset().top
	    }, 500);
	    e.preventDefault();
	});

    $('[data-toggle="popover"]').popover()

	console.debug('document.ready')

})

$(window).resize(function() {

	WindowSize.init()

})