function isHidden(dom_object)
{
    if ((domObj.nodeType != 1) || (dom_object == document.body))
    {
        return false;
    }
    
    if (dom_object.currentStyle && dom_object.currentStyle['display'] !== 'none' && dom_object.currentStyle['visibility'] !== 'hidden')
    {
        return isHidden(dom_object.parentNode);
    }
    else if (window.getComputedStyle)
    {
        var cs = document.defaultView.getComputedStyle(dom_object, null);
        
        if (cs.getPropertyValue('display') !== 'none' && cs.getPropertyValue('visibility') != 'hidden')
        {
            return isHidden(dom_object.parentNode);
        }
    }
    
    return true;
}

// this function requires testing
// checks if an object is hidden or not (returns true) if an object is hidden by display being none or visibility being hidden