function setMeta(type, content)
{
    var meta = document.createElement('meta');
    meta.setAttribute(type, content);
    document.getElementsByTagName('head')[0].appendChild(meta);
}