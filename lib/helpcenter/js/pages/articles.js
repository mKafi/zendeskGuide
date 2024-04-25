if (detectPageTemplates('articles')) {
    var articleURL = urlPartsArray[4].split('-')
    var articleID = articleURL[0]
}

jQuery(function () {
    if (detectPageTemplates('articles')) {
        if(typeof appealForm !== 'undefined'){
            if (articleID == appealForm.article) {
                let toDayNow = new Date()
                let queryString = setQueryParam($('#article-appeal-btn').attr('href'), 'nonce', (toDayNow.getTime() + (5 * 60 * 1000)))
                $('#article-appeal-btn').attr({
                    'href': queryString
                })
            }
        }

        /* Push event to dataLayer on article votes. */
        $('.article-vote-up').click(function () {
            dataLayer.push({'event': 'upvote'})
        })
        $('.article-vote-down').click(function () {
            dataLayer.push({'event': 'downvote'})
        })

        /* Set placeholder text of comment textarea. */
        $('#comment_body').attr({
            'placeholder': 'Let us know how we can improve your experience...'
        })

        /* Article meta visibilities. */
        if (!isUserInternal()) {
            $('.article-meta').remove()
            $('.article-votes').show()
        } else {
            $('.article-meta').show()
            $('.article-votes').remove()
        }
    }
})