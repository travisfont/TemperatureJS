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
