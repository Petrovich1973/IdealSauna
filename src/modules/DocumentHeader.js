import $ from 'jquery'

var DocumentHeader = (function() {

    var obj = {
        id: 'DocumentHeader',
        className: 'DocumentHeader',
        wrap: $('<div></div>'),
        container: $('<div class="container"></div>')
    }
    var navbar = $('<nav class="navbar navbar-default" role="navigation"></nav>')
    var logo = $('<img src="lib/img/logo.png" class="logo" />')
    var phonesGroup = $('<div class="phonesGroup"><div class="phone">1111</div><div class="phone">2222</div></div>')

    return {
    	init() {
    		this.createDocumentHeader(obj)
    	},
        createDocumentHeader(data) {

            data.wrap.attr('id', data.id)
            data.wrap.attr('class', data.className)

            navbar.append(logo)
            navbar.append(phonesGroup)

            data.container.append(navbar)

            data.wrap.append(data.container)

            return $('#root').append(data.wrap)

        }
    }
}())

export default DocumentHeader