/*
var button = TJS.DOM.createButton(
{
    title:  'Hello', // strips html
    top:    10,
    width:  100,
    height: 50
    // style: {}
});

button.addEventListener('click', function (e)
{
   alert("You clicked the button");
});
*/

function createButton(text)
{
    var botton = document.createElement('BUTTON');  // Create a <button> element
    var text   = document.createTextNode(text);     // Create a text node

    botton.appendChild(text);                       // Append the text to <button>
    document.body.appendChild(botton);
}