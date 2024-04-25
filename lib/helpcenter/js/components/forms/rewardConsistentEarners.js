jQuery(function () {
    if (getQueryParam('request') && getQueryParam('request') == 't_private_profile') {
        if (isUserAnonymous()) {
            window.location.href = '/login?return_to=' + encodeURI(window.location.href)
        } else {
            if (getCookie(upworkConfig.cookies.prefix + 'current-user-context') == 'freelancer') {
                if (! isUserSuspened()) {
                    let requesterEmail = HelpCenter.user.email
                    let requestSubject = 'Your request to set your Upwork profile to public'
                    let requestBody = []
                    requestBody.push(HelpCenter.user.name + ' requests profile be changed from private to public.\n\n')
                    requestBody.push('Important note: Don\’t respond to these emails, it will delay changing your profile visibility further.')

                    let requestTags = [getQueryParam('request')]
                    let customFields = [
                        {
                            'id': defaultForm.fields.reason,
                            'value': 'tag_cat_profile'
                        }
                    ]
                    let messageTitle = 'Upwork Customer Support'
                    let errorMessage = '<p>Our apologies. Something went wrong.</p><p>Your ticket was not submitted.</p>'
                    let successMessage = []
                    successMessage.push('<p>We received your request and we\’re working on it! We sent you an email to confirm and will email you again when your profile is public, which might take up to 4 hours.</p>')
                    successMessage.push('<p><strong>Important note: </strong>Don\’t respond to these emails, it will delay changing your profile visibility further. If you made this request by accident, you can always <a href="' + zdBrands.main.hc.url + '/articles/' + kbLinks.articles.privateProfile + '">switch your profile back to private </a>manually.</p>')
                    successMessage.push('<p>Thanks for using Upwork!</p>')

                    submitRequest(requesterEmail, requestSubject, requestBody.join(''), requestTags, customFields, messageTitle, errorMessage, successMessage.join(''), window.location.origin + window.location.pathname)
                } else {
                    window.location.href = zdBrands.main.hc.url
                }
            } else {
                window.location.href = zdBrands.main.hc.url
            }
        }
    }
})
