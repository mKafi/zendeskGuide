/* Process the suspensions for later use. */
function processSuspensions (name) {
    setCookieForDays(upworkConfig.cookies.prefix + 'legacy-suspension', true, 1)

    if (name == 379) {
        setCookieForDays(upworkConfig.cookies.prefix + 'suspensions-nonadmission', true, 1)
    }

    if (name == 359) {
        setCookieForDays(upworkConfig.cookies.prefix + 'suspensions-excessive-disputes', true, 1)
    }

    if (name == 358) {
        setCookieForDays(upworkConfig.cookies.prefix + 'suspensions-excessive-disputes', true, 1)
    }

    if (name == 357) {
        setCookieForDays(upworkConfig.cookies.prefix + 'suspensions-excessive-disputes', true, 1)
    }

    if (name == 65) {
        setCookieForDays(upworkConfig.cookies.prefix + 'suspensions-excessive-disputes', true, 1)
    }

    if (name == 110) {
        setCookieForDays(upworkConfig.cookies.prefix + 'suspensions-finance-failed-charge', true, 1)
    }

    let signalCodes = [
        110, 111, 115, 117, 118, 156, 172, 208, 211, 213, 214, 216, 217, 218, 221, 224, 303, 310, 312,
        319, 321, 323, 324, 352, 353, 354, 355, 356, 363, 364, 365, 366, 367, 368, 369, 370, 371, 373,
        374, 375, 38, 4, 413, 448, 465, 466, 478, 483, 486, 487, 5, 50, 528, 533, 539, 543, 545, 95
    ]

    if (signalCodes.includes(name)) {
        setCookieForDays(upworkConfig.cookies.prefix + 'legacy-suspension', false, 1)
    }
}

/* Check, if the user suspened. */
function isUserSuspened () {
    if (
        (getCookie(upworkConfig.cookies.prefix + 'idbc-suspension') == 'true') ||
        (getCookie(upworkConfig.cookies.prefix + 'legacy-suspension') == 'true')
    ) {
        return true
    } else {
        return false
    }
}

/* Check if the user is verified. */
function isUserVerified (user) {
    if (
        user.talentProfile.verifications.idVerified == true ||
        user.talentProfile.verifications.webcamVerified == true ||
        user.talentProfile.verifications.livenessVerified == true
    ) {
        return true
    } else {
        return false
    }
}null

/* Reset the suspensions. */
function resetSuspensions () {
    setCookieForDays(upworkConfig.cookies.prefix + 'suspensions-nonadmission', false, 1)
    setCookieForDays(upworkConfig.cookies.prefix + 'suspensions-excessive-disputes', false, 1)
    setCookieForDays(upworkConfig.cookies.prefix + 'suspensions-finance-failed-charge', false, 1)
}

/* Get Upwork Academy Info. */
function getUpworkAcademyInfo (user) {
    let academyAPIUrl = 'https://community.upwork.com/api/2.0/search?q=SELECT%20*%20FROM%20users%20WHERE%20login%20=%20%27' + user + '%27'
    $.ajax(academyAPIUrl, {
        type: 'GET',
        crossDomain: true,
        contentType: 'application/json',
        success: function (result) {
            if (result.success == 'success') {
                if (result.data.items > 0) {
                    let courses = []

                    for (i in result.data.items) {
                        if (result.data.items[i].c_lp_11 == undefined) {
                            courses.push('c_lp_11')
                        }

                        if (result.data.items[i].c_lp_12 == undefined) {
                            courses.push('c_lp_12')
                        }
                    }

                    if (courses.length > 0) {
                        setCookieForDays(upworkConfig.cookies.prefix + 'freelancer-learning-path', courses.join(','), 1)
                    } else {
                        setCookieForDays(upworkConfig.cookies.prefix + 'freelancer-learning-path', 'PASSED', 1)
                    }
                } else {
                    setCookieForDays(upworkConfig.cookies.prefix + 'freelancer-learning-path', 'c_lp_11,c_lp_12', 1)
                }
            } else {
                setCookieForDays(upworkConfig.cookies.prefix + 'freelancer-learning-path', 'API FAILED', 1)
            }
        }
    })
}

/* Set the phone eligibility. */
function setPhoneEligibility (context) {
    if (isUserSuspened()) {
        setCookieForDays(upworkConfig.cookies.prefix + context + '-eligibility-phone', false, 1)
    } else {
        setCookieForDays(upworkConfig.cookies.prefix + context + '-eligibility-phone', true, 1)
    }
}

/* Set the chat eligibility. */
function setChatEligibility (context) {
    if (isUserSuspened()) {
        setCookieForDays(upworkConfig.cookies.prefix + context + '-eligibility-chat', false, 1)
    } else {
        setCookieForDays(upworkConfig.cookies.prefix + context + '-eligibility-chat', true, 1)
    }
}

/* Set the email eligibility. */
function setEmailEligibility (context) {
    setCookieForDays(upworkConfig.cookies.prefix + context + '-eligibility-email', true, 1)
}

/* Reset the eligibility. */
function resetEligibility () {
    resetEligibilityByContext('freelancer')
    resetEligibilityByContext('agency')
    resetEligibilityByContext('client')
}

/* Reset the eligibility by context. */
function resetEligibilityByContext (context) {
    setCookieForDays(upworkConfig.cookies.prefix + context + '-eligibility-phone', false, 1)
    setCookieForDays(upworkConfig.cookies.prefix + context + '-eligibility-chat', false, 1)
    if (context == 'freelancer') {
        setCookieForDays(upworkConfig.cookies.prefix + context + '-eligibility-email', false, 1)
    } else {
        setCookieForDays(upworkConfig.cookies.prefix + context + '-eligibility-email', true, 1)
    }
}

/* Set the chat route. */
function setChatRoute (context, value) {
    setCookieForDays(upworkConfig.cookies.prefix + context + '-chat-route', value, 1)
}

/* Reset the chat route. */
function resetChatRoute () {
    resetChatRouteByContext('freelancer')
    resetChatRouteByContext('agency')
    resetChatRouteByContext('client')
}

/* Reset the chat route by context. */
function resetChatRouteByContext (context) {
    setCookieForDays(upworkConfig.cookies.prefix + context + '-chat-route', '', 1)
}

/* Get the active contracts with LB CLs. */
function getContractsWithLBCL (data) {
    let count = 0
    for (let i in data) {
        if (data[i].node.company.segmentationInformation.segmentDetails.segmentName == 'LB') {
            count++
        }
    }
    return count
}

/* Get the user contexts. */
function getUserContexts () {
    let graphQuery = '{' +
        'user {' +
            'id' + '\n' +
            'nid' + '\n' +
            'email' + '\n' +
            'permissions' + '(' +
                'filter' + ':{' +
                    'resourceType_eq' + ':' + 'ORGANIZATION' + '\n' +
                    'actions_any' + ':' + '[' + '"get_live_agent_support"' + ']' + '\n' +
                    'limit: 5' +
                '}' +
            ')' + '{' +
                'edges' + '{' +
                    'node' + '{' +
                        'action' + '\n' +
                        'access' +
                    '}' +
                '}' +
            '}' +
            'talentProfile {' +
                'personalData {' +
                    'firstName' + '\n' +
                    'lastName' + '\n' +
                    'location {' + '\n' +
                        'country' +
                    '}' +
                '}' +
            '}' +
        '}' +
        'companySelector{' +
            'items{' +
                'organizationId' + '\n' +
                'title' + '\n' +
                'typeTitle' +
            '}' +
        '}' +
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
            'X-Upwork-API-TenantId': getCookie('current_organization_uid')
        },
        data: JSON.stringify({
            query: graphQuery
        }),
        success: function (result) {
            for (i in result.data.user.permissions.edges) {
                if (
                    result.data.user.permissions.edges[i].node.action == 'get_live_agent_support' &&
                    result.data.user.permissions.edges[i].node.access != 'ACCESS_GRANTED'
                ) {
                    setCookieForDays(upworkConfig.cookies.prefix + 'idbc-suspension', true, 1)
                } else {
                    setCookieForDays(upworkConfig.cookies.prefix + 'idbc-suspension', false, 1)
                }
            }

            if (result.data.organization.subscriptionPlan.name.indexOf('Enterprise') !== -1 ) {
                setCookieForDays(upworkConfig.cookies.prefix + 'current-user-context', 'enterprise', 1)
            } else {
                if (result.data.organization.flag.agency == true) {
                    setCookieForDays(upworkConfig.cookies.prefix + 'current-user-context', 'agency', 1)
                } else if (result.data.organization.flag.client == true) {
                    setCookieForDays(upworkConfig.cookies.prefix + 'current-user-context', 'client', 1)
                } else if (result.data.organization.flag.individual == true) {
                    setCookieForDays(upworkConfig.cookies.prefix + 'current-user-context', 'freelancer', 1)
                }
            }

            let userInfo = {
                'username': result.data.user.nid,
                'useremail': result.data.user.email,
                'firstname': result.data.user.talentProfile.personalData.firstName,
                'lastname': result.data.user.talentProfile.personalData.lastName,
                'country': result.data.user.talentProfile.personalData.location.country
            }
            setCookieForDays(upworkConfig.cookies.prefix + 'user-info', JSON.stringify(userInfo), 1)

            let userID = result.data.user.id
            let organizationID
            let organizationType
            let hasUserContexts = []
            let countContexts = 0

            setCookieForDays(upworkConfig.cookies.prefix + 'user', userID, 1)
            resetSuspensions()
            resetEligibility()
            resetChatRoute()

            if (JSON.parse(getCookie(upworkConfig.cookies.prefix + 'has-user-contexts')) != null) {
                hasUserContexts = JSON.parse(getCookie(upworkConfig.cookies.prefix + 'has-user-contexts'))
            } else {
                hasUserContexts = {
                    'freelancer': false,
                    'agency': false,
                    'client': false,
                    'enterprise': false
                }
            }

            for (let i in result.data.companySelector.items) {
                organizationID = result.data.companySelector.items[i].organizationId
                organizationType = result.data.companySelector.items[i].typeTitle

                if (organizationType == 'Freelancer') {
                    hasUserContexts.freelancer = true
                    setCookieForDays(upworkConfig.cookies.prefix + 'user-freelancer-org', organizationID, 1)
                } else if (organizationType == 'Agency') {
                    hasUserContexts.agency = true
                    setCookieForDays(upworkConfig.cookies.prefix + 'user-agency-org', organizationID, 1)
                } else if (organizationType == 'Client') {
                    hasUserContexts.client = true
                    setCookieForDays(upworkConfig.cookies.prefix + 'user-client-org', organizationID, 1)
                } else if (organizationType.indexOf('Enterprise') !== -1) {
                    hasUserContexts.enterprise = true
                    setCookieForDays(upworkConfig.cookies.prefix + 'user-enterprise-org', organizationID, 1)
                    setCookieForDays(upworkConfig.cookies.prefix + 'user-enterprise-company-name', result.data.companySelector.items[i].title, 1)
                }
            }

            setCookieForDays(upworkConfig.cookies.prefix + 'has-user-contexts', JSON.stringify(hasUserContexts), 1)

            for (let i in result.data.companySelector.items) {
                organizationID = result.data.companySelector.items[i].organizationId
                organizationType = result.data.companySelector.items[i].typeTitle

                if (organizationType == 'Freelancer') {
                    getFLUserInfo(userID)
                } else if (organizationType == 'Agency') {
                    getAGUserInfo(organizationID)
                } else if (organizationType == 'Client') {
                    getCLUserInfo(organizationID)
                } else if (organizationType.indexOf('Enterprise') !== -1) {
                    getENTUserInfo(organizationID)
                }

                countContexts++
            }

            setCookieForMins(upworkConfig.cookies.prefix + 'contexts-checks', countContexts, 2)

            clickPopularTopicNavTabDefault()
        }
    })
}

/* Get the freelancer user info. */
function getFLUserInfo (userID) {
    let graphQuery = '{' +
        'user {' +
            'freelancerProfile {' +
                'aggregates {' +
                    'totalEarnings {' + 'displayValue' + '}' +
                '}' +
            '}' +
            'talentProfile {' +
                'vetted' + '\n' +
                'verifications {' +
                    'idVerified' + '\n' +
                    'webcamVerified' + '\n' +
                    'livenessVerified' +
                '}' +
                'profileAggregates{' +
                    'topRatedPlusStatus' + '\n' +
                    'topRatedStatus' + '\n' +
                    'profileStats {' +
                        'totalCharge360' +
                    '}' +
                '}' +
                'profileStatsExt{' +
                    'totalCharge90{' +
                        'displayValue' +
                    '}' +
                '}' +
            '}' +
            'offer(' +
                'pagination: { after: "0", first: 50 }' +
                'offerForFreelancerFilter: { ' +
                    'commonFilter: {' +
                        'states_any: [Active, Pending]' +
                    '}' +
                '}' +
                'sortAttribute: {' +
                    'field: "Team",' +
                    'sortOrder: ASC' +
                '}' +
            ') {' +
                'totalCount' + '\n' +
                'edges {' +
                    'node {' +
                        'company {' +
                            'segmentationInformation {' +
                                'segmentDetails {' +
                                    'segmentName' +
                                '}' +
                            '}' +
                        '}' +
                    '}' +
                '}' +
            '}' +
        '}' +
        'activeSuspensionsForUser(userId: ' + userID + ') {' +
            'shortCode' +
        '}' +
    '}'

    $.ajax(upworkConfig.api.graphQL, {
        type: 'POST',
        dataType: 'json',
        contentType: 'application/json',
        crossDomain: true,
        headers: {
            'Authorization': 'Bearer ' + getAccessToken()
        },
        data: JSON.stringify({
            query: graphQuery
        }),
        success: function (result) {
            setChatRoute('freelancer', 'LI_Freelancer_Support_CX410')
            setCookieForDays(upworkConfig.cookies.prefix + 'freelancer-verified', false, 1)
            setCookieForDays(upworkConfig.cookies.prefix + 'freelancer-has-earnings', false, 1)
            setCookieForDays(upworkConfig.cookies.prefix + 'freelancer-has-active-contact', false, 1)

            for (i in result.data.activeSuspensionsForUser) {
                processSuspensions(result.data.activeSuspensionsForUser[i].shortCode)
            }

            if (result.data.user.freelancerProfile.aggregates.totalEarnings.displayValue > 0) {
                setEmailEligibility('freelancer')

                setChatRoute('freelancer', 'Freelancer_Support_CX410')

                setCookieForDays(upworkConfig.cookies.prefix + 'freelancer-has-earnings', true, 1)
            }

            if (isUserVerified(result.data.user)) {
                setEmailEligibility('freelancer')

                setChatRoute('freelancer', 'Freelancer_Support_CX410')

                setCookieForDays(upworkConfig.cookies.prefix + 'freelancer-verified', true, 1)
            }

            if (result.data.user.offer.totalCount > 0) {
                setEmailEligibility('freelancer')

                setChatRoute('freelancer', 'Freelancer_Support_CX410')

                setCookieForDays(upworkConfig.cookies.prefix + 'freelancer-has-active-contact', true, 1)
            }

            if (result.data.user.talentProfile.profileAggregates.profileStats.totalCharge360 !== null) {
                if (result.data.user.talentProfile.profileAggregates.profileStats.totalCharge360.displayValue > 0) {
                    setEmailEligibility('freelancer')

                    setChatRoute('freelancer', 'Freelancer_Support_CX410')
                }
            }

            if (getContractsWithLBCL(result.data.user.offer.edges) > 0) {
                setPhoneEligibility('freelancer')
                setChatEligibility('freelancer')
                setEmailEligibility('freelancer')

                setChatRoute('freelancer', 'Freelancer_Support_CX410')
            }

            if (result.data.user.talentProfile.vetted == true) {
                setPhoneEligibility('freelancer')
                setChatEligibility('freelancer')
                setEmailEligibility('freelancer')

                setChatRoute('freelancer', 'HV_Freelancer_Support_CX410')
            } else if (result.data.user.talentProfile.profileAggregates.topRatedPlusStatus == 'top_rated_plus') {
                setPhoneEligibility('freelancer')
                setChatEligibility('freelancer')
                setEmailEligibility('freelancer')

                setChatRoute('freelancer', 'HV_Freelancer_Support_CX410')
            } else if (result.data.user.talentProfile.profileAggregates.topRatedStatus == 'top_rated') {
                setPhoneEligibility('freelancer')
                setChatEligibility('freelancer')
                setEmailEligibility('freelancer')

                setChatRoute('freelancer', 'HV_Freelancer_Support_CX410')
            } else if (result.data.user.talentProfile.profileAggregates.topRatedStatus == 'hipo') {
                setEmailEligibility('freelancer')

                setChatRoute('freelancer', 'Freelancer_Support_CX410')
            }

            if (result.data.user.talentProfile.profileStatsExt.totalCharge90 !== null) {
                if (result.data.user.talentProfile.profileStatsExt.totalCharge90.displayValue > 3000) {
                    setChatEligibility('freelancer')
                    setEmailEligibility('freelancer')

                    setChatRoute('freelancer', 'HV_Freelancer_Support_CX410')
                }
            }

            let getUserInfo = JSON.parse(getCookie(upworkConfig.cookies.prefix + 'user-info'))
            if (getCookie(upworkConfig.cookies.prefix + 'freelancer-chat-route') == 'LI_Freelancer_Support_CX410') {
                getUpworkAcademyInfo(getUserInfo.username)
            } else {
                setCookieForDays(upworkConfig.cookies.prefix + 'freelancer-learning-path', 'NOTAPPLICABLE', 1)
            }

            let contextsChecks = getCookie(upworkConfig.cookies.prefix + 'contexts-checks')
            if (contextsChecks > 1) {
                contextsChecks--
                setCookieForMins(upworkConfig.cookies.prefix + 'contexts-checks', contextsChecks, 2)
            } else {
                setupChatbotUserMeta()
            }
        }
    })
}

/* Get the agency user info. */
function getAGUserInfo (organizationID) {
    let graphQuery = '{' +
        'activeSuspensionsForOrganization(organizationId: ' + organizationID + ') {' +
            'shortCode' +
        '}' +
        'organization {' +
            'agencyProfile(id: "' + organizationID + '") {' +
                'earningAggregates {' +
                    'totalCharge90 {' + 'displayValue' + '}' +
                '}' +
            '}' +
            'company {' +
                'agencyDetails {' +
                    'vetted' + '\n' +
                    'topRatedPlusStatus' + '\n' +
                    'topRatedStatus' + '\n' +
                '}' +
            '}' +
            'agencyOffers(' +
                'pagination: { after: "0", first: 50 }' +
                'offerByRootCompanyFilter: {' +
                    'commonFilter: {' +
                        'states_any: [Active, Pending]' +
                    '}' +
                '},' +
                'sortAttribute: {' +
                    'field: "Team",' +
                    'sortOrder: ASC' +
                '}' +
            ') {' +
                'totalCount' + '\n' +
                'edges {' +
                    'node {' +
                        'company {' +
                            'segmentationInformation {' +
                                'segmentDetails {' +
                                    'segmentName' +
                                '}' +
                            '}' +
                        '}' +
                    '}' +
                '}' +
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
            'X-Upwork-API-TenantId': organizationID
        },
        data: JSON.stringify({
            query: graphQuery
        }),
        success: function (result) {
            setChatRoute('agency', 'Freelancer_Support_CX410')

            for (i in result.data.activeSuspensionsForOrganization) {
                processSuspensions(result.data.activeSuspensionsForOrganization[i].shortCode)
            }

            if (result.data.organization.company.agencyDetails !== null) {
                if (result.data.organization.company.agencyDetails.vetted == true) {
                    setPhoneEligibility('agency')
                    setChatEligibility('agency')
                    setEmailEligibility('agency')

                    setChatRoute('agency', 'HV_Freelancer_Support_CX410')
                } else if (result.data.organization.company.agencyDetails.topRatedPlusStatus == 'top_rated_plus') {
                    setPhoneEligibility('agency')
                    setChatEligibility('agency')
                    setEmailEligibility('agency')

                    setChatRoute('agency', 'HV_Freelancer_Support_CX410')
                } else if (result.data.organization.company.agencyDetails.topRatedStatus == 'top_rated') {
                    setPhoneEligibility('agency')
                    setChatEligibility('agency')
                    setEmailEligibility('agency')

                    setChatRoute('agency', 'HV_Freelancer_Support_CX410')
                } else if (result.data.organization.company.agencyDetails.topRatedStatus == 'hipo') {
                    setEmailEligibility('agency')
                }
            }

            if (getContractsWithLBCL(result.data.organization.agencyOffers.totalCount) > 0) {
                setPhoneEligibility('agency')
                setChatEligibility('agency')
                setEmailEligibility('agency')
            }

            if (result.data.organization.agencyProfile !== null) {
                if (result.data.organization.agencyProfile.earningAggregates.totalCharge90 !== null) {
                    if (result.data.organization.agencyProfile.earningAggregates.totalCharge90.displayValue > 3000) {
                        setChatEligibility('agency')
                        setEmailEligibility('agency')

                        setChatRoute('agency', 'HV_Freelancer_Support_CX410')
                    }
                }

                if (result.data.organization.agencyProfile.earningAggregates.totalCharge90 !== null) {
                    if (result.data.organization.agencyProfile.earningAggregates.totalCharge90.displayValue > 3000) {
                        setEmailEligibility('agency')
                    }
                }
            }

            if (result.data.organization.agencyOffers.totalCount > 0) {
                setEmailEligibility('agency')
            }

            let contextsChecks = getCookie(upworkConfig.cookies.prefix + 'contexts-checks')
            if (contextsChecks > 1) {
                contextsChecks--
                setCookieForMins(upworkConfig.cookies.prefix + 'contexts-checks', contextsChecks, 2)
            } else {
                setupChatbotUserMeta()
            }
        }
    })
}

/* Get the client user info. */
function getCLUserInfo (organizationID) {
    setPhoneEligibility('client')
    setChatEligibility('client')
    setEmailEligibility('client')

    let graphQuery = '{' +
        'activeSuspensionsForOrganization(organizationId: ' + organizationID + ') {' +
            'shortCode' +
        '}' +
        'organization {' +
            'subscriptionPlan {' +
                'name' +
            '}' +
            'segmentationInformation {' +
                'segmentDetails {' +
                    'segmentName' +
                '}' +
            '}' +
            'clientOffers(' +
                'pagination: { after: "0", first: 50 }' +
                'sortAttribute: {' +
                    'field: "Team",' +
                    'sortOrder: ASC' +
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
            'X-Upwork-API-TenantId': organizationID
        },
        data: JSON.stringify({
            query: graphQuery
        }),
        success: function (result) {
            for (i in result.data.activeSuspensionsForOrganization) {
                processSuspensions(result.data.activeSuspensionsForOrganization[i].shortCode)
            }

            if (result.data.organization.segmentationInformation.segmentDetails.segmentName == 'LB') {
                setChatRoute('client', 'Premium_Support_CX410')
            } else if (result.data.organization.segmentationInformation.segmentDetails.segmentName == 'MM') {
                setChatRoute('client', 'Premium_Support_CX410')
            } else if (result.data.organization.segmentationInformation.segmentDetails.segmentName == 'SB') {
                setChatRoute('client', 'Premium_Support_CX410')
            } else {
                setChatRoute('client', 'Client_Support_CX410')
            }

            let contextsChecks = getCookie(upworkConfig.cookies.prefix + 'contexts-checks')
            if (contextsChecks > 1) {
                contextsChecks--
                setCookieForMins(upworkConfig.cookies.prefix + 'contexts-checks', contextsChecks, 2)
            } else {
                setupChatbotUserMeta()
            }
        }
    })
}

/* Get the enterprise client user info. */
function getENTUserInfo (organizationID) {
    setPhoneEligibility('client')
    setChatEligibility('client')
    setEmailEligibility('client')

    let graphQuery = '{' +
        'activeSuspensionsForOrganization(organizationId: ' + organizationID + ') {' +
            'shortCode' +
        '}' +
        'organization {' +
            'subscriptionPlan {' +
                'name' +
            '}' +
            'segmentationInformation {' +
                'segmentDetails {' +
                    'segmentName' +
                '}' +
            '}' +
            'clientOffers(' +
                'pagination: { after: "0", first: 50 }' +
                'sortAttribute: {' +
                    'field: "Team",' +
                    'sortOrder: ASC' +
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
            'X-Upwork-API-TenantId': organizationID
        },
        data: JSON.stringify({
            query: graphQuery
        }),
        success: function (result) {
            for (i in result.data.activeSuspensionsForOrganization) {
                processSuspensions(result.data.activeSuspensionsForOrganization[i].shortCode)
            }

            if (result.data.organization.subscriptionPlan.name.indexOf('Enterprise') !== -1 ) {
                let enterpriseSubscriptionPlans = [
                    'Enterprise Business',
                    'Enterprise Standard',
                    'Enterprise Compliance',
                    'Enterprise WPP'
                ]

                if (enterpriseSubscriptionPlans.includes(result.data.organization.subscriptionPlan.name)) {
                    if (! isUserInternal()) {
                        enterpriseLandingPage()
                    }
                }

                setChatRoute('client', 'Premium_Support_CX410')
            } else {
                setChatRoute('client', 'Client_Support_CX410')
            }

            let contextsChecks = getCookie(upworkConfig.cookies.prefix + 'contexts-checks')
            if (contextsChecks > 1) {
                contextsChecks--
                setCookieForMins(upworkConfig.cookies.prefix + 'contexts-checks', contextsChecks, 2)
            } else {
                setupChatbotUserMeta()
            }
        }
    })
}

jQuery(function () {
    if (hasAccessToken() && getCookie('current_organization_uid') !== null) {
        getUserContexts()

        setTimeout(function () {
            if (window.upworkHelp == undefined) {
                fallbackChatbotUserMeta()
            }
        }, 3000)
    }

    isCookieAllowed()

    if (!isUserAnonymous()) {
        if (isUserInternal()) {
            dataLayer.push({'ZDUserRole': 'agent'})
        } else {
            dataLayer.push({'ZDUserRole': 'end_user'})
        }
        let userTypeTag = HelpCenter.user.tags
        dataLayer.push({'UserTypeTag': userTypeTag.join(', ')})

        $('.link-my-requests').attr('href', zdBrands.main.hc.url + '/requests')
        $('.auth-user-name').text(HelpCenter.user.name)
    }
})
