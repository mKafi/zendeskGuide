/* Submit default form request. */
function submitDefaultForm () {
	if (!isUserAnonymous()) {
		if (
			$('#request_subject').val() != '' &&
			$('#request_description').val() != '' &&
			checkDropdownSelection(defaultForm.fields.reason)
		) {
			$('.request-form footer input[type="submit"]').click()
		} else {
			$('#warning-modal .warning-message').text('Please complete all required * fields to ensure we will be able to process your request.')
			$('#warning-modal').modal('show')
		}
	}
}

/* Handle the click event for the User Context nav tab. */
function clickUserContextNavTab (scope) {
	$('#user-contexts-nav-tabs .nav-tabs > div').removeClass('active')
	$('#user-contexts-nav-tabs a[href="#tab-pane-' + scope + '"]').click()
	$('#user-contexts-nav-tabs a[href="#tab-pane-' + scope + '"]').parents().eq(0).addClass('active')
	getCommonSearches(scope)
}

/* Set the default tab for the User Context nav tab. */
function setDefaultUserContextNavTab () {
	if (isUserAnonymous()) {
		$('#user-contexts-tab-content .tab-pane').show()
	} else {
		if ($('#user-contexts-tab-content .tab-pane').length == 1) {
			$('#user-contexts-tab-content .tab-pane').show()
		} else {
			if (getCookie(upworkConfig.cookies.prefix + 'user-enterprise-org') == null) {
				if (getCookie(upworkConfig.cookies.prefix + 'user-tab') !== null) {
					clickUserContextNavTab(getCookie(upworkConfig.cookies.prefix + 'user-tab'))
				} else {
					if (isUserClient()) {
						setCookieForDays(upworkConfig.cookies.prefix + 'user-context', 'client', 1)
						clickUserContextNavTab('client')
					} else if (isUserAgency()) {
						setCookieForDays(upworkConfig.cookies.prefix + 'user-context', 'agency', 1)
						clickUserContextNavTab('agency')
					} else if (isUserFreelancer()) {
						setCookieForDays(upworkConfig.cookies.prefix + 'user-context', 'freelancer', 1)
						clickUserContextNavTab('freelancer')
					}
				}
			}
		}
	}
}

/* Hide the default form. */
function hideDefaultForm () {
	$('header').hide()
	$('#new_request').hide()
	$('#section-smf').hide()
	$('.main .container').hide()
}

/* Set the contact page hero. */
function setContactPageHero () {
	let output = []
	output.push('<section class="section-hero">')
	output.push('<div class="container assets-hero">')
	output.push('<h1 class="heading-vistior">')
	output.push('Find a solution fast.')
	output.push('</h1>')
	output.push('<p class="sub-head">Search hundreds of articles on Upwork Help</p>')
	output.push('<div class="search-box">')
	output.push('<form role="search" class="search" data-search="" data-instant="true" autocomplete="off" action="/hc/en-us/search" accept-charset="UTF-8" method="get">')
	output.push('<input name="utf8" type="hidden" value="âœ“" autocomplete="off">')
	output.push('<input type="search" name="query" id="query" placeholder="Search Articles" autocomplete="off" aria-label="Search Articles">')
	output.push('<button name="commit" type="submit" value="Search" aria-label="Search"><span class="air-icon-search"></span></button>')
	output.push('</form>')
	output.push('</div>')
	output.push('<div class="common-search-container">')
	output.push('Common searches:')
	output.push('<ul><li><a href="' + zdBrands.main.hc + '/search?utf8=âœ“&amp;query=connects">connects</a>,</li><li><a href="https://support.upwork.com/hc/en-us/search?utf8=âœ“&amp;query=work diary">work diary</a>,</li><li><a href="https://support.upwork.com/hc/en-us/search?utf8=âœ“&amp;query=get paid">get paid</a></li></ul>')
	output.push('</div>')
	output.push('</div>')
	output.push('</section>')

	$('header').before(output.join(''))
}

/* Get the contact page hero. */
function getContactPageContexts () {
	let output = []
	let currentContext = ''

	if (isUserAnonymous()) {
		output.push('<section id="section-user-contexts" class="section-user-contexts">')
		output.push('<div id="user-contexts-nav-tabs" class="user-contexts-nav-tabs text-center">')
		output.push('<div class="container">')
		output.push('<div class="row">')
		output.push('<h2 class="heading-vistior">')
		output.push('How can we help?')
		output.push('</h2>')
		output.push('<p class="sub-head">For personalized service and full visibility of the contact options available for your account, please <a class="link-log-in">log in</a>.</p>')
		output.push('</div>')
		output.push('</div>')
		output.push('</div>')
		output.push('</section>')

		output.push('<div id="user-contexts-tab-content" class="user-contexts-tab-content">')
		output.push('<div class="container">')
		output.push('<div class="row">')
		output.push('<div class="col-xs-12">')
		output.push('<div class="tab-content">')
			output.push('<div id="tab-pane-visitor" class="tab-pane" role="tabpanel" data-tab="visitor">')
				output.push('<div class="tab-pane-container">')
					output.push(addSupportOption('community'))
					output.push(addSupportOption('academy'))
					output.push(addSupportOption('visitor-chat'))
				output.push('</div>')
			output.push('</div>')
		output.push('</div>')
		output.push('</div>')
		output.push('</div>')
		output.push('</div>')
		output.push('</div>')
	} else {
		let getUserContexts = JSON.parse(getCookie(upworkConfig.cookies.prefix + 'has-user-contexts'))
		let contextLoop = Object.keys(getUserContexts)

		let actualContextLoop = []
		for (i in contextLoop) {
			if (getUserContexts[contextLoop[i]] == true) {
				actualContextLoop.push(contextLoop[i])
			}
		}

		if (actualContextLoop.length == 1) {
			output.push('<section id="section-user-contexts" class="section-user-contexts">')
			output.push('<div id="user-contexts-nav-tabs" class="user-contexts-nav-tabs text-center">')
			output.push('<div class="container">')
			output.push('<div class="row">')
			output.push('<h2 class="heading-vistior">')
			output.push('How can we help?')
			output.push('</h2>')
			if (getCookie(upworkConfig.cookies.prefix + 'freelancer-chat-route') == 'LI_Freelancer_Support_CX410') {
				output.push('<p class="sub-head">To elevate your support experience and outcomes on Upwork, consider completing our <a href="https://community.upwork.com/t5/New-to-Upwork-Getting-Started/tkb-p/NewtoUpwork101-2">introductory learning path</a></p>')
			}
			output.push('</div>')
			output.push('</div>')
			output.push('</div>')
			output.push('</section>')
		} else {
			output.push('<section id="section-user-contexts" class="section-user-contexts">')
			output.push('<div id="user-contexts-nav-tabs" class="user-contexts-nav-tabs text-center">')
			output.push('<div class="container">')
			output.push('<div class="row">')
			output.push('<h2 class="heading-vistior">')
			output.push('Select the profile presenting the issue')
			output.push('</h2>')
			output.push('<div class="nav-tabs-container">')
			output.push('<div class="nav nav-tabs" role="tablist">')

			for (i in actualContextLoop) {
				output.push('<div role="presentation">')
				output.push('<a class="tab-link-' + actualContextLoop[i] + '" href="#tab-pane-' + actualContextLoop[i] + '" aria-controls="tab-pane-' + actualContextLoop[i] + '" role="tab" data-toggle="tab">')
				output.push(actualContextLoop[i].charAt(0).toUpperCase() + actualContextLoop[i].slice(1))
				output.push('</a>')
				output.push('</div>')
			}

			output.push('</div>')
			output.push('</div>')
			output.push('</div>')
			output.push('</div>')
			output.push('</div>')
			output.push('</section>')
		}

		output.push('<div id="user-contexts-tab-content" class="user-contexts-tab-content">')
		output.push('<div class="container">')

		if (actualContextLoop.length > 1) {
			output.push('<div class="row">')
			output.push('<h3 class="heading-vistior text-center">')
			output.push('How can we help?')
			output.push('</h3>')
			output.push('</div>')
		}

		output.push('<div class="row">')
		output.push('<div class="col-xs-12">')
		output.push('<div class="tab-content">')

		for (i in actualContextLoop) {
			currentContext = actualContextLoop[i]

			output.push('<div id="tab-pane-' + currentContext + '" class="tab-pane" role="tabpanel" data-tab="' + currentContext + '">')

				let eligibilityOPtions = 2
				if (getCookie(upworkConfig.cookies.prefix + currentContext + '-eligibility-phone') == 'true') {
					eligibilityOPtions++
				}

				if (getCookie(upworkConfig.cookies.prefix + currentContext + '-eligibility-chat') == 'true') {
					eligibilityOPtions++
				}

				if (getCookie(upworkConfig.cookies.prefix + currentContext + '-eligibility-email') == 'true') {
					eligibilityOPtions++
				}

				if (currentContext == 'freelancer') {
					if (getCookie(upworkConfig.cookies.prefix + 'freelancer-chat-route') == 'LI_Freelancer_Support_CX410') {
						eligibilityOPtions++
					}
				}

				if (eligibilityOPtions > 4) {
					output.push('<div class="tab-pane-container tab-pane-container-left">')
				} else {
					output.push('<div class="tab-pane-container">')
				}

				if (currentContext == 'client') {
					if (getCookie(upworkConfig.cookies.prefix + currentContext + '-eligibility-phone') == 'true') {
						output.push(addSupportOption('phone', 3))
					}

					if (getCookie(upworkConfig.cookies.prefix + currentContext + '-eligibility-chat') == 'true') {
						output.push(addSupportOption('chat', 3))
					}

					if (getCookie(upworkConfig.cookies.prefix + currentContext + '-eligibility-email') == 'true') {
						output.push(addSupportOption('email', 3))
					}

					output.push(addSupportOption('community', 2))
					output.push(addSupportOption('academy', 2))

				} else {
					if (eligibilityOPtions > 4) {
						output.push(addSupportOption('community', 2))
						output.push(addSupportOption('academy', 2))

						if (currentContext == 'freelancer') {
							if (getCookie(upworkConfig.cookies.prefix + 'freelancer-chat-route') == 'LI_Freelancer_Support_CX410') {
								output.push(addSupportOption('visitor-chat', 3))
							}
						}

						if (getCookie(upworkConfig.cookies.prefix + currentContext + '-eligibility-phone') == 'true') {
							output.push(addSupportOption('phone', 3))
						}

						if (getCookie(upworkConfig.cookies.prefix + currentContext + '-eligibility-chat') == 'true') {
							output.push(addSupportOption('chat', 3))
						}

						if (getCookie(upworkConfig.cookies.prefix + currentContext + '-eligibility-email') == 'true') {
							output.push(addSupportOption('email', 3))
						}
					} else {
						output.push(addSupportOption('community', 4))
						output.push(addSupportOption('academy', 4))

						if (currentContext == 'freelancer') {
							if (getCookie(upworkConfig.cookies.prefix + 'freelancer-chat-route') == 'LI_Freelancer_Support_CX410') {
								output.push(addSupportOption('visitor-chat', 4))
							}
						}

						if (getCookie(upworkConfig.cookies.prefix + currentContext + '-eligibility-phone') == 'true') {
							output.push(addSupportOption('phone', 4))
						}

						if (getCookie(upworkConfig.cookies.prefix + currentContext + '-eligibility-chat') == 'true') {
							output.push(addSupportOption('chat', 4))
						}

						if (getCookie(upworkConfig.cookies.prefix + currentContext + '-eligibility-email') == 'true') {
							output.push(addSupportOption('email', 4))
						}
					}
				}



				output.push('</div>')
			output.push('</div>')
		}

		output.push('</div>')
		output.push('</div>')
		output.push('</div>')

		output.push('<div class="row text-center">')
			output.push('<h4 class="heading-vistior text-center">')
				output.push('<a href="' + zdBrands.main.hc.url + '/requests">View My Requests</a>')
			output.push('</h4>')
		output.push('</div>')

		output.push('</div>')
		output.push('</div>')
	}

	$('.main').prepend(output.join(''))

	setDefaultUserContextNavTab()
}

/* Add support option. */
function addSupportOption (option, column = 4) {
	let output = []
	output.push('<div class="user-contexts-category user-contexts-category-' + column + ' ' + supportTreatments[option].name + '">')
	output.push('<a href="javascript:void(0)">')
	output.push('<div class="icon-container">')
	output.push('<span class="icon-svg-' + supportTreatments[option].icon + '"></span>')
	output.push('</div>')
	output.push('<div class="text-container">')
	output.push('<h3>' + supportTreatments[option].title + '</h3>')
	output.push('<p>' + supportTreatments[option].description + '</p>')
	output.push('</div>')
	output.push('</a>')
	output.push('</div>')
	return output.join('')
}

/* Show the call us modal for phone support. */
function showCallUsModal () {
	resetConfirmationModal()
	$('#confirmation-modal .modal-title').text('Phone Support')

	let output = []
	output.push('<div class="contact-flow-call-us-widget">')
	output.push('<h2 class="heading-vistior text-primary text-center">Call us on the phone!</h2>')
	output.push('<div class="text-center">')
	output.push('You can reach our agents <strong>Monday to Friday,</strong> from 12 am to 11:59 pm (PST) at')
	output.push('</div>')
	output.push('<h2 class="heading-vistior text-primary text-center">+1 (855) 676-3375</h2>')
	output.push('</div>')
	$('#confirmation-modal .modal-body').html(output.join(''))

	$('#confirmation-modal').modal('show')
	$('.modal-footer').remove()
}

jQuery(function () {
	if (detectPageTemplates('request-new')) {
		if (getQueryParam('ticket_form_id')) {
			if (getQueryParam('ticket_form_id') == defaultForm.form) {
				hideDefaultForm()
				/**
				 * @todo
				*/
				if (isDebugging()) {
					setContactPageHero()
					getContactPageContexts()
				}
			}
		} else {
			window.location = zdBrands.main.hc.url + '/requests/new?ticket_form_id=' + defaultForm.form
		}
	}

	$('main').on('click', '.user-contexts-category.community', function () {
		window.location = communityURL
	})

	$('main').on('click', '.user-contexts-category.academy', function () {
		window.location = communityURL + '/t5/Academy/ct-p/Academy'
	})

	$('main').on('click', '.user-contexts-category.email', function () {
		if (window.event.ctrlKey) {
			$('header').show()
			$('.main .container').show()
			$('#new_request').show()

			$('.section-hero').hide()
			$('#section-user-contexts').hide()
			$('#user-contexts-tab-content').hide()
			$('#request_issue_type_select').parents().eq(0).hide()

			for (i in defaultForm.dropdowns) {
				addDropdown(defaultForm.dropdowns[i])
			}

			$('.request-form footer input[type="submit"]').hide()
			$('.request-form footer input[type="submit"]').after('<a class="btn btn-primary" href="javascript:submitDefaultForm()">Submit</a>')
		} else {
			window.updateChatbotMeta({
				"initial-intent-id": 'b1c4b578-7af2-474e-93ff-13e481722d3b'
			}, true)
		}
	})

	$('main').on('click', '.user-contexts-category.visitor-chat', function () {
		window.updateChatbotMeta({
			"initial-intent-id": '81659e2b-42e2-42eb-98cd-0487a7b53736'
		}, true)
	})

	$('main').on('click', '.user-contexts-category.chat', function () {
		window.updateChatbotMeta({
			"initial-intent-id": 'e74c290-bb05-43e2-9521-dcc46b10fb32'
		}, true)
	})

	$('main').on('click', '.user-contexts-category.phone', function () {
		showCallUsModal()
	})

	$('main').on('click', '#user-contexts-nav-tabs .nav-tabs div a', function () {
		let getTheScope = $(this).attr('href').replace('#tab-pane-', '')
		setCookieForHours(upworkConfig.cookies.prefix + 'user-tab', getTheScope, 1)
		getCommonSearches(getTheScope)

		$('#user-contexts-nav-tabs .nav-tabs > div').removeClass('active')
		$('#user-contexts-nav-tabs a[href="#tab-pane-' + getTheScope + '"]').parents().eq(0).addClass('active')
	})
})
