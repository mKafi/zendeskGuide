/* The enterprise contact section. */
function enterpriseContactSection () {
	output = []
	output.push('<section id="section-contact-flow" class="section-cta-bar section-contact-flow">')
		output.push('<div class="profile-container">')
			output.push('<h3 class="text-center">How would you like to contact support?</h3>')
			output.push('<div class="text-center" style="margin-top: 30px;">')
				output.push('<a class="banner-button btn-email-us" style="margin-right: 20px;" href="' + zdBrands.main.hc.url + '/requests/new?ticket_form_id=' + enterpriseForm.form + '&src=hc">Email Us</a>')
				output.push('<button class="banner-button btn-call-us" onclick="showENTCallUsModal()">Call Us</button>')
			output.push('</div>')			
		output.push('</div>')
	output.push('</section>')
	return output.join('')
}

/* The enterprise home contact section. */
function enterpriseHomeContactSection () {
	$('#section-cta-status').after(enterpriseContactSection())
}

/* Setup the enterprise landing page. */
function enterpriseLandingPage () {
	if (detectPageTemplates('home')) {
		$('#popular-topics-nav-tabs .heading-vistior').text(' Where are you experiencing a problem?')

		let output = []
		output.push('<div class="nav-tabs-container">')
			output.push('<div class="nav nav-tabs" role="tablist">')
				output.push('<div role="presentation">')
					output.push('<a class="tab-link-enterprise" href="#tab-pane-enterprise" aria-controls="tab-pane-enterprise" role="tab" data-toggle="tab">')
						output.push('An Enterprise client profile')
					output.push('</a>')
				output.push('</div>')
				output.push('<div role="presentation">')
					output.push('<a class="tab-link-freelancer" href="#tab-pane-freelancer" aria-controls="tab-pane-freelancer" role="tab" data-toggle="tab">')
						output.push('A freelancer profile')
					output.push('</a>')
				output.push('</div>')
			output.push('</div>')
		output.push('</div>')
		$('.nav-tabs-container').html(output.join(''))

		$('#section-contact-flow').remove()

		enterpriseHomeContactSection()

		$('#popular-topics-nav-tabs .nav-tabs div a').click(function () {
			let getTheScope = $(this).attr('href').replace('#tab-pane-', '')
			setCookieForHours(upworkConfig.cookies.prefix + 'user-tab', getTheScope, 1)

			$('#popular-topics-nav-tabs .nav-tabs > div').removeClass('active')
			$('#popular-topics-nav-tabs a[href="#tab-pane-' + getTheScope + '"]').parents().eq(0).addClass('active')

			getInstantHelps(getTheScope)
			getRecommendedTopics(getTheScope)
			getCommonSearches(getTheScope)
			updateWebinarLink()
		})

		clickPopularTopicNavTab('enterprise')

		setTimeout(function () {
			$('#support-bot-widget').remove()
		}, 2000)
	}
}

/* Setup the enterprise search page. */
function enterpriseSearchPage() {
	if (detectPageTemplates('search')) {
		$('#search-topics-nav-tabs .heading-vistior').text(' Where are you experiencing a problem?')

		let output = []
		output.push('<div class="nav-tabs-container">')
			output.push('<div class="nav nav-tabs" role="tablist">')
				output.push('<div role="presentation">')
					output.push('<a id="search-tab-hc-enterprise" class="tab-link-hc-enterprise" href="#tab-pane-hc-enterprise" aria-controls="tab-pane-hc-enterprise" role="tab" data-tab="filter-hc-enterprise" data-toggle="tab">')
						output.push('An Enterprise client profile')
					output.push('</a>')
				output.push('</div>')
				output.push('<div role="presentation">')
					output.push('<a id="search-tab-freelancer" class="tab-link-freelancer" href="#tab-pane-freelancer" aria-controls="tab-pane-freelancer" role="tab" data-tab="filter-fl" data-toggle="tab">')
						output.push('A freelancer profile')
					output.push('</a>')
				output.push('</div>')
			output.push('</div>')
		output.push('</div>')
		$('.nav-tabs-container').html(output.join(''))

		$('#search-topics-nav-tabs .nav-tabs div a').click(function () {
			let getTheScope = $(this).attr('href').replace('#tab-pane-', '')
			setCookieForHours(upworkConfig.cookies.prefix + 'user-tab', getTheScope, 1)

			$('#search-topics-nav-tabs .nav-tabs > div').removeClass('active')
			$('#search-topics-nav-tabs a[href="#tab-pane-' + getTheScope + '"]').parents().eq(0).addClass('active')

			loadSearchResults(getTheScope)
		})

		setTimeout(function () {
			$('#support-bot-widget').remove()
		}, 3000)
	}
}

/* Show the call us modal for enterprise support. */
function showENTCallUsModal () {
	resetConfirmationModal()
    $('#confirmation-modal .modal-title').text('Enterprise support')

	let output = []
    output.push('<div class="contact-flow-call-us-widget">')
		output.push('<h2 class="heading-vistior text-primary text-center">Call us on the phone!</h2>')
		output.push('<div class="text-center">')
			output.push('You can reach our agents <strong>Monday to Friday,</strong> from 12 am to 11:59 pm (PST) at')
		output.push('</div>')
		output.push('<h2 class="heading-vistior text-primary text-center">+1 (855) 917-3076</h2>')
    output.push('</div>')
    $('#confirmation-modal .modal-body').html(output.join(''))

	$('#confirmation-modal').modal('show')
	$('.modal-footer').remove()
}
