/* Show the suspended user SMF. */
function showSuspendedUserSMF (identifier, smfText) {
    if (
        detectPageTemplates('home') ||
        detectPageTemplates('categories') ||
        detectPageTemplates('sections') ||
        detectPageTemplates('articles') ||
        detectPageTemplates('search') ||
        detectPageTemplates('request-new')
    ) {
        $('#section-smf .row').append(addSMF(identifier, smfText, 'danger'))
    }
}

/* Add the suspended user SMF. */
function addSuspendedUserSMF () {
    if (isUserSyncDone()) {
        if (isUnsuccessfulFL()) {
            showSuspendedUserSMF('excessive_disputes', 'It looks like your Upwork account is suspended. To get all the details, look for the email we sent you at the time your account was suspended. The email subject line should read: “Your Upwork account has been suspended.')
        } else if (isFinancialHold()) {
            showSuspendedUserSMF('client_accounting_auto', 'Financial transactions on your account have been limited due to a failed charge. To resume your account, please update your payment method and pay any outstanding balance. <a href="' + zdBrands.main.hc.url + '/articles/' + kbLinks.articles.financialHold + '">Read more</a>')
        }
    } else {
        setTimeout(function () {
            addSuspendedUserSMF()
        }, 1000)
    }
}

jQuery(function () {
    addSuspendedUserSMF()
})
