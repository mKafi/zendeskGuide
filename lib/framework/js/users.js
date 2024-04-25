/* Check, if user tag exists. */
function isUserTagExists (tag) {
    if ($.isArray(tag)) {
        let flag = false
        for (i in tag) {
            for (j in HelpCenter.user.tags) {
                if (tag[i] == HelpCenter.user.tags[j]) {
                    flag = true
                }
            }
        }
        if (flag == true) {
            return true
        } else {
            return false
        }
    } else {
        return $.inArray(tag, HelpCenter.user.tags) != -1
    }
}

/* Check, if user belongs to specific group. */
function isUserGroup (group) {
    for (i in HelpCenter.user.groups) {
        if (HelpCenter.user.groups[i].name == group) {
            return true
        }
    }
    return false
}

/* Check, if user anonymous. */
function isUserAnonymous () {
    if (HelpCenter.user.role == 'anonymous') {
        return true
    } else {
        return false
    }
}

/* Check, if user Upwork Corp. */
function isUserUpworkCorp () {
    let getUserInfo = JSON.parse(getCookie(upworkConfig.cookies.prefix + 'user-info'))

    if (getUserInfo !== null) {
        if (/@upwork.com\s*$/.test(getUserInfo.useremail)) {
            return true
        } else if (/@cloud.upwork.com\s*$/.test(getUserInfo.useremail)) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }
}

/* Check, if user agent. */
function isUserAgent () {
    let internalRoles = ['agent', 'manager']

    if (internalRoles.includes(HelpCenter.user.role)) {
        return true
    } else {
        return false
    }
}

/* Check, if user internal. */
function isUserInternal () {
    if (isUserUpworkCorp() || isUserAgent()) {
        return true
    } else {
        return false
    }
}

/* Check, if user CL. */
function isUserClient () {
    if (getCurrentUserContext() == 'client') {
        return true
    } else {
        if (isUserTagExists('tag_primary_client')) {
            return true
        } else {
            return false
        }
    }
}

/* Check, if user agency. */
function isUserAgency () {
    if (getCurrentUserContext() == 'agency') {
        return true
    } else {
        if (isUserTagExists('tag_primary_agency')) {
            return true
        } else {
            return false
        }
    }
}

/* Check, if user FL. */
function isUserFreelancer () {
    if (getCurrentUserContext() == 'freelancer') {
        return true
    } else {
        if (isUserTagExists('tag_primary_freelancer')) {
            return true
        } else {
            return false
        }
    }
}

/* Check, if user enterprise CL / FL. */
function isUserEnterprise () {
    if (getCurrentUserContext() == 'enterprise') {
        return true
    } else {
        if (
            isUserTagExists('tag_cl_vsbplus') ||
            isUserTagExists('tag_cl_small_business') ||
            isUserTagExists('tag_cl_mid_market') ||
            isUserTagExists('tag_cl_large_business')
        ) {
            return true
        } else {
            return false
        }
    }
}

/* Get, the primary user type. */
function getPrimaryUserType () {
    if (isUserEnterprise()) {
        return 'EN'
    } else if (isUserClient()) {
        return 'CL'
    } else if (isUserAgency()) {
        return 'AG'
    } else if (isUserFreelancer()) {
        return 'FL'
    } else {
        return 'FL'
    }
}

/* Get current user context. */
function isUserSyncDone () {
    if (getCookie(upworkConfig.cookies.prefix + 'user-sync')) {
        return true
    } else {
        return false
    }
}

/* Get current user context. */
function getCurrentUserContext () {
    return getCookie(upworkConfig.cookies.prefix + 'current-user-context')
}

/* Check, is limited admission. */
function isLimitedAdmission () {
    if (getCookie(upworkConfig.cookies.prefix + 'suspensions-nonadmission') == 'true') {
        return true
    } else {
        return false
    }
}

/* Check, is unsuccessful FL. */
function isUnsuccessfulFL () {
    if (getCookie(upworkConfig.cookies.prefix + 'suspensions-excessive-disputes') == 'true') {
        return true
    } else {
        return false
    }
}

/* Check, is financial hold. */
function isFinancialHold () {
    if (getCookie(upworkConfig.cookies.prefix + 'suspensions-finance-failed-charge') == 'true') {
        return true
    } else {
        return false
    }
}

/* Get the phone eligibility. */
function getPhoneEligibility (context) {
    return getCookie(upworkConfig.cookies.prefix + context + '-eligibility-email')
}

/* Get the chat eligibility. */
function getChatEligibility (context) {
    return getCookie(upworkConfig.cookies.prefix + context + '-eligibility-chat')
}

/* Get the email eligibility. */
function getEmailEligibility (context) {
    return getCookie(upworkConfig.cookies.prefix + context + '-eligibility-email')
}

/* Get the chat route. */
function getChatRoute (context) {
    return getCookie(upworkConfig.cookies.prefix + context + '-chat-route')
}
