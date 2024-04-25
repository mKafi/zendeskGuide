jQuery(function () {
    if (detectPageTemplates('requests-list')) {

        /*  Filter request(s) by status. */
        $('body').on('click', '#request-status-dropdown .dropdown-menu > li > a', function () {
            let searchlocation = window.location.href.split('?')[0]
            let queryValue = ($('#request-query-text').val() === undefined) ? '' : $('#request-query-text').val()
            let statusValue = $(this).attr('data-value')
            let queryString = setQueryParam(searchlocation, 'query', $('#request-query-text').val())
            queryString = setQueryParam(queryString, 'status', statusValue)
            window.location = queryString
        })

        if (getQueryParam('status')) {
            switch(getQueryParam('status')) {
                case '':
                    customSelectHandler('request-status', '', 'Any')
                    break
                case 'open':
                    customSelectHandler('request-status', 'open', 'Open')
                    break
                case 'answered':
                    customSelectHandler('request-status', 'answered', 'Awaiting')
                    break
                case 'solved':
                    customSelectHandler('request-status', 'solved', 'Solved')
                    break
            }

        }

        if ($('.requests-sort-symbol').length > 0) {
            $('.requests-sort-symbol').parent().css({'color': colorPallate.green.upGreen})
        }

        /* Handle click search addon button. */
        $('.input-group-addon').on('click', function () {
            let queryValue = ($('#request-query-text').val() === undefined) ? '' : $('#request-query-text').val()
            let queryString = setQueryParam(window.location.href, 'query', queryValue)
            queryString = setQueryParam(queryString, 'status', $('#request-status-hidden').val())
            window.location = queryString
        })

        if (getQueryParam('query')) {
            $('#request-query-text').val(getQueryParam('query'))
        }
    }
})