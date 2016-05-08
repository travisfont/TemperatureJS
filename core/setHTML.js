function setHTML(content)
{
    if (document.body.innerHTML.length == 0)
    {
        document.body.innerHTML = content;
    }
    else
    {
        document.body.innerHTML += content;
    }
}