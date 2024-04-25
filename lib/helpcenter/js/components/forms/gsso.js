/* Submit GSSO form request. */
function submitGSSOForm () {
    let requestBody = []
    if (isUserAnonymous()) {
        requestBody.push('Here is the information to update Email and Enable Sign In with Password.' + '\n')
        requestBody.push('Email: ' + $('#request_anonymous_requester_email').val() + '\n')
    } else {
        requestBody.push('Here is the information to update Email and Enable Sign In with Password.' + '\n')
        requestBody.push('Email: ' + HelpCenter.user.email + '\n')
    }

    $('#request_custom_fields_' + gssoForm.fields.street).val($('#request_custom_fields_address_street').val())
    $('#request_custom_fields_' + gssoForm.fields.city).val($('#request_custom_fields_address_city').val())
    $('#request_custom_fields_' + gssoForm.fields.city).val($('#request_custom_fields_address_state').val())
    $('#request_custom_fields_' + gssoForm.fields.zipCode).val($('#request_custom_fields_address_zip').val())

    dataLayer.push({
        'event': 'customEvent',
        'eventCategory': 'Help Center',
        'eventAction': 'Ticket created',
        'eventLabel': 'GSSO Form Submitted',
        'metricId': '4',
        'metricValue': '1'
    })

    requestBody.push('Contact Email: ' + getFieldValue(gssoForm.fields.contactEmail) + '\n')
    requestBody.push('Phone Number: ' + getFieldValue(gssoForm.fields.phoneNumber) + '\n')

    requestBody.push('Street: ' + $('#request_custom_fields_address_street').val() + '\n')
    requestBody.push('City: ' + $('#request_custom_fields_address_city').val() + '\n')
    requestBody.push('City: ' + $('#request_custom_fields_address_state').val() + '\n')
    requestBody.push('Zip Code: ' + $('#request_custom_fields_address_zip').val() + '\n')

    requestBody.push('Joining Date: ' + getFieldValue(gssoForm.fields.dateJoining) + '\n')
    requestBody.push('Country: ' + getDropdownSelection(gssoForm.fields.country) + '\n')
    requestBody.push('First 6-digits of Credit Card: ' + getFieldValue(gssoForm.fields.creditCard) + '\n')
    requestBody.push('Transaction Date: ' + getFieldValue(gssoForm.fields.dateTransaction) + '\n')
    requestBody.push('Date PayPal Added: ' + getFieldValue(gssoForm.fields.datePaypal) + '\n')

    $('#request_description').val(requestBody.join(''))

    if ($('#request_anonymous_requester_email').val() != '') {
        if (
            getFieldValue(gssoForm.fields.contactEmail) != '' &&
            getFieldValue(gssoForm.fields.phoneNumber) != '' &&
            $('#request_custom_fields_address_street').val() != '' &&
            $('#request_custom_fields_address_city').val() != '' &&
            $('#request_custom_fields_address_zip').val() != '' &&
            getFieldValue(gssoForm.fields.dateJoining) != '' &&
            checkDropdownSelection(gssoForm.fields.country) &&
            getFieldValue(gssoForm.fields.creditCard) != '' &&
            getFieldValue(gssoForm.fields.dateTransaction) != '' &&
            getFieldValue(gssoForm.fields.datePaypal) != ''
        ) {
            $('.request-form footer input[type="submit"]').click()
        } else {
            $('#warning-modal .warning-message').text('Please complete all required * fields to ensure we will be able to process your request.')
            $('#warning-modal').modal('show')
        }
    } else {
        $('#warning-modal .warning-message').text('Please complete all required * fields to ensure we will be able to process your request.')
        $('#warning-modal').modal('show')
    }
}

jQuery(function () {
    if (detectPageTemplates('request-new')) {
        if (getQueryParam('ticket_form_id') && getQueryParam('ticket_form_id') == gssoForm.form) {
            $('.page-header h2.heading-visitor').text('Update Email and Enable Sign In with Password')

            let output = []
            output.push('<p>If you have enabled \'Sign in with Google\' and have lost access to your Google account, please complete the form below in it\'s entirely to reset your email and enable sign-in with a password.</p>')
            $('.header-hint').html(output.join(''))

            output = []
            output.push('<p>We\'ll need you to verify you\'re the account owner in order to update your email address and disable \'Sign in with Google\'. The email you list as your \'Alternative Contact Email\' will be set as the new primary email on your account.</p>')
            $('.header-hint').after(output.join(''))

            $('.request-form .form-field').each(function (index, element) {
                $(this).find('label').text($(this).find('p').text())
                $(this).find('p').remove()
            })

            addCountryDropdown(gssoForm.fields.country)

            $('.request_anonymous_requester_email label').text('What’s the email address connected to your Upwork account?')
            $('.request_custom_fields_' + gssoForm.fields.contactEmail + ' label').text('To enable sign in with password we\'ll need to update your email address and disable \'Sign in with Google\'. Please provide us with the new email address you\'d like to use for this purpose.')

            let addressField = []
            addressField.push('<div class="form-field required">')
                addressField.push('<label id="request_custom_fields_address_label" for="request_custom_fields_address">')
                    addressField.push('What address do you have on file with us?')
                addressField.push('</label>')
                addressField.push('<input type="text" id="request_custom_fields_address_street" class="request_custom_fields_address_street" aria-required="true" placeholder="street">')
                addressField.push('<input type="text" id="request_custom_fields_address_city" class="request_custom_fields_address_city" aria-required="true" placeholder="city">')
                addressField.push('<input type="text" id="request_custom_fields_address_state" class="request_custom_fields_address_state" aria-required="true" placeholder="state">')
                addressField.push('<input type="text" id="request_custom_fields_address_zip" class="request_custom_fields_address_zip" aria-required="true" placeholder="zip">')
            addressField.push('</div>')
            $('.request_custom_fields_' + gssoForm.fields.phoneNumber).after(addressField.join(''))

            $('#request_issue_type_select').parents().eq(0).hide()
            $('#upload-dropzone').parents().eq(0).hide()
            $('#request_subject').parents().eq(0).hide()
            $('#request_subject').val('Request for upwork login due to GSSO failed')
            $('#request_description').parents().eq(0).hide()
            $('#request_description').val('')

            $('.request_custom_fields_' + gssoForm.fields.street).hide()
            $('.request_custom_fields_' + gssoForm.fields.city).hide()
            $('.request_custom_fields_' + gssoForm.fields.zipCode).hide()

            $('.request-form footer').prepend('<p class="footer-hint">Before submitting your request, please ensure that the above information is accurate and complete. Any missing or incorrect information may impede our ability to verify your account.</p>')

            $('.request-form footer input[type="submit"]').hide()
            $('.request-form footer input[type="submit"]').after('<a class="btn btn-primary" href="javascript:submitGSSOForm()">Submit</a>')
        }
    }
})
