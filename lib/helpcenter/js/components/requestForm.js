/* Submit user request. */
function submitRequest (requesterEmail, requestSubject, requestBody, requestTags, customFields, messageTitle, errorMessage, successMessage, returnURL = '') {
    $.ajax(zdBrands.main.api + '/users/me.json', {
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (data) {
            let requestData = {
                'request': {
                    'requester': {
                        'email': requesterEmail
                    },
                    'subject': requestSubject,
                    'comment': {
                        'body': requestBody
                    },
                    'tags': requestTags,
                    'custom_fields': customFields
                }
            }
            $.ajax(zdBrands.main.api + '/requests.json', {
                type: 'POST',
                data: JSON.stringify(requestData),
                dataType: 'json',
                contentType: 'application/json',
                xhrFields: {
                    withCredentials: true
                },
                crossDomain: true,
                headers: {
                    'X-CSRF-Token': data.user.authenticity_token
                },
                error: function (data) {
                    $('#warning-modal .modal-title').text(messageTitle)
                    $('#warning-modal .modal-body').html(errorMessage)
                    if (returnURL != '') {
                        $('#warning-modal .btn-primary').replaceWith('<a href="' + returnURL + '" class="btn btn-primary">Close</a>')
                    }
                    $('#warning-modal').modal('show')
                },
                success: function (data) {
                    $('#info-modal .modal-title').text(messageTitle)
                    $('#info-modal .modal-body').html(successMessage)
                    if (returnURL != '') {
                        $('#info-modal .btn-primary').replaceWith('<a href="' + returnURL + '" class="btn btn-primary">Close</a>')
                    }
                    $('#info-modal').modal('show')
                }
            })
        }
    })
}

jQuery(function () {
    /* Add text to file uploader. */
    $('#upload-dropzone span').html('Add file')
})
