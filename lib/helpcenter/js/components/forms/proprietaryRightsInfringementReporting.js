jQuery(function () {
    if (detectPageTemplates('request-new')) {
        if (getQueryParam('ticket_form_id') && getQueryParam('ticket_form_id') == 'proprietary-rights-infringement-reporting') {
            $('.page-header h2.heading-visitor').text('Proprietary Rights Infringement Reporting Procedures')
            $('title').text('Proprietary Rights Infringement Reporting Procedures')
            $('.breadcrumb').remove()
            $('.form-field').remove()
            $('.header-hint').remove()

            let output = []
            output.push('<ul class="nav nav-tabs nav-stacked-right" style="min-height:400px;">')
                output.push('<li>')
                    output.push('<a href="https://pact.ly/_iu17n">')
                        output.push('I am filing a Copyright Infringement Claim with Upwork')
                    output.push('</a>')
                output.push('</li>')
                output.push('<li>')
                    output.push('<a href="https://pact.ly/eAUOLg">')
                        output.push('I am filing a Counter-Notice to a Copyright Infringement Claim with Upwork')
                    output.push('</a>')
                output.push('</li>')
                output.push('<li>')
                    output.push('<a href="https://pact.ly/Owo4pO">')
                        output.push('I am filing a Trademark or Other Intellectual Property Right Infringement Notice')
                    output.push('</a>')
                output.push('</li>')
            output.push('</ul>')
            $('.request-form').append(output.join(''))

        }
    }
})
