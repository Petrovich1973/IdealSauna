import $ from 'jquery'

let Table = (function () {
    return {
        init(data) {
            this.createTable(data)
        },
        createTable(data) {
            let table = $('<table class="table table-bordered table-striped"></table>')

            let thead = $('<thead><tr><th>id</th><th>name</th><th>age</th><th>gender</th></tr></thead>')
            table.append(thead)
            let tbody = $('<tbody></tbody>')
            table.append(tbody)

            data.map(row => tbody.append('<tr>' +
                '<td>' + row.id + '</td>' +
                '<td>' + row.name + '</td>' +
                '<td>' + row.age + '</td>' +
                '<td>' + row.gender + '</td>' +
                '</tr>'))
            return $('#root').append(table)
        }
    }
}())

export default Table