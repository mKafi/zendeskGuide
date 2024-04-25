/* Generate pagination links. */
function generatePagination (count, current) {
    let delta = 2
    let left = current - delta
    let right = current + delta
    let range = []

    if (left > count - 5) {
        left = count - 4
    }

    if (right < 5) {
        right = 5
    }

    for (let i = 1; i <= count; i++) {
        if (i >= left && i <= right) {
            range.push(i)
        }
    }

    if (range[0] !== 1) {
        range.unshift('first', 'previous')
    }

    if (range[4] !== count  && count !== current) {
        range.push('next', 'last')
    }

    return range
}

/* Load search Pagination. */
function loadSearchPagination (count, current, next) {
    let output = []
    let getPagination = generatePagination(count, current)
    for (i in getPagination) {
        if (getPagination[i] == 'first') {
            var getNewURL = setQueryParam(next, 'page', 1)
            output.push('<li class="pagination-first"><a href="' + getNewURL + '">First</a></li>')
        } else if (getPagination[i] == 'previous') {
            var getNewURL = setQueryParam(next, 'page', current - 1)
            output.push('<li class="pagination-prev">')
                output.push('<a href="' + getNewURL + '">')
                    output.push('<span class="pagination-icon"></span>')
                    output.push('Previous')
                output.push('</a>')
            output.push('</li>')
        } else if (getPagination[i] == 'next') {
            var getNewURL = setQueryParam(next, 'page', current + 1)
            output.push('<li class="pagination-next">')
                output.push('<a href="' + getNewURL + '">')
                    output.push('Next')
                    output.push('<span class="pagination-icon"></span>')
                output.push('</a>')
            output.push('</li>')
        } else if (getPagination[i] == 'last') {
            var getNewURL = setQueryParam(next, 'page', count)
            output.push('<li class="pagination-last"><a href="' + getNewURL + '">Last</a></li>')
        } else if (getPagination[i] == current) {
            output.push('<li class="pagination-current"><span>' + getPagination[i] + '</span></li>')
        } else {
            let getNewURL = setQueryParam(next, 'page', getPagination[i])
            output.push('<li><a href="' + getNewURL + '">' + getPagination[i] + '</a></li>')
        }
    }
    $('.pagination ul').html(output.join(''))
}

/* Load search results. */
function loadSearchResults (scope) {
    let filter = ''
    if (scope.search('filter-') == -1) {
        switch (scope) {
            case 'freelancer':
                filter = 'filter-fl'
                break
            case 'agency':
                filter = 'filter-ag'
                break
            case 'client':
                filter = 'filter-cl'
                break
            case 'enterprise':
                filter = 'filter-hc-enterprise'
                break
            case 'api':
                filter = 'filter-api'
                break
            case 'agent':
                filter = 'filter-int'
                break
            case 'all':
                filter = 'filter-all'
                break
        }
    } 
    else {
        switch (scope) {
            case 'filter-fl':
                scope = 'freelancer'
                filter = 'filter-fl'
                break
            case 'filter-ag':
                scope = 'agency'
                filter = 'filter-ag'
                break
            case 'filter-cl':
                scope = 'client'
                filter = 'filter-cl'
                break
            case 'filter-hc-enterprise':
                scope = 'enterprise'
                filter = 'filter-hc-enterprise'
                break
            case 'filter-api':
                scope = 'api'
                filter = 'filter-api'
                break
            case 'filter-int':
                scope = 'agent'
                filter = 'filter-int'
                break
            case 'filter-all':
                scope = 'all'
                filter = 'filter-fl,filter-ag,filter-cl,filter-en,filter-api,filter-int'
                break
        }
    }
    let actionTab = '#search-tab-' + scope
    $('#search-topics-nav-tabs .nav-tabs div').removeClass('active')
    $(actionTab).parents('div').addClass('active')

    let location = window.location.href
    let queryString = location.replace(zdBrands.main.hc.url + '/search?', '')
    let apiURL = zdBrands.main.hc.api + '/articles/search.json?' + queryString    
    apiURL = apiURL.replace('en-us/', '')
    apiURL = apiURL.replace('&utf8=%E2%9C%93', '')
    apiURL = setQueryParam(apiURL, 'per_page', 10)
    apiURL = setQueryParam(apiURL, 'label_names', filter)

    if (decodeURIComponent(getQueryParam('query')) == '') {
        apiURL = setQueryParam(apiURL, 'query', '\'\'')
    }

    setCookieForHours(upworkConfig.cookies.prefix + 'user-tab', scope, 6)

    $.ajax(apiURL, {
        type: 'GET',
        dataType: 'json',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (data) {
            let foundItems = parseInt(data.count)
            let resultText = 'Found ' + foundItems + ' results for "' + decodeURIComponent(getQueryParam('query')) + '"'
            $(".search-page h3.box-heading").text(resultText)
            let output = []

            if(foundItems > 0){
                if (isUserInternal() && scope == 'agent') {
                    let searchlocation = window.location.href.split('?')[0]
                    let queryValue = getQueryParam('query')
                    let queryString = setQueryParam(searchlocation, 'query', queryValue)
                    queryString = setQueryParam(queryString, 'utf8', '✓')
                    queryString = setQueryParam(queryString, 'per_page', 10)
                    queryString = setQueryParam(queryString, 'label_names', 'filter-all')
                    $('.page-title-description small').after(' <a href="' + queryString + '">See all search results</a>')
                }
                
                for (i in data.results) {
                    output.push('<div class="col-xs-12">')
                        output.push('<div class="article-list-item">')
                            output.push('<div class="title">' + data.results[i].title + '</div>')
                            output.push('<p class="excerpt">' + data.results[i].snippet + '</p>')
                            output.push('<a href="' + data.results[i].html_url + '">Continue reading</a>')
                        output.push('</div>')
                    output.push('</div>')
                }

                if (data.page_count > 1) {
                    let searchPage = ''
                    if (data.next_page == undefined) {
                        searchPage = data.previous_page.replace(zdBrands.main.hc.api.replace('en-us', '') + 'articles/search.json', zdBrands.main.hc.url + '/search')
                    } else {
                        searchPage = data.next_page.replace(zdBrands.main.hc.api.replace('en-us', '') + 'articles/search.json', zdBrands.main.hc.url + '/search')
                    }

                    let pageCount = data.page_count
                    loadSearchPagination(pageCount, data.page, searchPage)
                } 
                else {
                    $('.pagination').remove()
                }
            }
            else{
                output.push('<div class="col-xs-12">')
                    output.push('<div class="article-list-item">')
                        output.push('<div class="title">Articles not found</div>')
                        output.push('<p class="excerpt">There is no active articles for this section</p>')                        
                    output.push('</div>')
                output.push('</div>')
            }
            $('.search-result-list .article-list').html(output.join(''))            
        }
    })
}




jQuery(function () {
    if (isUserInternal()) {
        let outputTab = []
        outputTab.push('<div>')
            outputTab.push('<a id="search-tab-enterprise" class="tab-link-enterprise" href="#" data-tab="filter-hc-enterprise" aria-controls="enterprise">')
                outputTab.push('I\'m an Enterprise')
            outputTab.push('</a>')
        outputTab.push('</div>')

        if (isUserAgent()) {
            outputTab.push('<div>')
                outputTab.push('<a id="search-tab-agent" class="tab-link-agent" href="#" data-tab="filter-int" aria-controls="agent">')
                    outputTab.push('I\'m an Agent')
                outputTab.push('</a>')
            outputTab.push('</div>')
        }
        $('#search-topics-nav-tabs .nav-tabs').append(outputTab.join(''))
    }

    if (detectPageTemplates('search')) {        
        $('#search-topics-nav-tabs .nav-tabs div a').click(function () {
            let getTheScope = $(this).attr('href').replace('#tab-pane-', '')
            setCookieForHours(upworkConfig.cookies.prefix + 'user-tab', getTheScope, 6)
            updateWebinarLink()

            let searchlocation = window.location.href.split('?')[0]
            let queryValue = getQueryParam('query')
            let queryString = setQueryParam(searchlocation, 'query', queryValue)
            queryString = setQueryParam(queryString, 'utf8', '✓')
            queryString = setQueryParam(queryString, 'per_page', 10)
            queryString = setQueryParam(queryString, 'label_names', $(this).attr('data-tab'))
            window.location = queryString
        })

        if (getCookie(upworkConfig.cookies.prefix + 'user-enterprise-org') !== null) {
            if (! isUserInternal()) {
                enterpriseSearchPage()
            }
        }

        if (getQueryParam('label_names')) {
            loadSearchResults(getQueryParam('label_names'))
        } 
        else {
            if (getCookie(upworkConfig.cookies.prefix + 'user-tab')) {
                loadSearchResults(getCookie(upworkConfig.cookies.prefix + 'user-tab'))
            } 
            else {
                if (isUserAnonymous()) {
                    loadSearchResults('freelancer')
                } else {
                    if (isUserAgent()) {
                        loadSearchResults('agent')
                    } else {
                        if (getCookie(upworkConfig.cookies.prefix + 'user-enterprise-org') !== null) {
                            loadSearchResults('hc-enterprise')
                        } else {
                            if (isUserEnterprise()) {
                                loadSearchResults('enterprise')
                            } else if (isUserClient()) {
                                loadSearchResults('client')
                            } else if (isUserAgency()) {
                                loadSearchResults('agency')
                            } else {
                                loadSearchResults('freelancer')
                            }
                        }
                    }
                }
            }
        }

        
         

        $(window).scroll(function () {
            let fixedTopicStart = parseInt($('.section-hero').outerHeight())
            let fixedTopicHeight = parseInt($('#popular-topics-nav-tabs').outerHeight())
            if ($(window).scrollTop() > fixedTopicStart) {
                $('#search-topics-nav-tabs').addClass('fixed-topics')
                $('.popular-topics-heading').addClass('hidden')
                $('.main').css({'padding-top': fixedTopicHeight})
            } 
            else {
                $('#search-topics-nav-tabs').removeClass('fixed-topics')
                $('.popular-topics-heading').removeClass('hidden')
                $('.main').css({'padding-top': 0})
            }
        })

        $('.section-hero input[type="submit"]').replaceWith('<button name="commit" type="submit" value="Search" aria-label="Search"><span class="air-icon-search"></span></button>')
    }    
})

/* Get Common Searches from keyworkds. */
function getCommonSearches(scope) {
    for (i in commonSearches) {
        if (commonSearches[i].scope == scope) {
            let keyWords = commonSearches[i].keywords.split(',')
            let output = []
            let totalKeys = keyWords.length
            for (let i in keyWords) {
                if ((totalKeys - 1) == i) {
                    output.push('<li><a href="' + zdBrands.main.hc.url + '/search?utf8=✓&query=' + keyWords[i].trim() + '">' + keyWords[i].trim() + '</a></li>')
                } else {
                    output.push('<li><a href="' + zdBrands.main.hc.url + '/search?utf8=✓&query=' + keyWords[i].trim() + '">' + keyWords[i].trim() + '</a></li>')
                }
            }
            $('.common-search-container ul').html(output.join(''))
        }
    }
}

$(window).on('load',function(){    
    /* Setting common search terms */
    let userScope = ''
    if (upworkConfig.cookies.prefix + 'user-tab') {            
        userScope = getCookie(upworkConfig.cookies.prefix + 'user-tab') 
    } 
    else if(getQueryParam('label_names')){
        userScope = getQueryParam('label_names')        
    }    
    getCommonSearches(userScope)
})