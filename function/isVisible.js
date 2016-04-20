function isVisible(elem)
{
    var x = window.pageXOffset ? window.pageXOffset + window.innerWidth  - 1 : 0,
        y = window.pageYOffset ? window.pageYOffset + window.innerHeight - 1 : 0,
        relative = !!((!x && !y) || !document.elementFromPoint(x, y));
        
    function inside(child, parent)
    {
        while (child)
        {
            if (child === parent)
            {
                return true;
            }
            
            child = child.parentNode;
        }
        
        return false;
    };
    
    return function (elem)
    {
        if (document.hidden || elem.offsetWidth == 0 || elem.offsetHeight == 0 ||elem.style.visibility == 'hidden' || elem.style.display == 'none' || elem.style.opacity === 0)
        {
            return false;
        }
        
        var rect = elem.getBoundingClientRect();
        
        if (relative)
        {
            if (!inside(document.elementFromPoint(rect.left + elem.offsetWidth/2, rect.top + elem.offsetHeight/2),elem))
            {
                return false;
            }
        }
        else if(!inside(document.elementFromPoint(rect.left + elem.offsetWidth/2 + window.pageXOffset, rect.top + elem.offsetHeight/2 + window.pageYOffset), elem) ||
        (
            rect.top  + elem.offsetHeight/2 < 0 ||
            rect.left + elem.offsetWidth/2 < 0  ||
            rect.bottom - elem.offsetHeight/2 > (window.innerHeight || document.documentElement.clientHeight) ||
            rect.right  - elem.offsetWidth/2 > (window.innerWidth   || document.documentElement.clientWidth)
        )) 
        {
            return false;
        }
        if (window.getComputedStyle || elem.currentStyle)
        {
            var el   = elem,
                comp = null;
                
            while (el)
            {
                if (el === document)
                {
                    break;
                }
                else if(!el.parentNode)
                {
                    return false;
                }
                
                comp = window.getComputedStyle ? window.getComputedStyle(el, null) : el.currentStyle;
                
                if (comp && (comp.visibility == 'hidden' || comp.display == 'none' || (typeof comp.opacity !=='undefined' && comp.opacity != 1)))
                {
                    return false;
                }
                
                el = el.parentNode;
            }
        }
        
        return true;
    }
}

// checks if an object is visible
// if the document is not hidden, if an element has zero width / height / opacity or display:none / visibility:hidden in inline styles
// if the center (also because it is faster than testing every pixel / corner) of element is not hidden by other element (and all ancestors, example: overflow:hidden / scroll / one element over enother) or screen edges
// if an element has zero width / height / opacity or display:none / visibility:hidden in computed styles (among all ancestors)