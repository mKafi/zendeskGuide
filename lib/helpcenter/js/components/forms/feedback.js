jQuery(function () {
    window.usabilla_live("hide")

    if (
        detectPageTemplates('articles') ||
        detectPageTemplates('request-new')
    ) {
        $('#btn-feedback').remove()
    }

    $('#btn-feedback').on('click', function () {
        window.usabilla_live('click')
    })

    $('.article-vote-down').on('click', function () {
        if ($(this).attr('aria-selected') == 'false') {
            window.usabilla_live('click')
        }
    })
})
