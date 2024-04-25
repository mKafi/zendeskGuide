/* Submit any hire form request. */
function submitAnyHireForm () {
    if (
        getFieldValue(anyHireForm.fields.email) != '' &&
        getFieldValue(anyHireForm.fields.freelancers) != '' &&
        checkDropdownSelection(anyHireForm.fields.category)
    ) {
        if (isUserAnonymous()) {
            $('#request_anonymous_requester_email').val($('#request_custom_fields_' + anyHireForm.fields.email).val())
        }
        $('.request-form footer input[type="submit"]').click()
    } else {
        $('#warning-modal .warning-message').text('Please complete all required * fields to ensure we will be able to process your request.')
        $('#warning-modal').modal('show')
    }
}

jQuery(function () {
    if (detectPageTemplates('request-new')) {
        if (getQueryParam('ticket_form_id') && getQueryParam('ticket_form_id') == anyHireForm.form) {

            $('.page-header h2.heading-visitor').text('Import existing \'Bring Your Own Talent\' contracts to Any Hire')
            $('.header-hint').text('Fill in the form below to have your Bring Your Own Talent contracts transitioned to Any Hire. You will not be charged until you review the contract(s) on Any Hire (including pricing) and send them to your talent for acceptance. There is no fee to transfer your contract/s.')

            if (isUserAnonymous()) {
				$('.request_anonymous_requester_email').hide()
			}

            for (i in anyHireForm.dropdowns) {
                addDropdown(anyHireForm.dropdowns[i])
            }

			$('#request_issue_type_select').parents().eq(0).hide()
            $('#upload-dropzone').parents().eq(0).hide()

            $('#request_subject').parents().eq(0).hide()
            $('#request_subject').val('Import existing \'Bring Your Own Talent\' contracts to Any Hire')
            $('#request_description').parents().eq(0).hide()
            $('#request_description').val('Import existing \'Bring Your Own Talent\' contracts to Any Hire')

            $('.request-form footer input[type="submit"]').hide()
            $('.request-form footer input[type="submit"]').after('<a class="btn btn-primary" href="javascript:submitAnyHireForm()">Submit</a>')

            $('.request-form footer .btn-primary').after('<p>*Note: Requests will be processed within 1 business day</p>')
        }
    }
})
