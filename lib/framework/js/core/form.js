/* Get the field value. */
function getFieldValue (key) {
    return $('#request_custom_fields_' + key).val()
}

/* Populate the radio button. */
function addRadio (radio) {
    $('.request_custom_fields_' + radio.key + ' .nesty-input').hide()
    let output = []
    output.push('<div class="row">')
         for (i in radio.options) {
            output.push('<div class="radio-option">')
                output.push('<span data-field="' + radio.key + '" data-key="' + radio.options[i].key + '" class="radio-option-helper">&nbsp;</span>')
                output.push(radio.options[i].value)
            output.push('</div>')
        }
    output.push('</div>')
    $(output.join('')).insertAfter('.request_custom_fields_' + radio.key + ' .nesty-input')
}

/* Populate the dropdown. */
function addDropdown (dropdown) {
    $('.request_custom_fields_' + dropdown.key + ' .nesty-input').hide()
    let output = []
    output.push('<button class="btn btn-default btn-block btn-dropdown" type="button" data-toggle="dropdown" aria-expanded="true">Select</button>')
    output.push('<ul class="dropdown-menu">')
        for (i in dropdown.options) {
            output.push('<li class="dropdown-option option-' + dropdown.options[i].key + '" data-field="' + dropdown.key + '" data-key="' + dropdown.options[i].key + '">')
                output.push(dropdown.options[i].value)
            output.push('</li>')
        }
    output.push('</ul>')
    $(output.join('')).insertAfter('.request_custom_fields_' + dropdown.key + ' .nesty-input')
    $('.request_custom_fields_' + dropdown.key).addClass('dropdown')
}

/* Get the dropdown selection. */
function getDropdownSelection (key) {
    let value = $('.request_custom_fields_' + key + ' .btn-dropdown').text()
    return value
}

/* Check the dropdown selection. */
function checkDropdownSelection (key) {
    if (getDropdownSelection(key) == 'Select') {
        return false
    } else {
        return true
    }
}

/* Populate the country dropdown. */
function addCountryDropdown (key) {
    $('#request_custom_fields_' + key ).hide()
    let countries = ["Afghanistan","Åland Islands","Albania","Algeria","American Samoa","Andorra","Angola","Anguilla","Antarctica","Antigua and Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia and Herzegovina","Botswana","Bouvet Island","Brazil","British Indian Ocean Territory","Brunei Darussalam","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central African Republic","Chad","Chile","China","Christmas Island","Cocos (Keeling) Islands","Colombia","Comoros","Congo","Congo, The Democratic Republic of The","Cook Islands","Costa Rica","Cote D'ivoire","Croatia","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands (Malvinas)","Faroe Islands","Fiji","Finland","France","French Guiana","French Polynesia","French Southern Territories","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guadeloupe","Guam","Guatemala","Guernsey","Guinea","Guinea-bissau","Guyana","Haiti","Heard Island and Mcdonald Islands","Holy See (Vatican City State)","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran, Islamic Republic of","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Korea, Democratic People's Republic of","Korea, Republic of","Kuwait","Kyrgyzstan","Lao People's Democratic Republic","Latvia","Lebanon","Lesotho","Liberia","Libyan Arab Jamahiriya","Liechtenstein","Lithuania","Luxembourg","Macao","Macedonia, The Former Yugoslav Republic of","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Martinique","Mauritania","Mauritius","Mayotte","Mexico","Micronesia, Federated States of","Moldova, Republic of","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Niue","Norfolk Island","Northern Mariana Islands","Norway","Oman","Pakistan","Palau","Palestinian Territory, Occupied","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Pitcairn","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russian Federation","Rwanda","Saint Helena","Saint Kitts and Nevis","Saint Lucia","Saint Pierre and Miquelon","Saint Vincent and The Grenadines","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Georgia and The South Sandwich Islands","Spain","Sri Lanka","Sudan","Suriname","Svalbard and Jan Mayen","Swaziland","Sweden","Switzerland","Syrian Arab Republic","Taiwan, Province of China","Tajikistan","Tanzania, United Republic of","Thailand","Timor-leste","Togo","Tokelau","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan","Turks and Caicos Islands","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States","United States Minor Outlying Islands","Uruguay","Uzbekistan","Vanuatu","Venezuela","Viet Nam","Virgin Islands, British","Virgin Islands, U.S.","Wallis and Futuna","Western Sahara","Yemen","Zambia","Zimbabwe"]
    let countryOptions = []
    countryOptions.push('<button class="btn btn-default btn-block btn-dropdown" type="button" data-toggle="dropdown" aria-expanded="true">Select</button>')
    countryOptions.push('<ul class="dropdown-menu">')
    for (i in countries) {
        countryOptions.push('<li class="dropdown-option" data-field="' + key + '" data-key="' + countries[i] + '">')
            countryOptions.push(countries[i])
        countryOptions.push('</li>')
    }
    countryOptions.push('</ul">')
    $(countryOptions.join('')).insertAfter('#request_custom_fields_' + key)
    $('.request_custom_fields_' + key).addClass('dropdown')
}

jQuery(function () {
    $('#new_request').on('click', '.radio-option', function () {
        let radioField = $(this).find('.radio-option-helper').attr('data-field')
        let radioValue = $(this).find('.radio-option-helper').attr('data-key')
        $('#request_custom_fields_' + radioField).val(radioValue)
        $(this).parents().eq(1).find('.radio-option-helper').removeClass('active')
        $(this).find('.radio-option-helper').addClass('active')
    })

    $('#new_request').on('click', '.dropdown-option', function () {
        let dropdownField = $(this).attr('data-field')
        let dropdownValue = $(this).attr('data-key')
        $(this).parents().eq(1).find('.btn-dropdown').text($(this).text())
        $('#request_custom_fields_' + dropdownField).val(dropdownValue)
    })
})
