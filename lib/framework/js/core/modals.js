/* add confirmation modal primary button. */
function addConfirmationModalBtn (btnClass, text) {
    sessionStorage.btnClass = btnClass
    $('#confirmation-modal .modal-footer .btn-primary').addClass(btnClass)
    $('#confirmation-modal .modal-footer .btn-primary').html(text)
}

/* Reset confirmation modal. */
function resetConfirmationModal () {
    $('#confirmation-modal .modal-title').text('Confirmation')
    $('#confirmation-modal .modal-body').html('<p class="confirmation-message"></p>')
    $('#confirmation-modal .modal-footer .btn-link').show()
    if (sessionStorage.btnClass) {
        var primaryBtnClass = sessionStorage.btnClass
        $('#confirmation-modal .modal-footer .btn-primary').removeClass(primaryBtnClass)
        $('#confirmation-modal .modal-footer .btn-primary').text('Ok')
    }
}

/* Resize modal window for small screen. */
function resizeModal () {
    $('.modal').on('shown.bs.modal', function () {
        if ($(window).width() < 768) {
	        var windowHeight = $(window).height()
	        var headerHeight = $('#confirmation-modal').find('.modal-header').height()
	        var contentHeight = $('#confirmation-modal').find('.modal-body').height()
	        var footerHeight = $('#confirmation-modal').find('.modal-footer').height()
	        var heightDiff = windowHeight - (headerHeight + contentHeight + footerHeight)
	        if (heightDiff > 0) {
	        	$('#confirmation-modal').find('.modal-body').css('height', contentHeight + heightDiff - headerHeight - 12)
	        }
        }
    })
}

jQuery(function () {
    resizeModal()
    $(window).resize(function () {
        resizeModal()
    })
})
