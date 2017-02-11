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

var formQuickBuy = '<form role="form" data-toggle="validator" id="windowProductDetailQuickBuy">'+
		'<p><strong>Введите имя и телефон для того, чтобы<br>наш менеджер связался с вами.</strong></p>'+
		'<div class="line flex">'+
			'<div class="widthL"><input type="text" class="form-control" placeholder="Имя" required><span class=" star colorff8338">&#9733;</span></div>'+
			'<div class="widthR"><input type="text" class="form-control" placeholder="Номер телефона" required><span class=" star colorff8338">&#9733;</span></div>'+
		'</div>'+
		'<div class="line">'+
			'<textarea class="form-control" rows="3" placeholder="Комментарий"></textarea>'+
		'</div>'+
		'<div class="instruction"><span class="colorff8338">&#9733;</span> — поля, обязательные для заполнения</div>'+
	'</form>'

var formQuickBuyBtn = '<a href="#" class="btn btn-primary productBtnBuy" role="button">'+
        //'<img src="lib/img/icon-24-shopping_basket.png" alt="">'+
        '<span>Оформить заказ</span>'+
    '</a>'

var quickBuy = function(e) {
	e.preventDefault()
	$('.windowProductDetailQuickBuy').addClass('open')
	$('.windowProductDetailQuickBuy .productDetailWrap').append( '<button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>' )
	$('.windowProductDetailQuickBuy .productDetailWrap').append( '<div class="productDetail"></div>' )
	$('.windowProductDetailQuickBuy .productDetail').append( '<div class="colLeft"></div>' )
	$('.windowProductDetailQuickBuy .productDetail').append( '<div class="colRight"></div>' )
	$('.windowProductDetailQuickBuy .colLeft').append( $('.imageMain').clone() )
	$('.windowProductDetailQuickBuy .colRight').append( $('.productName').clone() )
	$('.windowProductDetailQuickBuy .colRight').append( $('.productPrice').clone() )
	$('.windowProductDetailQuickBuy .colRight').append( formQuickBuy )
	$('.windowProductDetailQuickBuy .colRight').append( '<div class="lineAction flex"></div>' )
	$('.windowProductDetailQuickBuy .lineAction').append( $('.counterChoice').clone() )
	$('.windowProductDetailQuickBuy .lineAction').append( formQuickBuyBtn )
	$('.windowProductDetailQuickBuy button.close, .overlay').click(function(){
		$('.windowProductDetailQuickBuy').removeClass('open')
		$('.productDetailWrap').empty()
	})
	//$('#windowProductDetailQuickBuy').validator()
	return false
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
		  	$(this).val().length > 0 ? 
		  	$(this).selectpicker('setStyle', 'btn-primary', 'add') : 
		  	$(this).selectpicker('setStyle', 'btn-primary', 'remove');
		})

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
		})
		.trigger('change')

		if( $("#productGalleryImage").length ) {

	        $("#productGalleryImage").elevateZoom({
	            zoomType: 'inner', 
	            containLensZoom: true, 
	            gallery: 'productGalleryListThumbs',
	            cursor: 'pointer', 
	            galleryActiveClass: 'active'
	        })

	        $("#productGalleryImage").bind("click", function(e) {  
	            var ez =   $('#productGalleryImage').data('elevateZoom');
	            ez.closeAll();
	            $.fancybox( ez.getGalleryList() );
	            return false;
	        })

		    $(window).resize(function(e){
		        $('.zoomContainer').remove();
		        $("#productGalleryImage").elevateZoom({
		            zoomType: 'inner', 
		            containLensZoom: true, 
		            gallery: 'productGalleryListThumbs',
		            cursor: 'pointer', 
		            galleryActiveClass: 'active'
		        })
		    })
        
        }

		if( $(".pagination").length ) {

		    $('.pagination').pagination({
		        items: 1000,
		        itemsOnPage: 10,
		        cssStyle: 'light-theme',
		        prevText: 'назад',
		        nextText: 'вперед'
		    })
        
        }

		$('.row.catalog.owl-carousel').owlCarousel({
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

		$('.filterRefresh')
			.hover(function(){
				$('.filterRow').addClass('hover')
			},
			function(){
				$('.filterRow').removeClass('hover')
		})

		// $('.remove')
		// 	.hover(function(){
		// 		$(this).parents('tbody').addClass('hover')
		// 	},
		// 	function(){
		// 		$(this).parents('tbody').removeClass('hover')
		// })

		$('.productLinkQuickBuy').on('click', function(e){
			quickBuy(e)
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