// changes the set style by set type and class

function changeStyleByClass(class_name, style_type, value)
{
    var class_element = document.getElementsByClassName(class_name);

    for (i = 0; i < class_element.length; i++)
    {
        class_element[i].style.style_type = value;
        //class_element[i].style[style_type] = value;
    }
}

// changeStyleByClass('tp-mask-wrap', 'cursor', 'pointer');