/* Submit appeal form request. */
function submitAppealForm () {
	if (isUserAnonymous()) {
		if (
			$('#request_anonymous_requester_email').val() != '' &&
			$('#request_description').val() != '' &&
			getFieldValue(appealForm.fields.country) != ''
		) {
			$('.request-form footer input[type="submit"]').click()
		} else {
			$('#warning-modal .warning-message').text('Please complete all required * fields to ensure we will be able to process your request.')
			$('#warning-modal').modal('show')
		}
	} else {
		if (
			$('#request_description').val() != '' &&
			getFieldValue(appealForm.fields.country) != ''
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
        if (getQueryParam('ticket_form_id') && getQueryParam('ticket_form_id') == appealForm.form) {
			verifyURLNonce()

			$('.page-header h2.heading-vistior').text('Submit Suspension Appeal')
			$('.header-hint').html('We understand the importance of maintaining access to your account. We will carefully review your appeal request and reply back within 48 hours. Please note that some reviews may take longer than estimated and submitting multiple requests will delay our time to review and respond. Duplicate requests may also appear as \‘solved\’ as they are merged into the original ticket. If you\’ve already contacted us, you can see and update your ticket <a href="' + zdBrands.main.hc.url + '/requests">here</a>. Thank you!')

			$('#request_issue_type_select').parents().eq(0).hide()
			$('#upload-dropzone').parents().eq(0).hide()

			$('#request_subject').parents().eq(0).hide()
			$('#request_subject').val('Suspension Appeal Form Submission')

			$('.request-form footer input[type="submit"]').hide()
			$('.request-form footer input[type="submit"]').after('<a class="btn btn-primary" href="javascript:submitAppealForm()">Submit</a>')
        }
    }
})
