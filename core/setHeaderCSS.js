function setHeaderCSS(inline_css)
{
    css    = [];
    css[0] = inline_css;

    var headTag = document.getElementsByTagName('head')[0],
        el = document.createElement('style');

    el.type = 'text/css';
    el.textContent = css.join('\n');

    headTag.appendChild(el);
}