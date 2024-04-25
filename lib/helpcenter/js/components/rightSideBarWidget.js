/**
 * 
 * @param {json object} params contains few information as 
 *      {
            'title':'', // Bar heading title
            'parent':'.right-side-container', // Parent container. Which will contain generated list. We can use # for parent css ID
            'weight':'0', //Weight value for order by js or css  
            'data': {
                'link': '', //Relative or actual link, Ex: zdBrands.main.hc.url + '/categories/...',
                'label': '', //Custom label. Ex: 'Custom label'
                'class': '', // CSS class. Ex: '.class-name' 
                'id':'', // CSS id. Ex: '#item-id
            }
        }
    @return null Nothing returning. 'parent' container will fillup with pupulated HTML
 */

function generateRightSideWeidget(params){    
    let htm = (params.title) ? '<div class="right-widget-title">'+params.title+'</div>' : ''    
    if(params.data.length > 0){
        for(let i=0; i< params.data.length; i++){
            htm += '<a id="'+params.data[i].id+'" class="'+params.data[i].class+'" href="'+params.data[i].link+'" alt="">'+params.data[i].label+'</a>'
        }
    }
    htm = '<div class="right-widget-link-cont right-widget-'+params.weight+'">'+htm+'</div>';
    
    if(params.parent){    
        if($(params.parent).length > 0){    
            $(params.parent).append(htm);
        }        
    }    
}

/**
 * This function will apply fixed position for any element. We need to supply target element class or id 
 * @param {JSON Object} params A JSON string with following format
 * {
        'parent':'.right-side-widget-cont', // Parent container which will stay in relative position       
        'afterElement':'.navbar.navbar-default', // The fixed element. Fixed right sidebar will stat at bottom of this element. Ex: fixed header
        'element':'.right-widget-link-cont', // Current element where this function will apply
        'adjustTop':'0' // Pixel amount to up/down the fixed element. Positive or negative value allowed
    } 
    @return nothing
 */
function fixRightSideBar(params){
    let offSetTop = parseInt($(params.parent).offset().top)
    let afterHeight = parseInt($(params.afterElement).outerHeight())
    let adjustTop = parseInt((params.adjustTop) ? params.adjustTop : 0)
    let toBeScroll = ((offSetTop - afterHeight) + adjustTop)
    let scrollTop = parseInt($(document).scrollTop())

    let leftContainerHeigh = parseInt($(params.leftContainer).outerHeight())
    let leftContainerOffsetTop = parseInt($(params.leftContainer).offset().top)
    let bottomLine = parseInt(leftContainerHeigh + leftContainerOffsetTop)
    let elementHeight = parseInt($(params.element).outerHeight())    
    let adjustBottom = parseInt((params.adjustBottom) ? params.adjustBottom : 0)

    let toBeMaxScroll = ((bottomLine - elementHeight) + adjustBottom)

    let position = 'relative';
    let elementTop = 'inherit'
    let elementBottom = 'inherit'
    if((scrollTop >= toBeScroll) && (scrollTop <= toBeMaxScroll)){
        position = 'fixed'
        elementTop = afterHeight+'px'
        elementBottom = 'inherit'        
    }
    else if((scrollTop >= toBeScroll) && (scrollTop > toBeMaxScroll)){
        position = 'absolute'
        elementTop = 'inherit'
        elementBottom = 0         
    } 
    $(params.element).css({
        'position':position,
        'top':elementTop,
        'bottom': elementBottom
    })
}