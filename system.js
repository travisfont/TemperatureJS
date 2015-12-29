function printCSS(inline_css)
{;
    css    = [];
    css[0] = inline_css;

    var headTag = document.getElementsByTagName('head')[0],
             el = document.createElement('style');

    el.type = 'text/css';
    el.textContent = css.join('\n');

    headTag.appendChild(el);
}

//---

function setTitle(title)
{
    document.title = title;
}

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

function createButton(text)
{
    var btn = document.createElement("BUTTON");  // Create a <button> element
    var t = document.createTextNode(text);       // Create a text node

    btn.appendChild(t);                         // Append the text to <button>
    document.body.appendChild(btn);
}
function createImage(){}
function createLink(){} // createLink().removeUnderline()
function createSubmitButton(){}
function createSpan(){}
function createDiv(){}

// reference: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement