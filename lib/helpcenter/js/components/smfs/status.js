/* Get Upwork status via API. */
function getStatusAPI () {
    $.ajax('https://api.status.io/1.0/status/55a1f951d0ef560d6e00006e', {
        type: 'GET',
        contentType: 'application/json',
        crossDomain: true,
        success: function (data) {
            setCookieForMins(upworkConfig.cookies.prefix + 'status-widget', JSON.stringify(data.result), 2)
            showStatusBar()
        }
    })
}

/* Show status bar. */
function showStatusBar () {
    const getStatus = JSON.parse(getCookie(upworkConfig.cookies.prefix + 'status-widget'))
    if(getStatus == null){
        return;
    }

    let statusColor = ''
    switch (getStatus.status_overall.status_code) {
        case 200:
            statusColor = colorPallate.contextuals.sky
            break
        case 300:
            statusColor = colorPallate.contextuals.yellow
            break
        case 400:
            statusColor = colorPallate.contextuals.yellow
            break
        case 500:
            statusColor = colorPallate.contextuals.brick
            break
    }

    if (getStatus.status_overall.status_code == 200) {
        let smfText = 'Upwork has a Planned Maintenance. Please <a href="https://status.upwork.com" target="_blank">click here</a> to know more details.'
        addStatusSMF(smfText, 'warning')
        if (getStatus.maintenance.active.length > 0) {
            setCookieForMins(upworkConfig.cookies.prefix + 'status-widget-visibility', 'true', 2)
        } else {
            setCookieForMins(upworkConfig.cookies.prefix + 'status-widget-visibility', 'false', 2)
        }
    } else if (getStatus.status_overall.status_code == 300) {
        let smfText = 'Some areas of Upwork aren\'t running as fast as we expect. Please <a href="https://status.upwork.com" target="_blank">click here</a> to know more details.'
        addStatusSMF(smfText, 'warning')
        if (getStatus.incidents.length > 0) {
            setCookieForMins(upworkConfig.cookies.prefix + 'status-widget-visibility', 'true', 2)
        } else {
            setCookieForMins(upworkConfig.cookies.prefix + 'status-widget-visibility', 'false', 2)
        }
    } else if (getStatus.status_overall.status_code == 400) {
        let smfText = 'Some areas of Upwork are temporarily unavailable. Please <a href="https://status.upwork.com" target="_blank">click here</a> to know more details.'
        addStatusSMF(smfText, 'warning')
        if (getStatus.incidents.length > 0) {
            setCookieForMins(upworkConfig.cookies.prefix + 'status-widget-visibility', 'true', 2)
        } else {
            setCookieForMins(upworkConfig.cookies.prefix + 'status-widget-visibility', 'false', 2)
        }
    } else if (getStatus.status_overall.status_code == 500) {
        let smfText = 'Upwork has an Active Incident. Please <a href="https://status.upwork.com" target="_blank">click here</a> to know more details.'
        addStatusSMF(smfText, 'danger')
        if (getStatus.incidents.length > 0) {
            setCookieForMins(upworkConfig.cookies.prefix + 'status-widget-visibility', 'true', 2)
        } else {
            setCookieForMins(upworkConfig.cookies.prefix + 'status-widget-visibility', 'false', 2)
        }
    } else if (getStatus.status_overall.status_code == 100) {
        if (getStatus.maintenance.upcoming.length > 0) {
            let plannedDate = new Date(getStatus.maintenance.upcoming[0].datetime_planned_start)
            let plannedDateTime = new Date(plannedDate.getTime() + ((plannedDate.getTimezoneOffset() / 60) * 3600 * 1000))
            let plannedDateUTC = plannedDateTime.toDateString() + ' ' + plannedDateTime.toLocaleTimeString() + ' UTC'
            let smfText = 'Upwork has a Planned Maintenance on ' + plannedDateUTC + '. Please <a href="https://status.upwork.com" target="_blank">click here</a> to know more details.'
            addStatusSMF(smfText, 'success')
            setCookieForMins(upworkConfig.cookies.prefix + 'status-widget-visibility', 'true', 2)
        } else {
            setCookieForMins(upworkConfig.cookies.prefix + 'status-widget-visibility', 'false', 2)
        }
    }
}

/* Add status SMF. */
function addStatusSMF (smfText, scope) {
    if (
        detectPageTemplates('home') ||
        detectPageTemplates('categories') ||
        detectPageTemplates('sections') ||
        detectPageTemplates('articles') ||
        detectPageTemplates('search') ||
        detectPageTemplates('request-new')
    ) {
        $('#section-smf .row').append(addSMF('status_smf', smfText, scope))
    }
}

jQuery(function () {
    if (getCookie(upworkConfig.cookies.prefix + 'status-widget')) {
        showStatusBar()
    } 
    else {
        getStatusAPI()
    }
})
