/* Submit Self Auth form request. */
function submitselfAuthForm () {
    let requestBody = []
    if (isUserAnonymous()) {
        requestBody.push('Here is the information to recover my password.' + '\n')
        requestBody.push('Email: ' + $('#request_anonymous_requester_email').val() + '\n')
    } else {
        requestBody.push('Here is the information to recover my password.' + '\n')
        requestBody.push('Email: ' + HelpCenter.user.email + '\n')
    }

    $('#request_custom_fields_' + selfAuthForm.fields.street).val($('#request_custom_fields_address_street').val())
    $('#request_custom_fields_' + selfAuthForm.fields.city).val($('#request_custom_fields_address_city').val())
    $('#request_custom_fields_' + selfAuthForm.fields.state).val($('#request_custom_fields_address_state').val())
    $('#request_custom_fields_' + selfAuthForm.fields.zipCode).val($('#request_custom_fields_address_zip').val())

    dataLayer.push({
        'event': 'customEvent',
        'eventCategory': 'Help Center',
        'eventAction': 'Ticket created',
        'eventLabel': 'Self Auth Form Submitted',
        'metricId': '4',
        'metricValue': '1'
    })

    requestBody.push('Contact Email: ' + getFieldValue(selfAuthForm.fields.contactEmail) + '\n')
    requestBody.push('Phone Number: ' + getFieldValue(selfAuthForm.fields.phoneNumber) + '\n')

    requestBody.push('Street: ' + $('#request_custom_fields_address_street').val() + '\n')
    requestBody.push('City: ' + $('#request_custom_fields_address_city').val() + '\n')
    requestBody.push('State: ' + $('#request_custom_fields_address_state').val() + '\n')
    requestBody.push('Zip Code: ' + $('#request_custom_fields_address_zip').val() + '\n')

    requestBody.push('Joining Date: ' + getFieldValue(selfAuthForm.fields.dateJoining) + '\n')
    requestBody.push('Country: ' + getDropdownSelection(selfAuthForm.fields.country) + '\n')
    requestBody.push('First 6-digits of Credit Card: ' + getFieldValue(selfAuthForm.fields.creditCard) + '\n')
    requestBody.push('Transaction Date: ' + getFieldValue(selfAuthForm.fields.dateTransaction) + '\n')
    requestBody.push('Date PayPal Added: ' + getFieldValue(selfAuthForm.fields.datePaypal) + '\n')

    let tempPassword = $('.request_custom_fields_' + selfAuthForm.fields.tempPassword + ' .radio-option-helper.active').parent().text().trim()
    if (tempPassword != '') {
        requestBody.push('Temp Password: ' + tempPassword + '\n')
    }

    if (checkDropdownSelection(selfAuthForm.fields.userFeedback)) {
        requestBody.push('User Feedback: ' + getDropdownSelection(selfAuthForm.fields.userFeedback) + '\n')

        if (
            getDropdownSelection(selfAuthForm.fields.userFeedback) == 'Other' &&
            getFieldValue(selfAuthForm.fields.otherFeedback) != ''
        ) {
            requestBody.push('Other Feedback: ' +  getFieldValue(selfAuthForm.fields.otherFeedback) + '\n')
        }
    }

    if (getFieldValue(selfAuthForm.fields.addtionalQuestions) != '') {
        requestBody.push('\r\n')
        requestBody.push('Addtional Questions:' + '\r\n')
        requestBody.push('====================' + '\r\n')
        requestBody.push(getFieldValue(selfAuthForm.fields.addtionalQuestions) + '\n')
    }

    $('#request_description').val(requestBody.join(''))

    if ($('#request_anonymous_requester_email').val() != '') {
        if (
            getFieldValue(selfAuthForm.fields.contactEmail) != '' &&
            getFieldValue(selfAuthForm.fields.phoneNumber) != '' &&
            $('#request_custom_fields_address_street').val() != '' &&
            $('#request_custom_fields_address_city').val() != '' &&
            $('#request_custom_fields_address_state').val() != '' &&
            $('#request_custom_fields_address_zip').val() != '' &&
            getFieldValue(selfAuthForm.fields.dateJoining) != '' &&
            checkDropdownSelection(selfAuthForm.fields.country) &&
            getFieldValue(selfAuthForm.fields.creditCard) != '' &&
            getFieldValue(selfAuthForm.fields.dateTransaction) != '' &&
            getFieldValue(selfAuthForm.fields.datePaypal) != ''
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
        if (getQueryParam('ticket_form_id') && getQueryParam('ticket_form_id') == selfAuthForm.form) {

            $('.request-form .form-field').each(function (index, element) {
                $(this).find('label').text($(this).find('p').text())
                $(this).find('p').remove()
            })

            for (i in selfAuthForm.radios) {
                addRadio(selfAuthForm.radios[i])
            }

            for (i in selfAuthForm.dropdowns) {
                addDropdown(selfAuthForm.dropdowns[i])
            }

            addCountryDropdown(selfAuthForm.fields.country)

            if (isUserAnonymous()) {
                $('#navbar-menu-desktop .navbar-nav li:not(:last-child)').remove()
            } else {
                $('#request_custom_fields_'+ selfAuthForm.fields.contactEmail + '_label').text('If you no longer have access to the email address connected to your account, what email address should we contact you at?')
                $('#navbar-menu-desktop .navbar-nav > li').each(function (index, element) {
                    if (! $(this).hasClass('dropdown')) {
                        $(this).remove()
                    }
                })
            }

            if (getQueryParam('self_help')) {
                if (getQueryParam('self_help') == 'security_question_reset') {
                    verifyURLNonce()
                    $('.page-header h2.heading-visitor').text('Security Question Reset')
                    $('#request_subject').val('We see you need help resetting your security question')
                    $('#request_custom_fields_' + selfAuthForm.fields.source).val('security_question_reset')
                } else if (getQueryParam('self_help') == 'account_login') {
                    verifyURLNonce()
                    $('.page-header h2.heading-visitor').text('Two-step Verification Reset')
                    $('#request_subject').val('We see you need help logging in to your account')
                    $('#request_custom_fields_' + selfAuthForm.fields.source).val('account_login')
                } else if (getQueryParam('self_help') == 'access_settings') {
                    verifyURLNonce()
                    $('.page-header h2.heading-visitor').text('Two-step Verification Reset')
                    $('#request_subject').val('We see you need help accessing your settings')
                    $('#request_custom_fields_' + selfAuthForm.fields.source).val('access_settings')
                } else if (getQueryParam('self_help') == 'update_password') {
                    verifyURLNonce()
                    $('.page-header h2.heading-visitor').text('Password Reset')
                    $('#request_subject').val('We see you need help updating your password')
                    $('.request_custom_fields_' + selfAuthForm.fields.tempPassword).hide()
                    $('#request_custom_fields_' + selfAuthForm.fields.source).val('update_password')
                } else if (getQueryParam('self_help') == 'trouble_code') {
                    verifyURLNonce()
                    $('.page-header h2.heading-visitor').text('Two-step Verification Reset')
                    $('#request_subject').val('We see you had trouble with the code we sent to you by text message')
                    $('#request_custom_fields_' + selfAuthForm.fields.source).val('trouble_code')
                }
            } else {
                $('.page-header h2.heading-vistior').text('Reset your Security Information')
                $('#request_subject').val('Reset your Security Information')
                $('#request_custom_fields_' + selfAuthForm.fields.source).val('security_question_reset')
            }

            $('.header-hint').text('Security is critically important at Upwork and we\'re happy to help you regain access to all areas of your Upwork account. In order to do so, we\'ll need you to answer a few questions')

            $('.request_anonymous_requester_email label').text('What’s the email address connected to your Upwork account?')

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
            $('.request_custom_fields_' + selfAuthForm.fields.phoneNumber).after(addressField.join(''))

            $('#request_issue_type_select').parents().eq(0).hide()
            $('#upload-dropzone').parents().eq(0).hide()
            $('#request_subject').parents().eq(0).hide()
            $('#request_description').parents().eq(0).hide()
            $('#request_description').val('')

            $('.request_custom_fields_' + selfAuthForm.fields.street).hide()
            $('.request_custom_fields_' + selfAuthForm.fields.city).hide()
            $('.request_custom_fields_' + selfAuthForm.fields.zipCode).hide()
            $('.request_custom_fields_' + selfAuthForm.fields.source).hide()

            $('.request-form footer input[type="submit"]').hide()
            $('.request-form footer input[type="submit"]').after('<a class="btn btn-primary" href="javascript:submitselfAuthForm()">Submit</a>')
        }
    }
})
