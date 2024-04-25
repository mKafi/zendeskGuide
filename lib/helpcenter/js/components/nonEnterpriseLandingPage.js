/* Setup the landing page for non enterprise users. */
function nonEnterpriseLandingPage () {
	/**
	 * @todo
	*/
	if (isDebugging()) {
		if ($('#navbar-menu-desktop li:nth-last-child(2) a').html() != 'Contact Support') {
			$('#navbar-menu-desktop li:last-child').before('<li><a class="btn btn-link" href="' + zdBrands.main.hc.url + '/requests/new?ticket_form_id=' + defaultForm.form + '">Contact Support</a></li>')
		}
	}
}

/* The enterprise contact section. */
function nonEnterpriseContactSection () {
	output = []
	output.push('<div id="section-contact-flow" class="section-contact-flow section-cta-bar">')
		output.push('<div class="container">')
		output.push('<div class="cta-card">')
			output.push('<div class="row">')
				output.push('<div class="col-sm-6">')
					output.push('<h3 style="margin-top:10px" class="heading-vistior">Do you need additional help?</h3>')
				output.push('</div>')
				output.push('<div class="col-sm-6 text-right">')
					output.push('<a class="btn btn-primary" href="' + zdBrands.main.hc.url + '/requests/new?ticket_form_id=' + defaultForm.form + '">Contact Support</a>')
				output.push('</div>')
			output.push('</div>')
		output.push('</div>')
	output.push('</section>')

	return output.join('')
}
