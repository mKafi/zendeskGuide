/* Get device info. */
function getDeviceInfo (userAgent) {
	var getDevice = []
    var response = {
        name: '',
        version: ''
    }

    if (userAgent.match(/android/i) == 'Android') {
    	getDevice = userAgent.match(/(android)\/?\s*(\d+)/i) || []
    } else if (userAgent.match(/iphone/i) == 'iPhone') {
    	getDevice = [
    		'NA',
    		'iPhone',
    		'NA'
    	]
    } else if (userAgent.match(/ipad/i) == 'iPad') {
        getDevice = [
            'NA',
            'iPad',
            'NA'
        ]
    }

    return {
        'name': getDevice[1],
        'version': getDevice[2]
    }
}
