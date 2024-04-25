/* Submit enterprise form request. */
function submitEnterpriseForm () {
    if (! isUserAnonymous()) {
		if (
			$('#request_description').val() != '' &&
			getFieldValue(enterpriseForm.fields.company) != '' &&
            checkDropdownSelection(enterpriseForm.fields.reason)
		) {
			$('.request-form footer input[type="submit"]').click()
		} else {
			$('#warning-modal .warning-message').text('Please complete all required * fields to ensure we will be able to process your request.')
			$('#warning-modal').modal('show')
		}
	}
}

jQuery(function () {
    if (detectPageTemplates('request-new')) {
        if (getQueryParam('ticket_form_id') && getQueryParam('ticket_form_id') == enterpriseForm.form) {
			if (isUserAnonymous()) {
				window.location.href = zdBrands.main.hc.url
			} else {
				if (
					getCookie(upworkConfig.cookies.prefix + 'user-enterprise-org') !== null ||
					isUserInternal()
				) {
					sessionStorage.upworkEnterpriseSupport = true

					$('.request_custom_fields_' + enterpriseForm.fields.company).hide()
					if (getCookie(upworkConfig.cookies.prefix + 'user-enterprise-company-name') != null) {
						$('#request_custom_fields_' + enterpriseForm.fields.company).val(getCookie(upworkConfig.cookies.prefix + 'user-enterprise-company-name'))
					}

					$('.page-header h2.heading-vistior').text('Contact our Support Team')
					$('.header-hint').html('Our agents are happy to help you!<br>Create your request and describe your issue in detail. Our agents will review your case and will be in touch with you within the next 2 hours.')

					$('#request_issue_type_select').parents().eq(0).hide()

					if (! isUserAnonymous()) {
						let getUserInfo = JSON.parse(getCookie(upworkConfig.cookies.prefix + 'user-info'))

						let output = []
						output.push('<div class="form-field string">')
							output.push('<label>Email</label>')
							output.push('<input type="text" value="' + getUserInfo.useremail + '" readonly aria-required="false">')
						output.push('</div>')
						$('.request_custom_fields_' + enterpriseForm.fields.phone).before(output.join(''))
					}

					for (i in enterpriseForm.dropdowns) {
						addDropdown(enterpriseForm.dropdowns[i])
					}

					if (getQueryParam('flow')) {
						let getFlowOption = $('.request_custom_fields_' + enterpriseForm.fields.reason + ' .dropdown-menu .option-' + getQueryParam('flow')).text()
						$('#request_custom_fields_' + enterpriseForm.fields.reason).val(getQueryParam('flow'))
						$('.request_custom_fields_' + enterpriseForm.fields.reason + ' .btn-dropdown').text(getFlowOption)
					}


					let getSourceValue = ''
					let getSourceKey = ''
					if (getQueryParam('src')) {
						if (getQueryParam('src') == 'hc') {
							getSourceValue = 'Upwork Help'
							getSourceTag = 'upwork_help'
						} else {
							getSourceValue = 'Enterprise Home'
							getSourceKey = 'enterprise_home'
						}
					} else {
						getSourceValue = 'Enterprise Home'
						getSourceKey = 'enterprise_home'
					}

					$('.request_custom_fields_' + enterpriseForm.fields.source).hide()
					$('#request_custom_fields_' + enterpriseForm.fields.source).val(getSourceKey)
					$('.request_custom_fields_' + enterpriseForm.fields.source + ' .btn-dropdown').text(getSourceValue)

					$('#request_subject').parents().eq(0).hide()
					$('#request_subject').val('Enterprise Support Request')

					$('#request_description_label').text('Tell us more about your inquiry')
					$('#request_description_hint').hide()

					$('.request-form footer input[type="submit"]').hide()
					$('.request-form footer input[type="submit"]').after('<a class="btn btn-primary" href="javascript:submitEnterpriseForm()">Submit</a>')

					$('.request-form footer').css('margin-bottom', '50px')
					$('.request-form footer .btn-primary').after('<a style="display: block" href="/hc/en-us">Go to Help Home</a>').css('margin-bottom', '30px')
				} else {
					window.location.href = zdBrands.main.hc.url
				}
			}
		}
	}

	if (detectPageTemplates('home')) {
		if (
			getQueryParam('action') &&
			getQueryParam('action') == 'enterprise-form-submit'
		) {
			resetConfirmationModal()
			$('#confirmation-modal .modal-title').text('Enterprise Support')

			let output = []
			output.push('<div class="confirmation-modal-enterprise-support">')
				output.push('<h2 class="heading-vistior text-center text-primary">Thank you!</h2>')
				output.push('<div class="text-center">')
					output.push('<p>Your request number is #' + getQueryParam('id') + '</p>')
					output.push('<p>Please allow us at least <strong>2 hours</strong> for one of our agents to reach out to you.</p>')
					output.push('<p>You can visit <strong>My Requests</strong> or reply to our email notification to update your request.</p>')
				output.push('</div>')
			output.push('</div>')
			$('#confirmation-modal .modal-body').html(output.join(''))

			if ($(window).width() > 767) {
				$('#confirmation-modal .modal-dialog').css('margin', '5% auto')
			}

			output = []
			output.push('<a class="btn btn-primary" style="margin-left:20px" href="/hc/en-us">Go to Help Home</a>')
			output.push('<a class="btn btn-primary" href="/hc/en-us/requests">Visit My Requests</a>')
			$('#confirmation-modal .modal-footer').html(output.join(''))

			$('#confirmation-modal').modal('show')
		}
	}

	if (detectPageTemplates('request-single')) {
		if (sessionStorage.upworkEnterpriseSupport == 'true') {
			setTimeout(function () {
                if ($('strong').filter(function () { return $(this).text() === 'Your request was successfully submitted.' }).length == 1) {

					sessionStorage.upworkEnterpriseSupport = false

					$('strong').filter(function () { return $(this).text() === 'Your request was successfully submitted.' }).parents().eq(2).remove()

					let queryString = setQueryParam(zdBrands.main.hc.url, 'action', 'enterprise-form-submit')
					queryString = setQueryParam(queryString, 'id', requestID)
					window.location.href = queryString
				}
            }, 100)
		}
	}
})
