/* Submit direct contract form request. */
function submitDirectContractForm () {
	if ($('#request_description').val() != '') {
        if (getQueryParam('src')) {
            if (directContractForm.articles.indexOf(parseInt(getQueryParam('src'))) !== -1) {
                $('#request_custom_fields_' + directContractForm.fields.url).val(zdBrands.main.hc.url + '/articles/' + getQueryParam('src'))
            }
        }
		$('.request-form footer input[type="submit"]').click()
	} else {
        $('#warning-modal .warning-message').text('Please complete all required * fields to ensure we will be able to process your request.')
        $('#warning-modal').modal('show')
    }
}

jQuery(function () {
    if (detectPageTemplates('request-new')) {
        if (getQueryParam('ticket_form_id') && getQueryParam('ticket_form_id') == directContractForm.form) {

        	$('.page-header h2.heading-visitor').text('Direct Contracts Request')
            $('.header-hint').text('Your question about Direct Contracts will be passed to an agent on the Direct Contracts team who will personally respond as soon as possible.')

            $('#request_description_hint').text('Please enter the details of your request. A member of our Direct Contracts team will respond as soon as possible.')

            $('#request_issue_type_select').parents().eq(0).hide()
        	$('#upload-dropzone').parents().eq(0).hide()
        	$('#request_subject').parents().eq(0).hide()
        	$('#request_subject').val('Direct Contracts Request')
            $('#request_custom_fields_' + directContractForm.fields.url).parents().eq(0).hide()

            if (getQueryParam('src')) {
                if (directContractForm.articles.indexOf(parseInt(getQueryParam('src'))) !== -1) {
                    $('#request_custom_fields_' + directContractForm.fields.url).val(zdBrands.main.hc.url + '/articles/' + getQueryParam('src'))
                } else {
                    window.location = zdBrands.main.hc.url
                }
            } else {
                window.location = zdBrands.main.hc.url
            }
        	$('.request-form footer input[type="submit"]').hide()
            $('.request-form footer input[type="submit"]').after('<a class="btn btn-primary" href="javascript:submitDirectContractForm()">Submit</a>')
        }
    } else if (detectPageTemplates('articles')) {
        /* Add direct contract support flow to article pages. */
        if (directContractForm.articles.indexOf(parseInt(articleID)) !== -1) {
            setTimeout(function () {
                $('.btn-support-bot').addClass('btn-direct-contract').removeClass('btn-support-bot')
                $('.btn-direct-contract').attr('onclick', 'window.location = zdBrands.main.hc.url + "/requests/new?ticket_form_id=" + directContractForm.form + "&src=" + articleID')
            }, 3000)
        }
    }
})
