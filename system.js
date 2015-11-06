function createObject(type, text)
{
    if (type == 'div')
    {
        var div = document.createElement("div");
        div.style.width = "100px";
        div.style.height = "100px";
        div.style.background = "red";
        div.style.color = "white";
        div.innerHTML = text;

        document.body.appendChild(div);
    }
}

function print_css(css)
{
    var headTag = document.getElementsByTagName('head')[0],
        el = document.createElement('style');
    el.type = 'text/css';
    el.textContent = css.join('\n');

    headTag.appendChild(el);
}

function createButton(text)
{
    var btn = document.createElement("BUTTON");        // Create a <button> element
    var t = document.createTextNode(text);       // Create a text node
    btn.appendChild(t);                                // Append the text to <button>
    document.body.appendChild(btn);
}

function setTitle(title)
{
    document.title = title;
}