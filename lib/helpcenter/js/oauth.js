jQuery(function () {
    if (isUserAnonymous()) {
        $('.link-log-in').attr('href', '/hc/en-us/signin?return_to=' + encodeURI(window.location))

        deleteAllCookies()
	} else {
        $('.link-log-out').attr('href', '/access/logout?return_to=' + encodeURI(window.location))

		if (hasAccessToken()) {
			$.ajax(upworkConfig.api.baseURL + '/auth/v1/info.json', {
				type: 'GET',
				dataType: 'json',
				contentType: 'application/json',
				crossDomain: true,
				headers: {
					'Authorization': 'Bearer ' + getAccessToken()
				},
				success: function (data) {
					dataLayer.push({
						'event': 'profile_id',
						'UpworkUID': data.info.profile_url
					})
				}
			})
		}
    }
})
