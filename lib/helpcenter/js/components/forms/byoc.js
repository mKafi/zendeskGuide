/* Submit BYOC form request. */
function submitBYOCForm () {
    if (
        getFieldValue(byocForm.fields.email) != '' &&
        getFieldValue(byocForm.fields.signup) != '' &&
		getFieldValue(byocForm.fields.haveClient) != ''
    ) {
        $('.request-form footer input[type="submit"]').click()
    } else {
        $('#warning-modal .warning-message').text('Please complete all required * fields to ensure we will be able to process your request.')
        $('#warning-modal').modal('show')
    }
}

jQuery(function () {
    if (detectPageTemplates('request-new')) {
        if (getQueryParam('ticket_form_id') && getQueryParam('ticket_form_id') == byocForm.form) {

            $('.page-header h2.heading-vistior').text('Bring Your Own Client - Freelancer Plus promotion')
            $('.header-hint').text('Enjoy a 0% service fee when you bring new clients to Upwork when you sign up for Freelancer Plus between May 26, 2023 to June 30, 2023. This offer is valid until September 30, 2023.')
            $('.header-hint').after('<p style="margin-top:20px;">Note - The client must be an entirely new user here in Upwork, and should not have any existing associated Upwork account. For anyone that signed up between March 14, 2023 to March 31, 2023, this offer is valid until June 30, 2023.</p>')


            if (isUserAnonymous()) {
				window.location.href = '/login?return_to=' + encodeURI(window.location.href)
			}

            $('#request_issue_type_select').parents().eq(0).hide()
            $('#upload-dropzone').parents().eq(0).hide()

            $('#request_subject').parents().eq(0).hide()
            $('#request_subject').val('Bring Your Own Client - Freelancer Plus promotion')
            $('#request_description').parents().eq(0).hide()
            $('#request_description').val('Bring Your Own Client - Freelancer Plus promotion')

            $('.request-form footer input[type="submit"]').hide()
            $('.request-form footer input[type="submit"]').after('<a class="btn btn-primary" href="javascript:submitBYOCForm()">Submit</a>')

            $('.request-form footer .btn-primary').after('<p>Thanks in advance for providing this information! We\'re happy to help and we\'ll be in touch with your client link in 2 business days.</p>')
        }
    }
})
