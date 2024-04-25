jQuery(function () {
    if (getQueryParam('action') && getQueryParam('action') == 'bug-report') {
    	if (isUserAnonymous()) {
            window.location.href = '/login?return_to=' + encodeURIComponent(window.location.href)
        } else {
        	if (isUserInternal()) {
		        resetConfirmationModal()
		    	addConfirmationModalBtn('btn-bug-message', 'Send')
		        $('#confirmation-modal .modal-title').text('Report a bug')

		    	let output = []
			    output.push('<p>This form is used to submit minor bugs and errors to the Upwork Help team. If you have discovered a major bug, please escalate to Technical Support and contact the Help team directly on Dash: Asif Iqbal, Diego San Miguel, Joe Wang</p>')
			    output.push('<p>Use Ctrl+Alt+A or Ctrl+Alt+S to take a screenshot using the desktop app and attach an image link.</p>')

			    output.push('<div class="form-group">')
			    	output.push('<label for="request-description">Please describe the issue</label>')
			    	output.push('<textarea id="request-description" class="form-control" name="request-description"></textarea>')
			    output.push('</div>')
			    $('#confirmation-modal .modal-body').html(output.join(''))

			    $('#confirmation-modal .modal-footer .btn-link').hide()
			    $('#confirmation-modal').modal('show')

			    $('.btn-bug-message').click(function () {
			        let requesterEmail = HelpCenter.user.email
			        let requestSubject = 'HC bug from ' + HelpCenter.user.name
			        let requestBody = $('#request-description').val()
			        let requestTags = [ 'hc_bug' ]
			        let customFields = [
			            {
			            	'id': defaultForm.fields.reason,
			            	'value': 'tag_cat_system_issues'
			            }
			        ]
			        let messageTitle = 'Report a bug'
			        let errorMessage = '<p>Our apologies. Something went wrong.</p><p>Your message was not submitted.</p>'
			        let successMessage = '<p>Thanks for your message! If we have any questions, we will reach out via Dash.</p>'
			        submitRequest(requesterEmail, requestSubject, requestBody, requestTags, customFields, messageTitle, errorMessage, successMessage)
			    	$('#confirmation-modal').modal('hide')
			    })
        	}
        }
    }
})
