/* Submit Video/Voice Call Assistance form request. */
function submitVideoVoiceForm () {
	if (
        getFieldValue(videoVoiceForm.fields.date) != '' &&
        getFieldValue(videoVoiceForm.fields.time) != '' &&
        getFieldValue(videoVoiceForm.fields.device) != '' &&
        $('#request_description').val() != '' &&
        getFieldValue(videoVoiceForm.fields.troubleshooting) != ''
    ) {
        $('.request-form footer input[type="submit"]').click()
	} else {
        $('#warning-modal .warning-message').text('Please complete all required * fields to ensure we will be able to process your request.')
        $('#warning-modal').modal('show')
    }
}

jQuery(function () {
    if (detectPageTemplates('request-new')) {
        if (getQueryParam('ticket_form_id') && getQueryParam('ticket_form_id') == videoVoiceForm.form) {
        	if (!isUserAnonymous()) {
                $('.page-header h2.heading-vistior').text('Video/Voice Call Assistance Request')
                $('.header-hint').html('Thank you for contacting Upwork Support about your video or voice call experience. To better help us address your issue, please provide the following details. Be sure to also check out <a href="' + zdBrands.main.hc.url + '/articles/' + kbLinks.articles.videoVoice + '" taget="_blank">Pro Tips for Upwork Calls</a> for information about common issues and resolutions.')

                $('#request_issue_type_select').parents().eq(0).hide()
                $('#upload-dropzone').parents().eq(0).hide()
            	$('#request_subject').parents().eq(0).hide()
                $('#request_subject').val('Video/Voice Call Assistance Request')

                $('#request_description_label').text('Details of the issue you faced')
                $('#request_description_hint').text('')

                $('.request-form footer input[type="submit"]').hide()
                $('.request-form footer input[type="submit"]').after('<a class="btn btn-primary" href="javascript:submitVideoVoiceForm()">Submit</a>')
            } else {
                window.location = zdBrands.main.hc.url
            }
        }
    }
})
