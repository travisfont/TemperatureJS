function checkToggleByClassName(class_name)
{
    var chk = document.getElementsByClassName(class_name);

    for (var i = 0; i < chk.length; i++)
    {
        if (chk[i].type == 'checkbox')
        {
            if (chk[i].checked == true)
            {
                chk[i].checked = false;
            }
            else
            {
                chk[i].checked = true;
            }
        }
    }
}
