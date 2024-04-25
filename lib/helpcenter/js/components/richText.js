jQuery(function () {
	if (detectPageTemplates('articles')) {
        /* Direct link - image. */
        if (getQueryParam('image-link')) {
            $('.' + getQueryParam('image-link')).click()
        }

        /* Direct link - accordion. */
        if (getQueryParam('accordion-link')) {
            $('#accordion-' + getQueryParam('accordion-link') + ' .accordion-item-title').click()
        }

		/* Accordion component. */
		$('.article-body .accordion-item-title').click(function (event) {
		    event.preventDefault()
		    let $title = $(this)
		    if ($title.parents().eq(1).hasClass('accordion-collapse-all')) {
		    	$title.parents().eq(1).find('.accordion-item-content').slideUp()
		    	if (!$title.hasClass('accordion-item-title-active')) {
		    		$title.parents().eq(1).find('.accordion-item-title').removeClass('accordion-item-title-active')
		    		$title.addClass('accordion-item-title-active')
		    		$title.siblings().slideToggle()
		    	} else {
		    		$title.parents().eq(1).find('.accordion-item-title').removeClass('accordion-item-title-active')
		    	}
		    } else {
		    	$title.toggleClass('accordion-item-title-active')
		    	$title.siblings().slideToggle()
		    }
		})

		/* Nav Tabs component. */
		$('.article-body .nav-tabs a').click(function (event) {
			event.preventDefault()
			$(this).parents().eq(1).find('li').removeClass('active')
			$(this).parents().eq(0).addClass('active')
            $($(this).attr('href')).parent().find('.tab-pane').hide()
			$($(this).attr('href')).slideToggle()
		})

        /* Load more accordion component. */
        if ($('.accordion-item').length > 2) {
            $('<span class="load-more-faq">Show more questions</span>').insertAfter('.accordion.accordion-faq')
        }
        $('.accordion-faq').each(function (i, v) {
            $(this).find('.accordion-item').each(function (index, element) {
                if (index >= 2) {
                    $(element).addClass('accordion-item-faq')
                }
            })
        })

        $('.load-more-faq').click(function () {
            $(this).prev().find('.accordion-item-faq').each(function (index, element) {
                if (index <= 1) {
                    $(this).removeClass('accordion-item-faq')
                }
            })
            if ($(this).prev().find('.accordion-item-faq').length == 0) {
                $(this).remove()
            }
        })
	}
})
