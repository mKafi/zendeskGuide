/* Get Talent World field value. */
function getTalentWorldFieldValue (key) {
    return $('#request_custom_fields_' + key).val()
}

/* Submit Talent World form request. */
function submitTalentWorldForm () {
    if (isUserAnonymous()) {
        $('#request_anonymous_requester_email').val($('#request_custom_fields_' + talentWorldForm.fields.email).val())
    }

    let requestBody = []
    requestBody.push('Talent World Registration.' + '\n')
    requestBody.push('First Name: ' + getTalentWorldFieldValue(talentWorldForm.fields.firstName) + '\n')
    requestBody.push('Last Name: ' + getTalentWorldFieldValue(talentWorldForm.fields.lastName) + '\n')
    requestBody.push('Email: ' + getTalentWorldFieldValue(talentWorldForm.fields.email) + '\n')

    if (checkDropdownSelection(talentWorldForm.fields.primaryFieldWork)) {
        requestBody.push('Primary field of work: ' + getDropdownSelection(talentWorldForm.fields.primaryFieldWork) + '\n')

        if (
             getDropdownSelection(talentWorldForm.fields.primaryFieldWork) == 'Other' &&
            getTalentWorldFieldValue(talentWorldForm.fields.otherFieldWork) != ''
        ) {
            requestBody.push('Other primary field of work: ' + getTalentWorldFieldValue(talentWorldForm.fields.otherFieldWork) + '\n')
        }
    }

    requestBody.push('Upwork profile link: ' + getTalentWorldFieldValue(talentWorldForm.fields.upworkProfileLink) + '\n')

    if (checkDropdownSelection(talentWorldForm.fields.country)) {
        requestBody.push('Country: ' + getDropdownSelection(talentWorldForm.fields.country) + '\n')
    }

    $('#request_description').val(requestBody.join(''))

	if (
        getTalentWorldFieldValue(talentWorldForm.fields.firstName) != '' &&
        getTalentWorldFieldValue(talentWorldForm.fields.lastName) != '' &&
        getTalentWorldFieldValue(talentWorldForm.fields.email) != '' &&
        checkDropdownSelection(talentWorldForm.fields.primaryFieldWork) &&
        getTalentWorldFieldValue(talentWorldForm.fields.upworkProfileLink) != '' &&
        checkDropdownSelection(talentWorldForm.fields.country)
    ) {
        if (
            getDropdownSelection(talentWorldForm.fields.primaryFieldWork) == 'Other' &&
            getTalentWorldFieldValue(talentWorldForm.fields.otherFieldWork) == ''
        ) {
            $('#warning-modal .warning-message').text('Please complete all required * fields to ensure we will be able to process your request.')
            $('#warning-modal').modal('show')
        } else {
            $('.request-form footer input[type="submit"]').click()
        }
	} else {
        $('#warning-modal .warning-message').text('Please complete all required * fields to ensure we will be able to process your request.')
        $('#warning-modal').modal('show')
    }
}

jQuery(function () {
    if (detectPageTemplates('request-new')) {
        if (getQueryParam('ticket_form_id') && getQueryParam('ticket_form_id') == talentWorldForm.form) {

            if (isUserAnonymous()) {
                $('#navbar-menu-desktop .navbar-nav li:not(:last-child)').remove()

                $('#request_anonymous_requester_email').parents().eq(0).hide()
            } else {
                $('#navbar-menu-desktop .navbar-nav > li').each(function (index, element) {
                    if (! $(this).hasClass('dropdown')) {
                        $(this).remove()
                    }
                })

                $('#request_custom_fields_' + talentWorldForm.fields.email).parents().eq(0).hide()
                $('#request_custom_fields_' + talentWorldForm.fields.email).val(HelpCenter.user.email)
            }

            for (i in talentWorldForm.dropdowns) {
                addDropdown(talentWorldForm.dropdowns[i])
            }

            addCountryDropdown(talentWorldForm.fields.country)

            $('#navbar-searchbar-desktop').remove()
            $('.breadcrumb').remove()

            $('.page-header h2.heading-visitor').text('Talent World Registration')

            $('.header-hint').html('We may communicate with you regarding this event and other Upwork services. Your information is protected by Upwork\'s Privacy Policy.')

            $('#request_issue_type_select').parents().eq(0).hide()
            $('#upload-dropzone').parents().eq(0).hide()
        	$('#request_subject').parents().eq(0).hide()
            $('#request_subject').val('Talent World Registration')
            $('#request_description').parents().eq(0).hide()

            $('.request-form footer input[type="submit"]').hide()
            $('.request-form footer input[type="submit"]').after('<a class="btn btn-primary" href="javascript:submitTalentWorldForm()">Register Now</a>')
        }
    }
})
