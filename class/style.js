var style = 
{
    changeBGColor: function (class_name, value)
    {
        var cols = document.getElementsByClassName(class_name);
        
        for (i = 0; i < cols.length; i++)
        {
            cols[i].style.backgroundColor = value;
        }
    },
    
    getById: function(id, value)
    {
        var el = document.getElementById(id);
        
        if (el.currentStyle)
        {
            //return el.currentStyle.margin;
            return el.currentStyle[value];
        }
        else if (window.getComputedStyle)
        {
            return window.getComputedStyle(el, null).getPropertyValue(value);
        }
    }
}

// style.changeBGColor('wp-wraps', 'blue);
// var margin = style.getById('your-div', 'margin');