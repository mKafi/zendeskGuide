/* Get browser info. */
function getBrowserInfo (userAgent) {
    var getBrowser = userAgent.match(/(opera|chrome|safari|firefox|ie|msie(?=\/))\/?\s*(\d+)/i) || []
    var response = {
        'name': '',
        'version': ''
    }

    if (getBrowser[1] == 'IE') {
        response.name = 'IE'
        var getVersion = userAgent.match(/(ie|msie)(\s\d+)/i)
        response.version = getVersion[2].trim()
    } else if (getBrowser[1] == 'Chrome') {
        getEDGE = userAgent.match(/\b(opr|edg|edge)\/(\d+)/i)
        if (getEDGE !== null) {
            response.name = getEDGE[1]
            response.version = getEDGE[2]
        } else {
            response.name = getBrowser[1]
            response.version = getBrowser[2]
        }
    } else if (getBrowser[1] == 'Firefox') {
        response.name = getBrowser[1]
        response.version = getBrowser[2]
    } else if (getBrowser[1] == 'Safari') {
        response.name = getBrowser[1]
        var getVersion = userAgent.match(/(version)\/(\d+)/i)
        response.version = getVersion[2]
    }
    return response
}
