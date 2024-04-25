/* Update webinar link. */
function updateWebinarLink () {
    if (getCookie(upworkConfig.cookies.prefix + 'user-tab')) {
    	if (
    		getCookie(upworkConfig.cookies.prefix + 'user-tab') == 'freelancer' ||
    		getCookie(upworkConfig.cookies.prefix + 'user-tab') == 'agency' ||
    		getCookie(upworkConfig.cookies.prefix + 'user-tab') == 'agent'
    	) {
    		$('.btn-link-webinars').attr('href', 'https://www.upwork.com/community/events')
    	} else if (
    		getCookie(upworkConfig.cookies.prefix + 'user-tab') == 'client' ||
    		getCookie(upworkConfig.cookies.prefix + 'user-tab') == 'enterprise'
    	) {
    		$('.btn-link-webinars').attr('href', 'https://www.upwork.com/webinars')
    	}
    }
}

jQuery(function () {
    $('.navbar-mobile-close-btn').click(function () {
        $('.navbar-menu-mobile').removeClass('in')
    })

    if (
        detectPageTemplates('categories') ||
        detectPageTemplates('sections') ||
        detectPageTemplates('articles') ||
        detectPageTemplates('request-new') ||
        detectPageTemplates('requests-list') ||
        detectPageTemplates('request-single')
    ) {
    	$('.navbar-search-desktop-default').removeClass('navbar-search-desktop-default')
    }

    updateWebinarLink()
})
