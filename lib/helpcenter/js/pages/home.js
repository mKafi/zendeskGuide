/* Handle the popular nav tab click. */
function clickPopularTopicNavTab (scope) {
    $('#popular-topics-nav-tabs .nav-tabs > div').removeClass('active')
    $('#popular-topics-nav-tabs a[href="#tab-pane-' + scope + '"]').click()
    $('#popular-topics-nav-tabs a[href="#tab-pane-' + scope + '"]').parents().eq(0).addClass('active')
}

/* Handle the popular nav tab click default. */
function clickPopularTopicNavTabDefault () {
    if (isUserAnonymous()) {
        clickPopularTopicNavTab('freelancer')
    } else {
        if (isUserAgent()) {
            clickPopularTopicNavTab('agent')
        } else {
            if (getCookie(upworkConfig.cookies.prefix + 'user-enterprise-org') !== null) {
                enterpriseLandingPage()
            } else {
                if (getCookie(upworkConfig.cookies.prefix + 'user-tab') !== null) {
                    clickPopularTopicNavTab(getCookie(upworkConfig.cookies.prefix + 'user-tab'))
                } else {
                    if (isUserClient()) {
                        setCookieForDays(upworkConfig.cookies.prefix + 'user-context', 'client', 1)
                        clickPopularTopicNavTab('client')
                    } else if (isUserAgency()) {
                        setCookieForDays(upworkConfig.cookies.prefix + 'user-context', 'agency', 1)
                        clickPopularTopicNavTab('agency')
                    } else if (isUserFreelancer()) {
                        setCookieForDays(upworkConfig.cookies.prefix + 'user-context', 'freelancer', 1)
                        clickPopularTopicNavTab('freelancer')
                    }
                }
            }
        }
    }
}

/* Get instant Help options. */
function getInstantHelps (scope) {
    let output = []
    for (i in instantHelp) {
        if (instantHelp[i].scope == scope) {
            for (j in instantHelp[i].options) {
                output.push('<div class="instant-helps-list-item">')
                    output.push('<div class="icon-container">')
                        
                        output.push('<a class="img" href="' + instantHelp[i].options[j].link + '" aria-label="' + instantHelp[i].options[j].title + '">')
                            output.push('<span class="' + instantHelp[i].options[j].icon + '"></span>')
                        output.push('</a>')
                    output.push('</div>')
                    output.push('<div class="text-container">')
                        output.push('<a href="' + instantHelp[i].options[j].link + '">')
                            output.push('<h4>' + instantHelp[i].options[j].title + '</h4>')
                            output.push('<p>' + instantHelp[i].options[j].description + '</p>')
                        output.push('</a>')
                    output.push('</div>')
                output.push('</div>')
            }
        } else {
            continue
        }
    }
    $('#section-instant-helps .instant-helps-list').html(output.join(''))
}

/* Get Recommended Topics. */
function getRecommendedTopics(scope) {    
    let output = []
    for (i in recommendedTopics) {
        if (recommendedTopics[i].scope == scope) {
            let rowItemPos = 0
            let recTopicHtm = ''
            for (j =0; j < recommendedTopics[i].links.length; j++) {                
                recTopicHtm += '<div class="col-xs-12 col-sm-12 col-md-3">'
                    recTopicHtm += '<div class="rec-topic-cont">'
                        recTopicHtm += '<div class="topic-title">'+recommendedTopics[i].links[j].title+'</div>'
                        recTopicHtm += '<p>' + recommendedTopics[i].links[j].description + '</p>'
                        recTopicHtm += '<a class="item-description-link" href="' + recommendedTopics[i].links[j].link + '">Read more <span class="arrow-dir-right"></span></a>'
                    recTopicHtm += '</div>'
                recTopicHtm += '</div>'
                rowItemPos++

                if(rowItemPos == 4){
                    output.push('<div class="row">'+recTopicHtm+'</div>')
                    rowItemPos = 0 
                    recTopicHtm = '' 
                } 

                if(j == (recommendedTopics[i].links.length - 1) && recTopicHtm != ''){
                    output.push('<div class="row">'+recTopicHtm+'</div>')
                }
            }
        } 
        else {
            continue 
        }
    }
    $('#popular-topics-nav-tabs .nav-tabs > div').removeClass('active')
    $('#popular-topics-nav-tabs a[href="#tab-pane-' + scope + '"]').parents().eq(0).addClass('active')
    $('#recommended-topics-cont').html(output.join(''))
}

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

jQuery(function () {
    if (detectPageTemplates('home')) {
        let output = []

        if (isUserInternal()) {
            let outputTab = []
            outputTab.push('<div role="presentation">')
                outputTab.push('<a class="tab-link-enterprise" href="#tab-pane-enterprise" aria-controls="tab-pane-enterprise" role="tab" data-toggle="tab">')
                    outputTab.push('I\'m an Enterprise')
                outputTab.push('</a>')
            outputTab.push('</div>')

            enterpriseHomeContactSection()

            if (isUserAgent()) {
                outputTab.push('<div role="presentation">')
                    outputTab.push('<a class="tab-link-agent" href="#tab-pane-agent" aria-controls="tab-pane-agent" role="tab" data-toggle="tab">')
                        outputTab.push('I\'m an Agent')
                    outputTab.push('</a>')
                outputTab.push('</div>')
            }
            $('#popular-topics-nav-tabs .nav-tabs').append(outputTab.join(''))
        }


        for (i in kbMatrics) {
            if (kbMatrics[i].scope == 'agent') {
                output.push('<div id="tab-pane-' + kbMatrics[i].scope + '" class="tab-pane tab-pane-internal" role="tabpanel">')
            } else {
                output.push('<div id="tab-pane-' + kbMatrics[i].scope + '" class="tab-pane" role="tabpanel">')
            }

            for (j in kbMatrics[i].tiles) {
                output.push('<div class="popular-topics-category">')
                    output.push('<a href="' + zdBrands.main.hc.url + '/' + kbMatrics[i].tiles[j].type + '/' + kbMatrics[i].tiles[j].id + '">')
                        output.push('<div class="icon-container"><span class="' + kbMatrics[i].tiles[j].icon + '"></span></div>')
                        output.push('<div class="text-container">')
                            output.push('<h3>' + kbMatrics[i].tiles[j].title + '</h3>')
                            output.push('<p>' + kbMatrics[i].tiles[j].description + '</p>')
                        output.push('</div>')
                    output.push('</a>')
                output.push('</div>')
            }
            
            output.push('<div class="clearfix"></div>')
            output.push('</div>')
        }
        $('#popular-topics-tab-content .tab-content').html(output.join(''))

        $('#popular-topics-nav-tabs .nav-tabs div a').click(function () {            
            let getTheScope = $(this).attr('href').replace('#tab-pane-', '')
            setCookieForHours(upworkConfig.cookies.prefix + 'user-tab', getTheScope, 1)

            $('#popular-topics-nav-tabs .nav-tabs > div').removeClass('active')
            $('#popular-topics-nav-tabs a[href="#tab-pane-' + getTheScope + '"]').parents().eq(0).addClass('active')

            getInstantHelps(getTheScope)
            getRecommendedTopics(getTheScope)
            getCommonSearches(getTheScope)
            updateWebinarLink()            
        })


        if (isUserAnonymous()) {
            $('#popular-topics-nav-tabs a[href="#tab-pane-freelancer"]').click()
        } 
        else {
            if (isUserInternal()) {
                $('#popular-topics-nav-tabs a[href="#tab-pane-agent"]').click()
            } 
            else {
                if (isUserClient()) {
                    if (isUserEnterprise()) {
                        $('#popular-topics-nav-tabs a[href="#tab-pane-enterprise"]').click()
                    } 
                    else {
                        $('#popular-topics-nav-tabs a[href="#tab-pane-client"]').click()
                    }
                } 
                else if (isUserAgency()) {
                    $('#popular-topics-nav-tabs a[href="#tab-pane-agency"]').click()
                } 
                else {
                    $('#popular-topics-nav-tabs a[href="#tab-pane-freelancer"]').click()
                }

                if (hasAccessToken() && getCookie('current_organization_uid') !== null) {
                    let graphQuery = '{' +
                                        'organization' + '{' +
                                            'flag' + '{' +
                                                'agency' + '\n' +
                                                'client' + '\n' +
                                                'individual' +
                                            '}' +
                                            'subscriptionPlan' + '{' +
                                                'name' +
                                            '}' +
                                        '}' +
                                    '}'

                    $.ajax(upworkConfig.api.graphQL, {
                        type: 'POST',
                        dataType: 'json',
                        contentType: 'application/json',
                        crossDomain: true,
                        headers: {
                            'Authorization': 'Bearer ' + getAccessToken(),
                            'X-Upwork-API-TenantId': getCookie('current_organization_uid'),
                        },
                        data: JSON.stringify({
                            query: graphQuery
                        }),
                        success: function (result) {
                            if (result.data.organization.subscriptionPlan.name == 'Enterprise Client Plan') {
                                setCookieForDays(upworkConfig.cookies.prefix + 'user-context', 'enterprise', 1)
                                $('#popular-topics-nav-tabs a[href="#tab-pane-enterprise"]').click()
                            } else {
                                if (result.data.organization.flag.agency == true) {
                                    setCookieForDays(upworkConfig.cookies.prefix + 'user-context', 'agency', 1)
                                    $('#popular-topics-nav-tabs a[href="#tab-pane-agency"]').click()
                                } else if (result.data.organization.flag.client == true) {
                                    setCookieForDays(upworkConfig.cookies.prefix + 'user-context', 'client', 1)
                                    $('#popular-topics-nav-tabs a[href="#tab-pane-client"]').click()
                                } else if (result.data.organization.flag.individual == true) {
                                    setCookieForDays(upworkConfig.cookies.prefix + 'user-context', 'freelancer', 1)
                                    $('#popular-topics-nav-tabs a[href="#tab-pane-freelancer"]').click()
                                }

                            }
                        }
                    })
                } else {
                    setCookieForDays(upworkConfig.cookies.prefix + 'user-context', 'freelancer', 1)
                    $('#popular-topics-nav-tabs a[href="#tab-pane-freelancer"]').click()
                }
            }
        }


        /* Direct link - nav tabs. */
        if (getQueryParam('tab')) {
            if (getQueryParam('tab') == 'enterprise') {
                clickPopularTopicNavTab('enterprise')
                window.scrollTo(0, ($('.section-popular-topics').offset().top - 120))
            }

            if (getQueryParam('tab') == 'agency') {
                clickPopularTopicNavTab('agency')
                window.scrollTo(0, ($('.section-popular-topics').offset().top - 120))
            }
        }

        /* Fixed nav tabs. */
        $(window).scroll(function () {            
            let navheight = parseInt($("nav").outerHeight()) + parseInt($("nav").css("margin-bottom"))
            let sectionHeroHeight = parseInt($('.section-hero').outerHeight()) + parseInt($(".section-hero").css("margin-bottom"))
            let fixedTopicStart = (navheight+sectionHeroHeight) - 64;
            
            /* let fixedTopicStart = parseInt($("#popular-topics-nav-tabs").offset().top) */
            let fixedTopicHeight = parseInt($('#popular-topics-nav-tabs').outerHeight()) + parseInt($('#popular-topics-nav-tabs').css("padding-top")) -60;
            if ($(window).scrollTop() > fixedTopicStart) {
                $('#popular-topics-nav-tabs').addClass('fixed-topics')
                $('main').css({'padding-top': fixedTopicHeight+'px'})
            } 
            else{
                $('#popular-topics-nav-tabs').removeClass('fixed-topics')
                $('main').css({'padding-top': 0})
            }
        })

        /* Replace hero section search button. */
        $('.section-hero input[type="submit"]').replaceWith('<button name="commit" type="submit" value="Search" aria-label="Search"><span class="air-icon-search"></span></button>')
    }
})