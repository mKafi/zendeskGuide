/* Apply throttle rules for chatbot. */
function applyThrottles () {
	if (isUserAnonymous()) {
		if (
			detectPageTemplates('home') ||
			detectPageTemplates('categories') ||
			detectPageTemplates('sections') ||
			detectPageTemplates('articles') ||
			detectPageTemplates('search')
		) {
			$('.support-bot-widget').removeClass('support-bot-widget-default')
		} else if (detectPageTemplates('request-new')) {
			if (getQueryParam('ticket_form_id')) {
				if (getQueryParam('ticket_form_id') != defaultForm.form) {
					$('.support-bot-widget-default').remove()
				} else {
					$('.support-bot-widget').removeClass('support-bot-widget-default')
				}
			}
		} else {
			$('.support-bot-widget-default').remove()
		}
	} else {
		if (
			getCookie(upworkConfig.cookies.prefix + 'user-enterprise-org') !== null ||
			isUserTagExists('tag_suspended_accounting_company_suspended_auto') ||
			isUserTagExists('tag_suspended_excessive_disputes_mq')
		) {
			$('.support-bot-widget-default').remove()
		} else {
			if (
				detectPageTemplates('home') ||
				detectPageTemplates('categories') ||
				detectPageTemplates('sections') ||
				detectPageTemplates('articles') ||
				detectPageTemplates('search')
			) {
				$('.support-bot-widget').removeClass('support-bot-widget-default')
			} else if (detectPageTemplates('request-new')) {
				if (getQueryParam('ticket_form_id')) {
					if (getQueryParam('ticket_form_id') != defaultForm.form) {
						$('.support-bot-widget-default').remove()
					} else {
						$('.support-bot-widget').removeClass('support-bot-widget-default')
					}
				} else {
					$('.support-bot-widget').removeClass('support-bot-widget-default')
				}
			} else {
				$('.support-bot-widget-default').remove()
			}
		}
	}
}
