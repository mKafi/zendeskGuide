var oAuthConfig = {
    'authorizePath': '/ab/account-security/oauth2/authorize',
    'tokenPath': '/v3/oauth2/token'
}

/* Check, if has valid access token. */
function hasAccessToken () {
    if (getCookie(upworkConfig.cookies.prefix + 'oauth2-access-token') != null) {
        return true
    } else {
        return false
    }
}

/* Check, if has valid refresh token. */
function hasRefreshToken () {
    if (getCookie(upworkConfig.cookies.prefix + 'oauth2-refresh-token') != null) {
        return true
    } else {
        return false
    }
}

/* Get access token. */
function getAccessToken () {
    if (getCookie(upworkConfig.cookies.prefix + 'oauth2-access-token') != null) {
        return getCookie(upworkConfig.cookies.prefix + 'oauth2-access-token')
    } else {
        return false
    }
}

/* Get authorization code. */
function getAuthorizationCode () {
	var paramArray = {
		'response_type': 'code',
		'client_id': upworkConfig.oauth.clientID,
		'redirect_uri': encodeURI(upworkConfig.oauth.redirectURL)
	}

	var params = '?'
	params += 'response_type=' + paramArray.response_type + '&'
	params += 'client_id=' + paramArray.client_id + '&'
	params += 'redirect_uri=' + paramArray.redirect_uri

    sessionStorage.upworkAuthReturnURL = window.location

    window.location = upworkConfig.url + oAuthConfig.authorizePath + params
}

/* Get access token by auth code. */
function getAccessTokenByCode () {
    var apiParams = {
        'grant_type': 'authorization_code',
        'code': getQueryParam('code'),
        'client_id': upworkConfig.oauth.clientID,
        'client_secret': upworkConfig.oauth.clientSecret,
        'redirect_uri': encodeURI(upworkConfig.oauth.redirectURL)
    }

    $.ajax(upworkConfig.api.baseURL + oAuthConfig.tokenPath, {
        type: 'POST',
        data: apiParams,
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded',
        crossDomain: true,
        success: function (data) {
            setCookieForDays(upworkConfig.cookies.prefix + 'oauth2-access-token', data.access_token, 1)
            setCookieForDays(upworkConfig.cookies.prefix + 'oauth2-refresh-token', data.refresh_token, 14)
            setCookieForDays(upworkConfig.cookies.prefix + 'oauth2-refresh-token-expires', data.expires_in, 14)
            if (sessionStorage.upworkAuthReturnURL) {
                window.location = sessionStorage.upworkAuthReturnURL
                sessionStorage.removeItem('upworkAuthReturnURL')
            } else {
                window.location.reload()
            }
        }
    })
}

/* Get access token by refresh token. */
function getAccessTokenByToken () {
    var apiParams = {
        'grant_type': 'refresh_token',
        'refresh_token': getCookie(upworkConfig.cookies.prefix + 'oauth2-refresh-token'),
        'client_id': upworkConfig.oauth.clientID,
        'client_secret': upworkConfig.oauth.clientSecret
    }

    $.ajax(upworkConfig.api.baseURL + oAuthConfig.tokenPath, {
        type: 'POST',
        data: apiParams,
        dataType: 'json',
        contentType: 'application/x-www-form-urlencoded',
        crossDomain: true,
        success: function (data) {
            setCookieForDays(upworkConfig.cookies.prefix + 'oauth2-access-token', data.access_token, 1)
            setCookieForDays(upworkConfig.cookies.prefix + 'oauth2-refresh-token', data.refresh_token, 14)
            setCookieForDays(upworkConfig.cookies.prefix + 'oauth2-refresh-token-expires', data.expires_in, 14)
            if (sessionStorage.upworkAuthReturnURL) {
                window.location = sessionStorage.upworkAuthReturnURL
                sessionStorage.removeItem('upworkAuthReturnURL')
            } else {
                window.location.reload()
            }
        }
    })
}

/* Setup oauth2 functionalities. */
function oAuthSetup () {
    if (hasAccessToken() == false) {
        if (hasRefreshToken() == false) {
            if (getQueryParam('code')) {
                getAccessTokenByCode()
            } else {
                getAuthorizationCode()
            }
        } else {
            getAccessTokenByToken()
        }
    }
}
