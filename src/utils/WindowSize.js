import $ from 'jquery'

var WindowSize = (function() {
    return {
    	init(data) {
    		this.upadareWidthWindow()
    	},
        width() {
            var width = $(window).width()
            return width
        },
        height() {
            var height = $(window).height()
            return height
        },
        upadareWidthWindow() {
            console.log(this.width(), this.height())
        }
    }
}())

export default WindowSize