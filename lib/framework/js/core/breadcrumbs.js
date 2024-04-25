jQuery(function () {
    $('.breadcrumbs-mobile .air-icon-arrow-prev').on('click', function () {
    	window.location = window.location.origin + $('.breadcrumbs-mobile .breadcrumbs li:visible').find('a').attr('href')
    })
})
