function loadScript(url, callback)
{
    // Adding the script tag to the head as suggested before
    var  head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src  = url;

        // Then bind the event to the callback function.
        // There are several events for cross browser compatibility.
        script.onreadystatechange = callback;
        script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}

var dom = document.implementation.createDocument('http://www.w3.org/1999/xhtml', 'html', null);
    dom.documentElement.setAttributeNS('http://www.w3.org/XML/1998/namespace', 'xml:lang', 'en');
    
//var body = dom.createElement("body");
var body = dom.createElementNS('http://www.w3.org/1999/xhtml', 'body');
           dom.documentElement.appendChild(body);

// set timeout is needed because document.body is created after the current continuation finishes
setTimeout(function ()
{
    loadScript('init.js', main);

}, 0);