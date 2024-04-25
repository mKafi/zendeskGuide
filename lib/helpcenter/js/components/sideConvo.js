/* Get side conversations. */
function getSideConversations (ticketID) {
    $('#ajax-loader-overlay').show()

    $.ajax(zdBrands.main.api + '/tickets/' + ticketID + '/side_conversations', {
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (data) {
        	if (data.side_conversations.length > 0) {
        		let output = []
        		let outputTab = []
        		let outputTabLink = []

                output.push('<dl id="request-details-created-time" class="request-details">')
                    output.push('<dt>Created</dt>')
                    output.push('<dd></dd>')
                output.push('</dl>')

                output.push('<dl id="request-details-updated-time" class="request-details">')
                    output.push('<dt>Last activity</dt>')
                    output.push('<dd></dd>')
                output.push('</dl>')

        		output.push('<dl id="request-details-participants" class="request-details">')
        			output.push('<dt>Participants</dt>')
                    output.push('<dd>')
                        output.push('<ul class="participant-list">')
                        output.push('</ul>')
                    output.push('</dd>')
                output.push('</dl>')

        		outputTabLink.push('<ul class="nav nav-tabs nav-side-conversations" role="tablist">')
	        		outputTabLink.push('<li class="active" role="presentation">')
	        			outputTabLink.push('<a href="#convo-tab-pane-main" aria-controls="convo-tab-pane-main" data-convo-id="main" role="tab" data-toggle="tab">Main</a>')
	        		outputTabLink.push('</li>')

            		for (let i in data.side_conversations) {
            			let sideConvo = data.side_conversations[i]

            			outputTabLink.push('<li>')
        					outputTabLink.push('<a href="#convo-tab-pane-' + sideConvo.id + '" aria-controls="convo-tab-pane-' + sideConvo.id + '" data-convo-id="' + sideConvo.id + '" role="tab" data-toggle="tab">' + sideConvo.subject + '</a>')
        				outputTabLink.push('</li>')

            			outputTab.push('<div id="convo-tab-pane-' + sideConvo.id + '" class="tab-pane convo-tab-pane" role="tabpanel">')
        				outputTab.push('</div>')
            		}
        		outputTabLink.push('</ul>')

				$('#comments-container').prepend(outputTabLink.join(''))
				$('.comments, .text-right, .comment-form').wrapAll('<div id="convo-tab-pane-main" class="tab-pane convo-tab-pane active"></div>')
                $(outputTab.join('')).insertAfter('#convo-tab-pane-main')
				$('.convo-tab-pane').wrapAll('<div class="tab-content"></div>')

                $('#request-sidebar').append(output.join(''))

                $('#hc-wysiwyg').remove()
                $('#request_comment_body').css({
                    'display': 'block',
                    'visibility': 'visible'
                })

                $('.participant-list').append('<li>' + $('#request-details-requester dd').text() + '</li>')
                $('.participant-list').append($('#request-details-collaborators dd').children('.request-collaborators').html())
                $('.participant-list').append('<li>' + $('#request-details-assignee dd').text() + '</li>')

                $('#request-details-created-time').children('dd').html($('#request-details-created').find('time').text())
                $('#request-details-updated-time').children('dd').html($('#request-details-updated').find('time').text())

                $('#request-details-created').hide()
                $('#request-details-updated').hide()
                $('#request-details-requester').hide()
                $('#request-details-collaborators').hide()

                getDisputeMetaData()

        	} else {
                $('#ajax-loader-overlay').hide()
            }
        }
    })
}

/* Get dispute meta data. */
function getDisputeMetaData () {
    let ticketID = urlPartsArray[4]

    $.ajax(zdBrands.main.api + '/requests/' + ticketID, {
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (data) {
            let output = []

            for (let i in data.request.custom_fields) {
                for (let j in disputeMetaFields) {
                    if (data.request.custom_fields[i].id == disputeMetaFields[j].id) {
                        output.push('<dl id="request-details-' + disputeMetaFields[j].key + '" class="request-details">')
                            if (disputeMetaFields[j].key == 'dispute-date') {
                                if (data.request.custom_fields[i].value != '') {
                                    output.push('<dt>' + disputeMetaFields[j].title + '</dt>')
                                    output.push('<dd>' + formatDateMDY(data.request.custom_fields[i].value) + '</dd>')
                                }
                            } else if (disputeMetaFields[j].key == 'amount-escrow') {
                                if (data.request.custom_fields[i].value != '') {
                                    output.push('<dt>' + disputeMetaFields[j].title + '</dt>')
                                    output.push('<dd>US$ ' + data.request.custom_fields[i].value + '</dd>')
                                }
                            } else {
                                if (data.request.custom_fields[i].value != '') {
                                    output.push('<dt>' + disputeMetaFields[j].title + '</dt>')
                                    output.push('<dd>' + data.request.custom_fields[i].value + '</dd>')
                                }
                            }
                        output.push('</dl>')
                    }
                }
            }

            $('#request-sidebar').append(output.join(''))

            $('#ajax-loader-overlay').hide()
        }
    })
}

/* Get side conversation messages. */
function getSideConversationMessages (convoID) {
    let ticketID = urlPartsArray[4]

    $.ajax(zdBrands.main.api + '/tickets/' + ticketID + '/side_conversations/' + convoID + '?include=events', {
        type: 'GET',
        dataType: 'json',
        contentType: 'application/json',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (data) {
            let output = []

            output.push('<div class="side-conversation-participant-list">')
                let convoUsers = JSON.parse(sessionStorage.convoUsers)
                for (let i in data.side_conversation.participants) {
                    output.push('<div class="participant">')
                        if (/@upwork.com|@cloud.upwork.com*$/.test(data.side_conversation.participants[i].email)) {
                            if (convoUsers[data.side_conversation.participants[i].user_id]) {
                                output.push(convoUsers[data.side_conversation.participants[i].user_id].name)
                            } else {
                                output.push('Upwork')
                            }
                        } else {
                            output.push(data.side_conversation.participants[i].name)
                        }
                    output.push('</div>')
                }
            output.push('</div>')
            output.push('<div class="side-conversation-subject">')
                output.push(data.side_conversation.subject)
            output.push('</div>')
            output.push('<div class="side-conversation-created">')
                output.push(data.side_conversation.created_at)
            output.push('</div>')
            output.push('<div class="side-conversation-updated">')
                output.push(data.side_conversation.updated_at)
            output.push('</div>')

            for (let i in data.events) {
                output.push(formatSideConvoMessages(data.events[i]))
            }

            if ($('#request-details-status span').text().trim() != 'Solved') {
                output.push('<div class="comment-form">')
                    output.push('<div class="row">')
                        output.push('<div class="col-xs-12">')
                            output.push('<div class="comment-author">')
                                output.push('<div class="avatar-user"></div>')
                            output.push('</div>')
                            output.push('<div class="comment-container">')
                                output.push('<div class="comment-textarea">')
                                    output.push('<textarea id="convo-reply-' + convoID + '" placeholder="" aria-required="true" aria-label="Add your reply"></textarea>')
                                output.push('</div>')
                                output.push('<div class="comment-form-controls">')
                                    output.push('<div class="row">')
                                        output.push('<div class="col-xs-12">')
                                            output.push('<input class="btn btn-primary btn-convo-submit" type="submit" data-convo-id="' + convoID + '" value="Submit">')
                                        output.push('</div>')
                                    output.push('</div>')
                                output.push('</div>')
                            output.push('</div>')
                        output.push('</div>')
                    output.push('</div>')
                output.push('</div>')
            }

            $('#convo-tab-pane-' + convoID).append(output.join(''))

            $('.participant-list').html('')
            for (let i in data.side_conversation.participants) {
                if (/@upwork.com|@cloud.upwork.com*$/.test(data.side_conversation.participants[i].email)) {
                    if (convoUsers[data.side_conversation.participants[i].user_id]) {
                        $('.participant-list').append('<li>' + convoUsers[data.side_conversation.participants[i].user_id].name + '</li>')
                    } else {
                        $('.participant-list').append('<li>Upwork</li>')
                    }
                } else {
                    $('.participant-list').append('<li>' + data.side_conversation.participants[i].name + '</li>')
                }
            }

            $('#request-details-created-time').children('dd').html(formatDateTime(data.side_conversation.created_at))
            $('#request-details-updated-time').children('dd').html(formatDateTime(data.side_conversation.updated_at))

            $('#ajax-loader-overlay').hide()
        }
    })
}

/* Format side conversation messages. */
function formatSideConvoMessages (convo) {
    let output = []
    let convoUsers = JSON.parse(sessionStorage.convoUsers)

    if (convo.message != null) {
        output.push('<div class="comments">')
            output.push('<div class="row">')
                output.push('<div class="col-xs-12">')
                    output.push('<div class="comment-author">')
                        output.push('<div class="avatar-user"></div>')
                        output.push('<div class="comment-meta">')
                            output.push('<div class="comment-author-name">')
                                if (/@upwork.com|@cloud.upwork.com*$/.test(convo.actor.email)) {
                                    if (convoUsers[convo.actor.user_id]) {
                                        output.push(convoUsers[convo.actor.user_id].name)
                                    } else {
                                        output.push('Upwork')
                                    }
                                } else {
                                    output.push(convo.actor.name)
                                }
                            output.push('</div>')
                            output.push('<div class="comment-date">')
                                output.push('<small>' + formatDateTime(convo.created_at) + '</small>')
                            output.push('</div>')
                        output.push('</div>')
                    output.push('</div>')
                output.push('</div>')
            output.push('</div>')
            output.push('<div class="row">')
                output.push('<div class="col-xs-12">')
                    output.push('<section class="comment-body">')
                        output.push(convo.message.html_body)
                    output.push('</section>')
                    output.push('<ul class="list-unstyled attachment-list">')
                        for (let i in convo.message.attachments) {
                            output.push('<li>')
                                output.push('<a href="' + convo.message.attachments[i].content_url + '">')
                                    output.push(' <span class="air-icon-attach"></span>')
                                    output.push(convo.message.attachments[i].file_name)
                                output.push('</a>')
                                output.push('<div class="meta">')
                                    output.push('<small>')
                                        output.push('(')

                                        let fileSize = convo.message.attachments[i].size / 1024
                                        if (fileSize <= 1024) {
                                            output.push(fileSize.toFixed(2) + ' KB')
                                        } else {
                                            fileSize = fileSize / 1024
                                            output.push(fileSize.toFixed(2) + ' MB')
                                        }

                                        output.push(')')
                                    output.push('</small>')
                                output.push('</div>')
                            output.push('</li>')
                        }
                    output.push('</ul>')
                output.push('</div>')
            output.push('</div>')
        output.push('</div>')
    }

    return output.join('')
}

/* Populate agents. */
function populateAgents () {
    let convoUsers = {}
    $('.comment-author-name').each(function (index, element) {
        if ($(this).attr('data-internal') == 'true') {
            convoUsers[$(this).attr('data-id')] = {
                'id': $(this).attr('data-id'),
                'name': $(this).text().trim()
            }
        }
    })
    sessionStorage.convoUsers = JSON.stringify(convoUsers)
}

/* Submit side conversation reply messages. */
function submitSideConvoReply (convoID, subject, message) {
    let ticketID = urlPartsArray[4]
    let postData = '{"message":{"subject":"' + subject + '","body":"' + message + '"}}'

    $.ajax(zdBrands.main.api + '/tickets/' + ticketID + '/side_conversations/' + convoID + '/reply', {
        type: 'POST',
        dataType: 'json',
        data: postData,
        contentType: 'application/json',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function (data) {
            $('#convo-tab-pane-' + data.side_conversation.id).find('.comments').last().after(formatSideConvoMessages(data.event))
            $('#convo-tab-pane-' + data.side_conversation.id).find('textarea').val('')
        }
    })
}

jQuery(function () {
	if (detectPageTemplates('request-single')) {
		let ticketID = urlPartsArray[4]

        populateAgents()

        getSideConversations(ticketID)

        $('#comments-container').on('click', '.nav-side-conversations li a', function () {
            let convoID = $(this).attr('data-convo-id')

            if (convoID == 'main') {
                $('.participant-list').html('')
                $('.participant-list').append('<li>' + $('#request-details-requester dd').text() + '</li>')
                $('.participant-list').append($('#request-details-collaborators dd').children('.request-collaborators').html())
                $('.participant-list').append('<li>' + $('#request-details-assignee dd').text() + '</li>')

                $('#request-details-created-time').children('dd').html($('#request-details-created').find('time').text())
                $('#request-details-updated-time').children('dd').html($('#request-details-updated').find('time').text())
            } else {
                if ($('#convo-tab-pane-' + convoID + ' .comments').length < 1) {
                    $('#ajax-loader-overlay').show()
                    getSideConversationMessages(convoID)
                } else {
                    $('.participant-list').html('')
                    $('#convo-tab-pane-' + convoID + ' .side-conversation-participant-list .participant').each(function (index, value) {
                        $('.participant-list').append('<li>' + $(this).text() + '</li>')
                    })
                    $('#request-details-created-time').children('dd').html(formatDateTime($('#convo-tab-pane-' + convoID + ' .side-conversation-created').text()))
                    $('#request-details-updated-time').children('dd').html(formatDateTime($('#convo-tab-pane-' + convoID + ' .side-conversation-updated').text()))
                }
            }
        })

        $('#comments-container').on('click', '.btn-convo-submit', function () {
            let subject = $(this).parents().eq(7).find('.side-conversation-subject').html()
            let message = $(this).parents().eq(3).find('textarea').val()

            submitSideConvoReply($(this).attr('data-convo-id'), subject, message)
        })
	}
})
