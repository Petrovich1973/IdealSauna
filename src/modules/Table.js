import $ from 'jquery'

var Table = (function() {
    return {
    	init(data) {
    		this.createTable(data)
    	},
        createTable(data) {
        	var wraper = $('<ul></ul>')
        	data.map( row => wraper.append('<li><span>' +row.id+ '</span> <span>' +row.name+ '</span></li>') )
            return $('body').append(wraper)
        }
    }
}())

export default Table