/* Submit feedback removal form request. */
function submitFeedbackRemovalForm () {
    let answerImpacted = $('.request_custom_fields_' + feedbackRemovalForm.fields.impacted + ' .radio-option-helper.active').parent().text().trim()
    if (
        answerImpacted == 'Yes' &&
        getFieldValue(feedbackRemovalForm.fields.howImpacted) != '' &&
        getFieldValue(feedbackRemovalForm.fields.contractID) != ''
    ) {
        $('.request-form footer input[type="submit"]').click()
    } else {
        $('#warning-modal .warning-message').text('Please complete all required * fields to ensure we will be able to process your request.')
        $('#warning-modal').modal('show')
    }
}

jQuery(function () {
    if (detectPageTemplates('request-new')) {
        if (getQueryParam('ticket_form_id') && getQueryParam('ticket_form_id') == feedbackRemovalForm.form) {

            $('.page-header h2.heading-visitor').text('Feedback Removal Request')
            $('.header-hint').text('If you were impacted by a recent global event and, as a result, received negative feedback, let us know through the form below.')
            $('.header-hint').after('<p class="header-hint">Be sure to provide as many details as possible. We’ll determine whether the feedback can be removed and email you back.</p><p class="header-hint">Please give us at least 48 hours––we want to make sure we have time to carefully review your request.</p>')

            if (isUserAnonymous()) {
				window.location.href = '/login?return_to=' + encodeURI(window.location.href)
			}

            for (i in feedbackRemovalForm.radios) {
                addRadio(feedbackRemovalForm.radios[i])
            }

			$('#request_issue_type_select').parents().eq(0).hide()
            $('#upload-dropzone').parents().eq(0).hide()

            $('#request_subject').parents().eq(0).hide()
            $('#request_subject').val('Feedback Removal Request')
            $('#request_custom_fields_' + feedbackRemovalForm.fields.contractID + '_hint').html('Find your contract ID <a href="https://www.upwork.com/d/contracts" target="_blank">here</a>.')
            $('#request_description_label').text('What feedback would you like us to review and potentially remove?')
            $('#request_description_hint').text('You can copy and paste the feedback that you’d like to remove.')


            $('.request-form footer input[type="submit"]').hide()
            $('.request-form footer input[type="submit"]').after('<a class="btn btn-primary" href="javascript:submitFeedbackRemovalForm()">Submit</a>')
        }
    }
})
