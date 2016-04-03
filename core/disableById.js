function disableById(id)
{
    if (document.getElementById(id))
    {
        document.getElementById(id).disabled = true;
    }
}

function enableById(id)
{
    if (document.getElementById(id))
    {
        document.getElementById(id).disabled = false;
    }
}

function triggerDisabledById(id)
{
    if (document.getElementById(id))
    {
        if (document.getElementById(id).disabled === true)
        {
            document.getElementById(id).disabled = false;
        }
        else
        {
            document.getElementById(id).disabled = true;
        }
    }
}
