/* Custom Select control handler. */
function customSelectHandler (field, value, text) {
    $('#' + field + '-dropdown button').text(text)
    $('#' + field + '-hidden').val(value)
}

/* Check, if is business hour. */
function isBusinessHour (businessHours) {
    var timeZonesArray = {'GMT': 0, 'CET': 1, 'EET': 2, 'EEDT': 3, 'IRST': 3.5, 'MSD': 4, 'AFT': 4.5, 'PKT': 5, 'IST': 5.5, 'BST': 6, 'MST': -7, 'THA': 7, 'AWST': 8, 'AWDT': 9, 'ACST': 9.5, 'AEST': 10, 'ACDT': 10.5, 'AEDT': 11, 'NFT': 11.5, 'NZST': 12, 'AZOST': -1, 'GST': -2, 'BRT': -3, 'NST': -3.5, 'CLT': -4, 'VET': -4.5, 'EST': -5, 'CST': -6, 'PDT': -7, 'PST': -8, 'AKST': -9, 'MIT': -9.5, 'HST': -10, 'SST': -11, 'BIT': -12}
    var getDate1 = new Date()
    var getDate2 = new Date(getDate1.getTime() + ((timeZonesArray[businessHours.timeZone] + (getDate1.getTimezoneOffset() / 60)) * 3600 * 1000))
    var toDay = getDate2.toString().substring(0, 3).toLowerCase()
    if (!(typeof businessHours.timeTables[toDay] === 'undefined')) {
        var timeFromArray = businessHours.timeTables[toDay].timeFrom.split(':')
        var timeToArray = businessHours.timeTables[toDay].timeTo.split(':')
        var fromHour = timeFromArray[0]
        var fromMin = timeFromArray[1]
        var toHour = timeToArray[0]
        var toMin = timeToArray[1]
        if (getDate2.getHours() > fromHour) {
            if (getDate2.getHours() < toHour) {
                return true
            } else if (getDate2.getHours() == toHour) {
                if (getDate2.getMinutes() <= toMin) {
                    return true
                } else {
                    return false
                }
            } else {
                return false
            }
        } else if (getDate2.getHours() == fromHour) {
            if (getDate2.getMinutes() >= fromMin) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    } else {
        return false
    }
}


/* Verify URL nonce. */
function verifyURLNonce () {
    if (getQueryParam('nonce')) {
        let toDayNow = new Date()

        if (toDayNow.getTime() >= getQueryParam('nonce')) {
            window.location.href = zdBrands.main.hc.url
        }
    } else {
        window.location.href = zdBrands.main.hc.url
    }
}
