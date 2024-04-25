/* Detect catalog page. */
function detectCatalogPage () {
    let flagCatalog = false
    if (detectPageTemplates('categories')) {
        if (catalog.categories.indexOf(parseInt(categoryID)) !== -1) {
            flagCatalog = true
        }
    } else if (detectPageTemplates('sections')) {
        if (catalog.sections.indexOf(parseInt(sectionID)) !== -1) {
            flagCatalog = true
        }
    } else if (detectPageTemplates('articles')) {
        if (catalog.articles.indexOf(parseInt(articleID)) !== -1) {
            flagCatalog = true
        }
    }
    return flagCatalog
}

/* Setup catalog chatbot. */
function setupCatalogChatbot () {
    $('.btn-support-bot').addClass('btn-catalog-bot').removeClass('btn-support-bot')
}

/* Fetch catalog contracts. */
function fetchCatalogContracts () {
    let graphQuery = '{' +
                        'user {' +
                            'id' + '\n' +
                            'name' + '\n' +
                            'offer(' +
                                'pagination: { after: "0", first: 100 }' +
                                'offerForFreelancerFilter: {' +
                                    'commonFilter: { states_any: [Active, Pending], catalogProject: true }' +
                                '}' +
                            ') {' +
                                'totalCount' +
                            '}' +
                        '}' +
                        'organization {' +
                            'id' + '\n' +
                            'name' + '\n' +
                            'clientOffers(' +
                                'pagination: { after: "0", first: 100 }' +
                                'offerByClientFilter: {' +
                                    'commonFilter: { states_any: [Active, Pending], catalogProject: true }' +
                                '}' +
                            ') {' +
                                'totalCount' +
                            '}' +
                            'agencyOffers(' +
                                'pagination: { after: "0", first: 100 }' +
                                'offerByRootCompanyFilter: {' +
                                    'commonFilter: { states_any: [Active, Pending], catalogProject: true }' +
                                '}' +
                            ') {' +
                                'totalCount' +
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
            if (result.data.user.offer.totalCount > 0) {
                setupCatalogChatbot()
            } else if (result.data.organization.clientOffers.totalCount > 0) {
                setupCatalogChatbot()
            } else if (result.data.organization.agencyOffers.totalCount > 0) {
                setupCatalogChatbot()
            }
        }
    })
}
