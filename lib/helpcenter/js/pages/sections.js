if (detectPageTemplates('sections')) {
    var sectionURL = urlPartsArray[4].split('-')
    var sectionID = sectionURL[0]
}

/* Get mirrored articles on section pages. */
function getMirroredArticles (id) {
    $.ajax(zdBrands.main.hc.api + '/articles/' + id + '.json', {
        type: 'GET',
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (data) {
            let output = []

                output.push('<div class="col-xs-12">')
                    output.push('<div class="article-list-item">')
                        output.push('<a href="/hc/en-us/articles/' + data.article.id + '" class="title">')
                        output.push(data.article.title)
                        output.push('</a>')
                        output.push('<p class="excerpt">')
                            output.push(formatBodyText(data.article.body, 200))
                        output.push('</p>')
                    output.push('</div>')
                output.push('</div>')

            $('.article-list').append(output.join(''))
        }
    })
}

/* Format article body text. */
function formatBodyText (text, limit) {
    let regEx = /(<([^>]+)>)/ig
    let returnString = text.replace(regEx, '')
    returnString = returnString.substr(0, returnString.lastIndexOf(' ', limit)) + ' ...'

    return returnString
}
