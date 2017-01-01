import $ from 'jquery'

var Table = (function() {
    return {
    	init(data) {
    		this.createTable(data)
    	},
        createTable(data) {
        	var table = $('<table class="table table-bordered table-striped"></table>')
        	var thead = $('<thead><tr><th>id</th><th>name</th><th>age</th><th>gender</th></tr></thead>')
        	table.append(thead)
        	var tbody = $('<tbody></tbody>')
        	table.append(tbody)

        	data.map( row => tbody.append('<tr>'+
        		'<td>' +row.id+ '</td>'+
        		'<td>' +row.name+ '</td>'+
        		'<td>' +row.age+ '</td>'+
        		'<td>' +row.gender+ '</td>'+
        		'</tr>') )
            return $('#root').append(table)
        }
    }
}())

export default Table