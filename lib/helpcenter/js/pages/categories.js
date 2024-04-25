if (detectPageTemplates('categories')) {
    var categoryURL = urlPartsArray[4].split('-')
    var categoryID = categoryURL[0]
}

/* Add mirrored articles to the section on category pages. */
function addMirroredArticles () {
    $.each($('.category-tree .article-list'), function (index, element) {
        let sectionID = $(this).attr('data-section')
        for (i in kbMirrors.sections) {
            if (sectionID == kbMirrors.sections[i].mirror) {
                for (j in kbMirrors.sections[i].items) {
                    let output = []
                    output.push('<div class="article-list-item mirrored-article-item">')
                        output.push('<a href="' + zdBrands.main.hc.url + '/articles/' + kbMirrors.sections[i].items[j].id + '">')
                            output.push(kbMirrors.sections[i].items[j].title)
                        output.push('</a>')
                    output.push('</div>')
                    $('#article-list-' + sectionID).append(output.join(''))
                }
            }
        }
    })
}

/* Add more articles to the section on category pages. */
function addMoreArticles (sectionID) {
    $.ajax(zdBrands.main.hc.api + '/sections/' + sectionID + '/articles.json', {
        type: 'GET',
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (data) {
            let output = []
            $('#article-list-' + sectionID).find('.article-list-item').not('.mirrored-article-item').remove()
            for (i in data.articles) {
                output.push('<div class="article-list-item">')
                    output.push('<a href="' + data.articles[i].html_url + '">')
                        output.push(data.articles[i].title)
                    output.push('</a>')
                output.push('</div>')
            }
            $('#article-list-' + sectionID).prepend(output.join(''))
        }
    })
}

/* Add mirrored sections on category pages. */
function addMirroredSections (id, title) {
    let output = []
    output.push('<div class="category-tree">')
        output.push('<div class="row">')
            output.push('<div class="col-xs-12">')
                output.push('<h4>')
                    output.push('<a href="/hc/en-us/sections/' + id + '">' + title + '</a>')
                output.push('</h4>')
            output.push('</div>')
        output.push('</div>')
        output.push('<div class="row">')
            output.push('<div id="article-list-' + id + '" class="article-list">')
            output.push('</div>')
        output.push('</div>')
    output.push('</div>')
    $('.category-tree-container').append(output.join(''))
}

jQuery(function () {
    if (detectPageTemplates('categories')) {
        addMirroredArticles()
    }
})
