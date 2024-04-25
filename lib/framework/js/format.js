/* Format date - MDY */
function formatDateMDY (date) {
    var dateString = new Date(date)
    var month = dateString.getUTCMonth() + 1
    var day = dateString.getUTCDate()
    var year = dateString.getUTCFullYear()
    return date !== 'N/A' ? month + ' - ' + day + ' - ' + year : 'N/A'
}

/* Format date - YMD */
function formatDateYMD (date) {
    var dateString = new Date(date)
    return dateString.getFullYear() + ' - ' + (dateString.getMonth() + 1) + ' - ' + dateString.getDate()
}

/* Format date to UTC string. */
function formatDateUTC (date) {
    var dateString = new Date(date)
    return dateString.UTC()
}

/* Format date time. */
function formatDateTime (date) {
    let dateString = new Date(date)
    let todayString = new Date()

    let returnDateString = ''

    let weekdayArray = []
    weekdayArray[0] = 'Sunday'
    weekdayArray[1] = 'Monday'
    weekdayArray[2] = 'Tuesday'
    weekdayArray[3] = 'Wednesday'
    weekdayArray[4] = 'Thursday'
    weekdayArray[5] = 'Friday'
    weekdayArray[6] = 'Saturday'

    let monthArray = []
    monthArray[0] = 'January'
    monthArray[1] = 'February'
    monthArray[2] = 'March'
    monthArray[3] = 'April'
    monthArray[4] = 'May'
    monthArray[5] = 'June'
    monthArray[6] = 'July'
    monthArray[7] = 'August'
    monthArray[8] = 'September'
    monthArray[9] = 'October'
    monthArray[10] = 'November'
    monthArray[11] = 'December'

    let days = dateString.getDate()
    let todayDay = todayString.getDate()

    let timeDifference = todayString - dateString
    let diffDays = parseInt(timeDifference / (1000*60*60*24))

    let hoursString = dateString.getHours()

    let minutesString = dateString.getMinutes()
    if (minutesString <10) {
        minutesString = '0' + minutesString
    }

    if (days == todayDay) {
        returnDateString = 'Today at ' + hoursString + ':' + minutesString
    } else {
        if (diffDays <= 7) {
            let weekdays = weekdayArray[dateString.getDay()]
            returnDateString = weekdays + ' at ' + hoursString + ':' + minutesString
        } else if (diffDays > 7) {
            let monthsString = monthArray[dateString.getMonth()]
            returnDateString = monthsString + ' ' + dateString.getDate() + ', ' + dateString.getFullYear() + ' ' + hoursString + ':' + minutesString
        }
    }

    return returnDateString
}

/* Format date time am/pm. */
function formatDateTimeAMPM (date) {
    var dateString = new Date(date)
    var weekdayArray = []
    weekdayArray[0] = 'Sunday'
    weekdayArray[1] = 'Monday'
    weekdayArray[2] = 'Tuesday'
    weekdayArray[3] = 'Wednesday'
    weekdayArray[4] = 'Thursday'
    weekdayArray[5] = 'Friday'
    weekdayArray[6] = 'Saturday'

    var monthArray = []
    monthArray[0] = 'January'
    monthArray[1] = 'February'
    monthArray[2] = 'March'
    monthArray[3] = 'April'
    monthArray[4] = 'May'
    monthArray[5] = 'June'
    monthArray[6] = 'July'
    monthArray[7] = 'August'
    monthArray[8] = 'September'
    monthArray[9] = 'October'
    monthArray[10] = 'November'
    monthArray[11] = 'December'

    var weekday = weekdayArray[dateString.getUTCDay()]
    var month = monthArray[dateString.getUTCMonth()]
    var day = dateString.getUTCDate()
    var year = dateString.getUTCFullYear()

    var hour = dateString.getUTCHours()
    var minute = dateString.getUTCMinutes()

    var amPM = (hour > 11) ? 'PM' : 'AM'
    if (hour > 12) {
        hour -= 12
    } else if (hour == 0) {
        hour = '12'
    }
    if (minute < 10) {
        minute = '0' + minute
    }
    return weekday + ', ' + month + ' ' + day + ', ' + year + ' ' + hour + ':' + minute + ' ' + amPM + ' (UTC)'
}
