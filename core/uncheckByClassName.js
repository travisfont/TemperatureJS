function uncheckByClassName(class_name)
{
    var chk = document.getElementsByClassName(class_name);

    for (var i = 0; i < chk.length; i++)
    {
        if (chk[i].type === 'checkbox')
        {
            chk[i].checked = false;
        }
    }
}