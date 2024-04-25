/* Submit circumvention form request. */
function submitCircumventionForm () {
    if (
        getFieldValue(circumventionForm.fields.name) != '' &&
        getFieldValue(circumventionForm.fields.email) != '' &&
        $('#request_custom_fields_' + circumventionForm.fields.reportingCause + ' ul li').length > 0 &&
        $('#request_description').val() != ''
    ) {
        if (isUserAnonymous()) {
            $('#request_anonymous_requester_email').val($('#request_custom_fields_' + circumventionForm.fields.email).val())
        }
        $('.request-form footer input[type="submit"]').click()
    } else {
        $('#warning-modal .warning-message').text('Please complete all required * fields to ensure we will be able to process your request.')
        $('#warning-modal').modal('show')
    }
}

jQuery(function () {
    if (detectPageTemplates('request-new')) {
        if (getQueryParam('ticket_form_id') && getQueryParam('ticket_form_id') == circumventionForm.form) {
            if (!isUserAnonymous()) {
                $('#request_custom_fields_' + circumventionForm.fields.name).val(HelpCenter.user.name)
                $('#request_custom_fields_' + circumventionForm.fields.email).val(HelpCenter.user.email)
            }

            $('.page-header h2.heading-visitor').text('Report User for Circumvention')
            $('.header-hint').text('If a client or freelancer suggest that you accept or pay outside of Upwork or if you have received unsolicited contact from an Upwork user outside of the platform, please complete the form below. Our staff will investigate and take appropriate action.')

            $('.request_anonymous_requester_email').hide()
            $('.request_description label').text('Details')
            $('#request_description_hint').text('Provide any details related to this report, which can include the user\'s name who is attempting to circumvent or contact you, when, and how you were contacted')

            $('#request_issue_type_select').parents().eq(0).hide()
            $('#upload-dropzone').parents().eq(0).hide()
            $('#request_subject').parents().eq(0).hide()
            $('#request_subject').val('Report User for Circumvention')

            $('.request-form footer input[type="submit"]').hide()
            $('.request-form footer input[type="submit"]').after('<a class="btn btn-primary" href="javascript:submitCircumventionForm()">Submit</a>')
        }
    }
})
