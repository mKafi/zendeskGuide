function trackChanges (filePath) {
    let currentDate = new Date()
    let currentTime = currentDate.getTime()

    let xhr = new XMLHttpRequest()
    xhr.onload = function () {
        let lastModified = this.getResponseHeader('Last-Modified')
        let lastModifiedTime = new Date(lastModified).getTime()

        if (lastModifiedTime > currentTime) {
            location.reload()
        } else {
            setTimeout(startTracking, 1000)
        }
    }
    xhr.open('GET', filePath + '?t=' + new Date().getTime(), true)
    xhr.withCredentials = true
    xhr.send()
}

function startTracking () {
    trackChanges('https://upwork-guide.troopersdesk.com/dev/guidekitdev/compiled/framework/global.js')
    trackChanges('https://upwork-guide.troopersdesk.com/dev/guidekitdev/compiled/framework/global.css')
    trackChanges('https://upwork-guide.troopersdesk.com/dev/guidekitdev/compiled/custom/helpcenter/prod/scripts.js')
    trackChanges('https://upwork-guide.troopersdesk.com/dev/guidekitdev/compiled/custom/helpcenter/prod/styles.css')
    trackChanges('https://upwork-guide.troopersdesk.com/dev/guidekitdev/compiled/reload.js')
}

(function () {
    setTimeout(startTracking, 1000)
} ())
