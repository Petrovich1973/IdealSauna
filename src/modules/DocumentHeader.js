import $ from "jquery"

let DocumentHeader = (function () {

    let obj = {
        id: 'DocumentHeader',
        className: 'DocumentHeader',
        wrap: $('<div></div>'),
        container: $('<div class="container"></div>')
    }
    let navbar = $('<nav class="navbar navbar-default" role="navigation"></nav>')
    let logo = $('<img src="lib/img/logo.png" class="logo" />')
    let phonesGroup = $('<div class="phonesGroup"><div class="phone">1111</div><div class="phone">2222</div></div>')

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