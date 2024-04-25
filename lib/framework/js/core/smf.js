/* Generic SMF. */
function genericSMF () {
    var output = []
    for (i in genericSMFText) {
        output.push(addSMF('generic_smf', genericSMFText[i], 'info'))
    }
    $('#section-smf .row').append(output.join(''))
}

/* Responsive SMF. */
function responsiveSMF () {
    var output = []
    for (i in responsiveSMFText) {
        if (isUserTagExists(responsiveSMFText[i].tag)) {
            output.push(addSMF(responsiveSMFText[i].identifier, responsiveSMFText[i].smf, 'info'))
        }
    }
    $('#section-smf .row').append(output.join(''))
}

/* add SMF. */
function addSMF (identifier, text, scope) {
    switch (scope) {
        case 'info':
            var alertScope = 'alert-info'
            break
        case 'success':
            var alertScope = 'alert-success'
            break
        case 'danger':
            var alertScope = 'alert-danger'
            break
        case 'warning':
            var alertScope = 'alert-warning'
            break
    }
    dataLayer.push({
        'event': 'smf_displayed',
        'smf_name': identifier
    })

    var output = []
    output.push('<div class="alert ' + alertScope + '" role="alert">')
        output.push('<span class="alert-icon"><span></span></span>')
        output.push('<span class="alert-message">')
            output.push(text)
        output.push('</span>')
        output.push('<button class="close" type="button" data-dismiss="alert" aria-label="Close">')
            output.push('<span class="air-icon-close" aria-hidden="true"></span>')
        output.push('</button>')
    output.push('</div>')

    $('#section-smf').show()

    return output.join('')
}

jQuery(function () {
    if (genericSMFText.length > 0) {
        if (
            detectPageTemplates('home') ||
            detectPageTemplates('categories') ||
            detectPageTemplates('sections') ||
            detectPageTemplates('articles') ||
            detectPageTemplates('search') ||
            detectPageTemplates('request-new') ||
            detectPageTemplates('requests-list') ||
            detectPageTemplates('request-single')
        ) {
            genericSMF()
        }
    }
    if (responsiveSMFText.length > 0) {
        if (
            detectPageTemplates('home') ||
            detectPageTemplates('categories') ||
            detectPageTemplates('sections') ||
            detectPageTemplates('articles') ||
            detectPageTemplates('search') ||
            detectPageTemplates('request-new') ||
            detectPageTemplates('requests-list') ||
            detectPageTemplates('request-single')
        ) {
            responsiveSMF()
        }
    }

    $('#btn-consent-close').on('click', function () {
        setCookieForDays(upworkConfig.cookies.prefix + 'cookies-consent', 'yes', 7)
        $('#alert-cookies-consent').remove()
    })
})
