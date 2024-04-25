/* Open Chatbot widget. */
function openChatbot () {
	if (getCookie(upworkConfig.cookies.prefix + 'status-widget-visibility') == 'true') {
		statusWidget('btn-next-bot', 'Contact support')
		Forethought('widget', 'hide')
	} else {
		initChatbot()
	}
}

/* Initialize Chatbot widget. */
function initChatbot () {
	Forethought('widget', 'show')
	Forethought('widget', 'open')
}

/* Initialize delayed Chatbot widget. */
function initDelayedChatbot () {
	setTimeout(function () {
		initChatbot()
	}, 3000)
}

/* Setup fallback Chatbot meta for logged in users. */
function fallbackChatbotUserMeta () {
	let chatbotMeta = {
		'logged': true,
		'email': HelpCenter.user.email,
		'name': HelpCenter.user.name,
		'accesstoken': getAccessToken(),
		'customhandoff': 'launchpad'
	}

	window.upworkHelp = {
		'chatbot': {
			'meta': chatbotMeta
		}
	}

	/* Verify user authenticity. */
	verifyUserAuthenticity()

	/* Setup the chatbot. */
	setupChatbot()
}

/* Verify user authenticity. */
function verifyUserAuthenticity () {
	$.ajax(zdBrands.main.api + '/users/me.json', {
		type: 'GET',
		dataType: 'json',
		contentType: 'application/json',
		xhrFields: {
			withCredentials: true
		},
		crossDomain: true,
		success: function (data) {
			if (getCookie(upworkConfig.cookies.prefix + 'user-info') != null) {
				let getUserInfo = JSON.parse(getCookie(upworkConfig.cookies.prefix + 'user-info'))
				if (data.user.email !== getUserInfo.useremail) {


					if (getCookie('reset-cookies') === null) {
						setCookieForMins('reset-cookies', true, 5)
						deleteAllCookies()
						window.location.href = zdBrands.main.hc.url
					} else {
						if (getCookie('reset-cookies') !== 'true') {
							setCookieForMins('reset-cookies', true, 5)
							deleteAllCookies()
							window.location.href = zdBrands.main.hc.url
						}
					}
				}
			}
		}
	})
}

/* Setup Chatbot meta for logged in users. */
function setupChatbotUserMeta () {
	setCookieForMins(upworkConfig.cookies.prefix + 'user-sync', true, 10)

	let getUserInfo = JSON.parse(getCookie(upworkConfig.cookies.prefix + 'user-info'))
	let getUserContexts = JSON.parse(getCookie(upworkConfig.cookies.prefix + 'has-user-contexts'))

	let chatbotMeta = {
		'logged': true,
		'email': HelpCenter.user.email,
		'name': HelpCenter.user.name,
		'firstname': getUserInfo.firstname,
		'lastname': getUserInfo.lastname,
		'country': getUserInfo.country,
		'accesstoken': getAccessToken(),
		'hasfreelancer': getUserContexts.freelancer,
		'hasagency': getUserContexts.agency,
		'hasclient': getUserContexts.client,

		/* new */
		'chatroutefreelancer': getCookie(upworkConfig.cookies.prefix + 'freelancer-chat-route') != null ? getCookie(upworkConfig.cookies.prefix + 'freelancer-chat-route') : 'Freelancer_Support_CX410',
		'chatrouteagency': getCookie(upworkConfig.cookies.prefix + 'agency-chat-route') != null ? getCookie(upworkConfig.cookies.prefix + 'agency-chat-route') : 'Freelancer_Support_CX410',
		'chatrouteclient': getCookie(upworkConfig.cookies.prefix + 'client-chat-route') != null ? getCookie(upworkConfig.cookies.prefix + 'client-chat-route') : 'Freelancer_Support_CX410',

		'eligiblephonefreelancer': getCookie(upworkConfig.cookies.prefix + 'freelancer-eligibility-phone'),
		'eligiblechatfreelancer': getCookie(upworkConfig.cookies.prefix + 'freelancer-eligibility-chat'),
		'eligibleticketfreelancer': getCookie(upworkConfig.cookies.prefix + 'freelancer-eligibility-email'),

		'eligiblephoneagency': getCookie(upworkConfig.cookies.prefix + 'agency-eligibility-phone'),
		'eligiblechatagency': getCookie(upworkConfig.cookies.prefix + 'agency-eligibility-chat'),
		'eligibleticketagency': getCookie(upworkConfig.cookies.prefix + 'agency-eligibility-email'),

		'eligiblephoneclient': getCookie(upworkConfig.cookies.prefix + 'client-eligibility-phone'),
		'eligiblechatclient': getCookie(upworkConfig.cookies.prefix + 'client-eligibility-chat'),
		'eligibleticketclient': getCookie(upworkConfig.cookies.prefix + 'client-eligibility-email'),

		'freelancerverified': getCookie(upworkConfig.cookies.prefix + 'freelancer-verified'),
		'freelancerhasearnings': getCookie(upworkConfig.cookies.prefix + 'freelancer-has-earnings'),
		'freelancerhasactivecontact': getCookie(upworkConfig.cookies.prefix + 'freelancer-has-active-contact'),
		'freelancerlearningpath': getCookie(upworkConfig.cookies.prefix + 'freelancer-learning-path'),

		'usertags': HelpCenter.user.tags.join(','),
		/* new */

		/* will be deprecated */
		'usertype': getPrimaryUserType(),
		/* will be deprecated */

		'limitedadmission': getCookie(upworkConfig.cookies.prefix + 'suspensions-nonadmission'),
		'unsuccessfulfl': getCookie(upworkConfig.cookies.prefix + 'suspensions-excessive-disputes'),
		'financialhold': getCookie(upworkConfig.cookies.prefix + 'suspensions-finance-failed-charge'),
		'idbcsuspension': getCookie(upworkConfig.cookies.prefix + 'idbc-suspension')
	}

	/* will be deprecated */
	if (getPrimaryUserType() == 'CL') {
		chatbotMeta.eligibility = getCookie(upworkConfig.cookies.prefix + 'client-eligibility-email')
		chatbotMeta.eligiblephone = getCookie(upworkConfig.cookies.prefix + 'client-eligibility-phone')
		chatbotMeta.eligiblechat = getCookie(upworkConfig.cookies.prefix + 'client-eligibility-chat')
		chatbotMeta.eligibleticket = getCookie(upworkConfig.cookies.prefix + 'client-eligibility-email')
		chatbotMeta.chatroute = getCookie(upworkConfig.cookies.prefix + 'client-chat-route')
	} else if (getPrimaryUserType() == 'AG') {
		chatbotMeta.eligibility = getCookie(upworkConfig.cookies.prefix + 'agency-eligibility-email')
		chatbotMeta.eligiblephone = getCookie(upworkConfig.cookies.prefix + 'agency-eligibility-phone')
		chatbotMeta.eligiblechat = getCookie(upworkConfig.cookies.prefix + 'agency-eligibility-chat')
		chatbotMeta.eligibleticket = getCookie(upworkConfig.cookies.prefix + 'agency-eligibility-email')
		chatbotMeta.chatroute = getCookie(upworkConfig.cookies.prefix + 'agency-chat-route')
	} else if (getPrimaryUserType() == 'FL') {
		chatbotMeta.eligibility = getCookie(upworkConfig.cookies.prefix + 'freelancer-eligibility-email')
		chatbotMeta.eligiblephone = getCookie(upworkConfig.cookies.prefix + 'freelancer-eligibility-phone')
		chatbotMeta.eligiblechat = getCookie(upworkConfig.cookies.prefix + 'freelancer-eligibility-chat')
		chatbotMeta.eligibleticket = getCookie(upworkConfig.cookies.prefix + 'freelancer-eligibility-email')
		chatbotMeta.chatroute = getCookie(upworkConfig.cookies.prefix + 'freelancer-chat-route')
	}
	/* will be deprecated */

	window.upworkHelp = {
		'chatbot': {
			'meta': chatbotMeta
		}
	}

	window.usabilla_live('data',
		{
			'custom': {
				'user_uid': getCookie(upworkConfig.cookies.prefix + 'user'),
				'org_uid': getCookie('current_organization_uid')
			}
		}
	)

	/* Verify user authenticity. */
	verifyUserAuthenticity()

	/* Setup custom handoff for chatbot. */
	customHandoff()

	/* Setup the chatbot. */
	setupChatbot()
}

/* Setup custom handoff for chatbot. */
function customHandoff () {
	let chatbotMeta = {}
	chatbotMeta = window.upworkHelp.chatbot.meta
	if (detectPageTemplates('request-new')) {
		if (getQueryParam('ticket_form_id')) {
			if (getQueryParam('ticket_form_id') == defaultForm.form) {
				chatbotMeta["initial-intent-id"] = '81659e2b-42e2-42eb-98cd-0487a7b53736'
			}
		} else {
			chatbotMeta["initial-intent-id"] = '81659e2b-42e2-42eb-98cd-0487a7b53736'
		}
	}
	window.upworkHelp.chatbot.meta = chatbotMeta
}

/* Setup metadata for chatbot. */
function setupChatbotMeta () {
	if (isUserAnonymous()) {
		let chatbotMeta = {}

		window.upworkHelp = {
			'chatbot': {
				'meta': chatbotMeta
			}
		}

		/* Setup custom handoff for chatbot. */
		customHandoff()

		/* Setup the chatbot. */
		setupChatbot()

	}
}

/* Setup the chatbot. */
function setupChatbot () {
	/* Enable simplified experience. */
	if (isUserAnonymous()) {
		nonEnterpriseLandingPage()
	} else {
		if (getCookie(upworkConfig.cookies.prefix + 'user-enterprise-org') == null) {
			nonEnterpriseLandingPage()
		}
	}

	let chatbotOptions = {
		'id': 'upwork-chatbot',
		'key': zdBrands.main.chatbot.key,
		'track': false

	}
	loadScript(zdBrands.main.chatbot.script, 'chatbot', chatbotOptions, function () {
		setTimeout(function () {
			applyThrottles()
		}, 1500)
		setTimeout(function () {
			applyThrottles()
		}, 5000)
	})
}

jQuery(function () {

	/* Setup metadata for chatbot. */
	setupChatbotMeta()

	/* Initialize Chatbot. */
	$('body').on('click', '.btn-support-bot, .btn-link-chatbot', function () {
		openChatbot()
	})

	/* Initialize Chatbot widget from status widget. */
	$('#confirmation-modal').on('click', '.btn-next-bot', function () {
		$('#confirmation-modal').modal('hide')
		initChatbot()
	})
})
