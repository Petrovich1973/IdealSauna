import $ from 'jquery'

import Table from './modules/Table'

var fetchData = function() {
	$('spinner').show()
	$.getJSON('https://www.mockaroo.com/db665250/download?count=300&key=d0878e70',function(data) {
	  Table.init(data)
	  $('.spinner').hide()
	})
}

$(document).ready(function(){
	fetchData()
})