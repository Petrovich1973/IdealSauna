//import $ from 'jquery'

//import DocumentHeader from './modules/DocumentHeader'
//import Table from './modules/Table'

import WindowSize from './utils/WindowSize'


// let scrollTop = function() {
// 	$(document).scrollTop(0)
// }

var num = 88;
var margin;

$(window).bind('scroll', function () {
    if ($(window).scrollTop() > num) {
	  	$('.topBar').addClass('navbar-fixed-top')
	  	$('.mainBox').css('margin-top', margin) 
    } else {
		$('.topBar').removeClass('navbar-fixed-top')
		$('.mainBox').css('margin-top', '0px') 
    }
})

var heightTopBar = function() {
	WindowSize.width() < 992 ? margin = '88px' : margin = '44px';
}


$(document).ready(function() {

	w3IncludeHTML()
	//scrollTop()

	// $('.spinner').css({
	// 	height: WindowSize.height()
	// })

    setTimeout(function() {

		heightTopBar()

		$('.phone img').addClass('vibro')

		$('.layout').animate({
			opacity: 1
		}, 700)

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
		            items: 1,
					margin: 100
		        },
		        450:{
		            items: 2,
					slideBy: 2
		        },
		        660:{
		            items: 4,
					slideBy: 4
		        },
		        992:{
		            items: 3,
					slideBy: 3
		        },
		        1200:{
		            items: 4,
					slideBy: 4
		        }
		    }
		})

		$('.brands').owlCarousel({
			items: 7,
			loop: true,
			nav: true,
			margin: 0,
			stagePadding: 60,
			lazyLoad: false,
			smartSpeed: 300,
			slideBy: 1,
			merge: false,
			autoWidth: true,
			navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
		    responsive:{
		        0:{
		            items: 2
		        },
		        450:{
		            items: 4
		        },
		        660:{
		            items: 6
		        },
		        992:{
		            items: 5
		        },
		        1200:{
		            items: 7
		        }
		    }
		})

    }, 200)


	//DocumentHeader.init()
	//fetchData()
	WindowSize.init()


	$('body').on('click', '.topBar .nav li > a', function () {
		if( $(this).next().hasClass('sub') ) return false
    })

	$('a.smooth-scroll').on('click', function(e) {
	    var $anchor = $(this);
	    $('html, body').stop().animate({
	        scrollTop: $($anchor.attr('href')).offset().top
	    }, 500);
	    e.preventDefault();
	})

	console.debug('document.ready')

})

$(window).resize(function() {

	WindowSize.init()

	heightTopBar()

})