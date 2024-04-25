if (detectPageTemplates('request-single')) {
    var requestID = urlPartsArray[4]
}

jQuery(function () {
    if (detectPageTemplates('request-single')) {
        /* Toggle request page sidebar. */
        $('body').on('click', '.request-sidebar h3', function () {
            if ($(this).find('span').hasClass('air-icon-arrow-expand')) {
                $(this).parents().eq(1).find('.request-details').show()
                $(this).parents().eq(1).find('hr').show()
                $('.request-attachments-sidebar').show()
                $(this).find('span').removeClass('air-icon-arrow-expand')
                $(this).find('span').addClass('air-icon-arrow-collapse')
            } else {
                $(this).parents().eq(1).find('.request-details').hide()
                $(this).parents().eq(1).find('hr').hide()
                $('.request-attachments-sidebar').hide()
                $(this).find('span').removeClass('air-icon-arrow-collapse')
                $(this).find('span').addClass('air-icon-arrow-expand')
            }
        })
    }

    if (
        detectPageTemplates('request-single') ||
        detectPageTemplates('requests-list')
    ) {
        $('.request-status-answered').text('Awaiting')
    }
})
