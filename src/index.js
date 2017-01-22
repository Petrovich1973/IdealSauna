//import $ from 'jquery'

//import DocumentHeader from './modules/DocumentHeader'
//import Table from './modules/Table'

import WindowSize from './utils/WindowSize'



let slideHideAnimate = function() {
	$('.spinner')
	.animate({
		opacity: 0,
		height: 0,
		padding: 0
	}, 1000, function() {
		$('.phone img').addClass('vibro')
	})
	//.slideUp(1000)
}

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

	$('.spinner').css({
		height: WindowSize.height()
	})

	$('.layout').css({
		opacity: 1
	})
	//DocumentHeader.init()
	//fetchData()
	WindowSize.init()

	setTimeout(function() {
		slideHideAnimate()
	}, 700)

	$('.topBar .nav li > a').click(function () {
		if( $(this).next().hasClass('sub') ) return false
    })

    $('[data-toggle="popover"]').popover()

	console.debug('document.ready')

})

$(window).resize(function() {

	WindowSize.init()

})