/* Get url parts in array. */
function getUrlPartsArray () {
	return window.location.pathname.split('/')
}

/* Detect page templates. */
function detectPageTemplates (template) {
	switch (template) {
		case 'request-new':
			if (urlPartsArray[3] == 'requests' && urlPartsArray[4] == 'new') {
				return true
			}
			break
		case 'requests-list':
			if (urlPartsArray[3] == 'requests' && urlPartsArray[4] == undefined) {
				return true
			} else if (urlPartsArray[3] == 'requests' && urlPartsArray[4] == 'ccd') {
				return true
			}
			break
		case 'request-single':
			if (urlPartsArray[3] == 'requests' && urlPartsArray[4] != undefined && urlPartsArray[4] != 'new') {
				return true
			}
			break
		case 'home':
			if (urlPartsArray[1] == 'hc') {
				if (urlPartsArray[3] == undefined || urlPartsArray[3] == '') {
					return true
				}
			}
			break
		case 'categories':
			if (urlPartsArray[3] == 'categories') {
				return true
			}
			break
		case 'sections':
			if (urlPartsArray[3] == 'sections') {
				return true
			}
			break
		case 'articles':
			if (urlPartsArray[3] == 'articles') {
				return true
			}
			break
		case 'search':
			if (urlPartsArray[3] == 'search') {
				return true
			}
			break
	}
}

/* Set cookie for day(s). */
function setCookieForDays (name, value, days) {
	let expires = ''
	if (days) {
		let date = new Date()
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000))
		expires = '; expires=' + date.toGMTString()
	}

	document.cookie = name + '=' + value + expires + '; path=/'
}

/* Set cookie for hours(s). */
function setCookieForHours (name, value, hours) {
	let expires = ''
	if (hours) {
		let date = new Date()
		date.setTime(date.getTime() + (hours * 60 * 60 * 1000))
		expires = '; expires=' + date.toGMTString()
	}

	document.cookie = name + '=' + value + expires + '; path=/'
}

/* Set cookie for min(s). */
function setCookieForMins (name, value, mins) {
	let expires = ''
	if (mins) {
		let date = new Date()
		date.setTime(date.getTime() + (mins * 60 * 1000))
		expires = '; expires=' + date.toGMTString()
	}

	document.cookie = name + '=' + value + expires + '; path=/'
}

/* Get cookie value. */
function getCookie (name) {
	name = name + '='
	let cookies = document.cookie.split(';')

	for (i in cookies) {
		let cookie = cookies[i]
		if (cookie.charAt(0) == ' ') {
			cookie = cookie.substring(1, cookie.length)
		}
		if (cookie.indexOf(name) == 0) {
			return cookie.substring(name.length, cookie.length)
		}
	}

	return null
}

/* Delete a cookie. */
function deleteCookie (name) {
	let expires = '; expires=' + 'Thu, 01 Jan 1970 00:00:01 GMT' + '; path=/'
	document.cookie = name + "=" + expires
}

/* Delete all cookies. */
function deleteAllCookies () {

	// Get an array of cookies
	let getCookies = document.cookie.split(';')

	for (i in getCookies) {
		let cookie = getCookies[i].trim().split('=')

		let cookieName = cookie[0]

		if (cookieName.indexOf(upworkConfig.cookies.prefix) !== -1) {
			deleteCookie(cookieName)
		}
	}
}

/* Is cookie allowed. */
function isCookieAllowed () {
	let receiveCookies = function (event) {
		try {
			let response = JSON.parse(event.data)
			if (response.thirdParty == 'blocked') {
				if (getCookie(upworkConfig.cookies.prefix + 'cookies-consent') != 'yes') {
					$('#alert-cookies-consent').show()
					$('#ajax-loader-overlay').remove()
				}
			}
		} catch (error) { }
	}
	window.addEventListener('message', receiveCookies, false)
}

/* Set query parameter. */
function setQueryParam (uri, name, value) {
	let regex = new RegExp('([?&])' + name + '=.*?(&|$)', 'i')
	let separator = uri.indexOf('?') !== -1 ? '&' : '?'
	if (uri.match(regex)) {
		return uri.replace(regex, '$1' + name + '=' + value + '$2')
	} else {
		return uri + separator + name + '=' + value
	}
}

/* Get query parameter. */
function getQueryParam (name) {
	name = name.replace(/[\[]/, '\\\[').replace(/[\]]/, '\\\]')
	let regexSring = '[\\?&]' + name + '=([^&#]*)'
	let regex = new RegExp(regexSring)
	let rerponse = regex.exec(window.location.search)
	if (rerponse == null) {
		return ''
	} else {
		return decodeURIComponent(rerponse[1].replace(/\+/g, ' '))
	}
}

/* Load the script. */
function loadScript (uri, scope, options = false, callback = null) {
	let head = document.getElementsByTagName('head')[0]
	let style = document.createElement('link')
	let script = document.createElement('script')

	if (scope == 'styles') {
		style.rel = 'stylesheet'
		style.type = 'text/css'
		style.href = uri
		style.media = 'all'
		style.setAttribute('id', options.id)
		head.appendChild(style)
	} else if (scope == 'scripts') {
		script.src = uri
		script.type = 'text/javascript'
		script.setAttribute('id', options.id)

		if (callback != null) {
			script.onload = function () {
				callback()
			}
		}

		head.appendChild(script)
	} else if (scope == 'chatbot') {
		script.src = uri
		script.type = 'text/javascript'
		script.setAttribute('id', options.id)
		script.setAttribute('data-key', options.key)
		script.setAttribute('data-track-events', options.track)

		if (callback != null) {
			script.onload = function () {
				callback()
			}
		}

		head.appendChild(script)
	}
}

/* Check, if debugging is enabled? */
function isDebugging () {
	if (getQueryParam('debug')) {
		setCookieForHours(upworkConfig.cookies.prefix + 'debug', true, 1)
		return true
	} else {
		if (getCookie(upworkConfig.cookies.prefix + 'debug')) {
			return true
		} else {
			return false
		}
	}
}


/* Get the url parts in array. */
let urlPartsArray = getUrlPartsArray()
