/* Status widget. */
function statusWidget (btnClass, btnText) {
    let getStatus = JSON.parse(getCookie(upworkConfig.cookies.prefix + 'status-widget'))
    let incident
    if (getStatus.incidents.length > 0) {
        incident = getStatus.incidents[0]
    } else {
        incident = getStatus.maintenance.active[0]
    }

    let incidentDate = new Date(incident.datetime_open)
    let getIncidentDate = new Date(incidentDate.getTime() + ((incidentDate.getTimezoneOffset() / 60) * 3600 * 1000))

    let statusText = ''
    let statusColor = ''
    let selectItem = incident.messages.length - 1
    switch (incident.messages[selectItem].status) {
        case 200:
            statusColor = colorPallate.contextuals.sky
            statusText = 'Maintenance'
            break
        case 300:
            statusColor = colorPallate.contextuals.yellow
            statusText = 'Degraded Performance'
            break
        case 400:
            statusColor = colorPallate.contextuals.yellow
            statusText = 'Partial Service Disruption'
            break
        case 500:
            statusColor = colorPallate.contextuals.brick
            statusText = 'Service Disruption'
            break
    }

    let affectedContainers = ''
    for (i in incident.containers_affected) {
        affectedContainers += incident.containers_affected[i].name + ', '
    }
    affectedContainers = affectedContainers.slice(0, -2)

    let affectedComponents = ''
    for (i in incident.components_affected) {
        affectedComponents += incident.components_affected[i].name + ', '
    }
    affectedComponents = affectedComponents.slice(0, -2)

    let incidentMessages = ''
    for (i in incident.messages) {
        let messageDate = new Date(incident.messages[i].datetime)
        let getMessageDate = new Date(messageDate.getTime() + ((messageDate.getTimezoneOffset() / 60) * 3600 * 1000))

        let messagesStatus = ''
        switch (incident.messages[i].state) {
            case 100:
                messagesStatus = '<strong>[Investigating]</strong> '
                break
            case 200:
                messagesStatus = '<strong>[Identified]</strong> '
                break
            case 300:
                messagesStatus = '<strong>[Monitoring]</strong> '
                break
            case 400:
                messagesStatus = '<strong>[Resolved]</strong> '
                break
        }

        incidentMessages += '<div class="row">'
        incidentMessages += '<div class="col-xs-12">'
        incidentMessages += '<h4>' + getMessageDate.toDateString() + ' ' + getMessageDate.toLocaleTimeString() + ' UTC</h4>'
        incidentMessages += '</div>'
        incidentMessages += '<div class="col-xs-12">'
        incidentMessages += '<p>' + messagesStatus + incident.messages[i].details + '</p>'
        incidentMessages += '</div>'
        incidentMessages += '</div>'
    }

    resetConfirmationModal()
    addConfirmationModalBtn(btnClass, btnText)
    $('#confirmation-modal .modal-title').text('Upwork Status')

    let output = []
    output.push('<div class="contact-flow-status-widget">')
        output.push('<h2 style="color:' + statusColor + ';">' + incident.name + '</h2>')
        output.push('<small>' + getIncidentDate.toDateString() + ' ' + getIncidentDate.toLocaleTimeString() + ' UTC' + '<small>')
        output.push('<dl class="incident-meta">')
            output.push('<dt>Incident Status</dt>')
            output.push('<dd>' + statusText + '</dd>')
            output.push('<dt>Components</dt>')
            output.push('<dd>' + affectedComponents + '</dd>')
            output.push('<dt>Locations</dt>')
            output.push('<dd>' + affectedContainers + '</dd>')
        output.push('</dl>')
        output.push('<div class="incident-messages">')
            output.push(incidentMessages)
        output.push('</div>')
    output.push('</div>')
    $('#confirmation-modal .modal-body').html(output.join(''))
    if ($(window).width() > 767) {
        $('#confirmation-modal .modal-dialog').css('margin', '5% auto')
    }
    $('#confirmation-modal').modal('show')
}
