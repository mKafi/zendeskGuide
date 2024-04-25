/* Resizing Gat help card on screen resize or page load. */
function resizeGetHelpCard () {
    if ($('.border-right + div > .get-help-sidebar').length > 0) {
        let leftPanHeight = $('.border-right').outerHeight()
        $('.get-help-sidebar').height(leftPanHeight)
    }
}

jQuery(function () {
	$('.breadcrumbs li a[href="/hc/en-us"]').text('Home')

	setTimeout(function () {
        resizeGetHelpCard()
    }, 1000)

    $(window).resize(function () {
        resizeGetHelpCard()
    })
})
