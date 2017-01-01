import $ from 'jquery'

var WindowSize = (function() {
    var width = $(window).width()
    var height = $(window).height()
    return {
    	init(data) {
    		this.upadareWidthWindow()
    	},
        width() {
            return width
        },
        height() {
            return height
        },
        upadareWidthWindow() {
            console.log(width, height)
        }
    }
}())

export default WindowSize