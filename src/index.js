import WindowSize from './utils/WindowSize'

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

function w3IncludeHTML(fn) {
  var z, i, a, file, xhttp;
  w3IncludeHTML.c = w3IncludeHTML.c || 0;
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    if (z[i].getAttribute("w3-include-html")) {
      ++w3IncludeHTML.c;
      a = z[i].cloneNode(false);
      file = z[i].getAttribute("w3-include-html");
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          a.removeAttribute("w3-include-html");
          a.innerHTML = this.responseText;
          z[i].parentNode.replaceChild(a, z[i]);
          --w3IncludeHTML.c;
          w3IncludeHTML(fn);
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  }
  if (fn && w3IncludeHTML.c==0) fn();
}


$(document).ready(function() {

	//w3IncludeHTML()
	w3IncludeHTML(function() {

		heightTopBar()

		$('.phone img').addClass('vibro')

		$('.layout').animate({
			opacity: 1
		}, 700)

		$('.selectpicker').on('change', function (e) {
			console.log($(this).val().length > 0)
		  	$(this).val().length > 0 ? $(this).selectpicker('setStyle', 'btn-primary', 'add') : $(this).selectpicker('setStyle', 'btn-primary', 'remove');
		});

		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		  $('.selectpicker').each(function() {
		  	$(this).selectpicker('mobile')
		  })		  
		}

		$('.selectpicker').each(function() {
			$(this).selectpicker({
				showTick: true,
				style: 'btn-default',
				size: 10,
				actionsBox: true,
				deselectAllText: 'Очистить',
				selectAllText: 'Выбрать все',
	    		noneSelectedText: 'Не выбрано',
	    		countSelectedText: 'Выбрано {0}'
			});
		});

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

	})


	WindowSize.init()


	$('body').on('click', '.topBar .nav li > a', function () {
		if( $(this).next().hasClass('sub') ) return false
    })

	$('body').on('click', 'a.smooth-scroll', function(e) {
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