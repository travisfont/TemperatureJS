function setBase(href)
{
    var newBase = document.createElement("base");
    newBase.setAttribute("href", href);
    document.getElementsByTagName("head")[0].appendChild(newBase);
}