jQuery(function () {
    if (getQueryParam('action')) {
        if (
            getQueryParam('action') == 'get-in-touch'
        ) {
            if (isUserAnonymous()) {
                window.location.href = '/login?return_to=' + encodeURIComponent(window.location.href)
            }
        }
    }
})
