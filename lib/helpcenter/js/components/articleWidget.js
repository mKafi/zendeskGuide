/* Scroll to position. */
function scrollToPosition (linkID) {
    let target = linkID.replace('link-','')
    let targetOffsetTop = $('#' + target).offset().top - 100
    $('html').animate({'scrollTop': targetOffsetTop}, 300)
}

/* Generate help navigator. */
function generateHelpNavigator () {
	let output = []
    let itemCount = 0
    if ($('.article-body h3').length > 0 || $('.accordion-navigator').length > 0) {
        if ($('.article-body h3').length > 0) {
            $('.article-body h3').each(function (index, element) {
                $(element).attr('id', 'article-topic-' + itemCount)
                output.push('<li>')
                    output.push('<div id="article-topic-link-' + itemCount + '" class="topic-link">')
                        output.push($(element).text())
                    output.push('</div>')
                output.push('</li>')
                itemCount++
            })
        }
        if ($('.accordion-navigator').length > 0) {
            $('.accordion-navigator').each(function (index, element) {
                $(element).attr('id', 'article-topic-' + itemCount)
                output.push('<li>')
                    output.push('<div id="article-topic-link-' + itemCount + '" class="topic-link">')
                        output.push('FAQ')
                    output.push('</div>')
                output.push('</li>')
                itemCount++
            })
        }
        $('.help-content-widget ul').html(output.join(''))
    } else {
        $('.help-content-widget').remove()
    }
}

/* Select active topic link. */
function selectActiveTopic () {
    if ($('.help-content-widget ul li .topic-link').length > 0) {
        $('.help-content-widget ul li .topic-link').each(function (index, element) {
            let itemID = $(element).attr('id')
            itemID = itemID.replace('link-', '')
            let scrollTop = (parseInt($(document).scrollTop()) + 110)
            let itemTopOffset = parseInt($('#' + itemID).offset().top)
            if (scrollTop > itemTopOffset) {
                $('.help-content-widget ul li').removeClass('active')
                $(this).parent().addClass('active')
            }
        })
    }
}

function fixSideBarPosition () {    
    $('.article-sidebar').css({'display':'inline-block'})
    let  winWidth = parseInt($(window).width())    
    if(winWidth < 768){
        $('.article-sidebar').css({'display':'none'}) 
        return;
    }

    let scrollTop = $(document).scrollTop()
    let heightOffset = ($('.navbar.navbar-default').outerHeight())
        
    let articleContOffsetTop = parseInt($('.article-cont').offset().top)
    let articleContOuterHeight = parseInt($('.article-cont').outerHeight())
    let sidebarWidth = parseInt($('.article-sidebar').parent().eq(0).outerWidth())    
    let toFixedPos = (articleContOffsetTop - heightOffset)    
    let maxScroll = parseInt((articleContOffsetTop + articleContOuterHeight) - ($('.article-sidebar').outerHeight()))
    
    if (scrollTop > toFixedPos && scrollTop < maxScroll) {        
        $('.article-sidebar').css({
            'position': 'fixed',
            'top': heightOffset + 'px',
            'width': sidebarWidth + 'px',
            'bottom': 'unset',
        })
    } 
    else if (scrollTop > toFixedPos && scrollTop > maxScroll) {
        $('.article-sidebar').css({
            'position': 'absolute',
            'top': parseInt((articleContOuterHeight - $('.article-sidebar').outerHeight())+60)+'px',
            'bottom': 'unset',                     
            'width': '100%'
        })
    } 
    else {        
        $('.article-sidebar').css({
            'position': 'absolute',
            'top': 'inherit',                     
            'width': '100%'
        })
    }
    selectActiveTopic()
}

jQuery(function () {
    if (detectPageTemplates('articles')) {
    	generateHelpNavigator()
    	selectActiveTopic()

    	$(document).on('click', '.help-content-widget ul .topic-link', function () {
            scrollToPosition($(this).attr('id'))
        })

        if ($('.topic-link').length > 0) {
            $('.article-help-navigator h3').click(function () {
                let scrollTop = $(document).scrollTop()
            })
        }

	    $('.article-sidebar section > h3').click(function (event) {            
            $(".article-sidebar section").not($(this).parent()).removeClass('open');
            $(".article-sidebar section").not($(this).parent()).find("ul").slideUp(300);
            if($(this).parent().hasClass("open")){
                $(this).parent().removeClass("open");
                $(this).siblings("ul").slideUp(300,function(){
                    fixSideBarPosition()
                });                
            }
            else{
                $(this).parent().addClass('open');        
                $(this).siblings("ul").slideDown(300,function(){
                    fixSideBarPosition()
                });
            }
	    })

        $(document).scroll(function () {
            fixSideBarPosition()
        })

        if ($('.recent-articles ul').length > 0) {
            $('.recent-articles ul').addClass('nav nav-tabs nav-stacked-right')
        }

        /* Open first section by default. */
        if ($('.article-sidebar section:nth-child(1)').length > 0) {
            $('.article-sidebar section:nth-child(1)').addClass('open')
        }

        if ($('.section-articles-widget ul li').length == 1) {
            $('.section-articles-widget').remove()
        }        
    }
})