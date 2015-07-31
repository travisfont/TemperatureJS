// Author: Travis van der Font - Version 0.0.3

var
    LIBRARY_PATH = '', // LIBRARY_PATH = 'ClausenJS/'
    DISPLAY_LIBRARY_LOAD_CONSOLE = true; // display the library was loaded in the console

// 3rd party plugins
var s =
    [
        LIBRARY_PATH + 'plugins/document.js'      // Extension of DOM library
        //LIBRARY_PATH + 'plugins/crypto-js/hmac-sha1.js',      // CryptoJS 3.1
        //LIBRARY_PATH + 'plugins/crypto-js/enc-base64-min.js'  // CryptoJS 3.1
    ];

if (s.length > 0)
{
    for (i = 0; i < s.length; i++)
    {
        load(s[i]);
    }
}

// loads json plug (for older supportive/browsers)
if (typeof JSON !== 'object')
{
    load(LIBRARY_PATH + 'plugins/json2.js');
}

/*
if (typeof browser !== 'object')
{
    load(LIBRARY_PATH + 'class/browser.js');
}
*/

// ajax autoloader
function load(url)
{
    var ajax = new XMLHttpRequest();

    ajax.open('GET', url, false);
    ajax.onreadystatechange = function ()
    {
        var script = ajax.response || ajax.responseText;
        if (ajax.readyState === 4)
        {
            switch (ajax.status)
            {
                case 200:
                    eval.apply( window, [script] );
                    if(DISPLAY_LIBRARY_LOAD_CONSOLE === true)
                    {
                        console.log("library loaded: ", url);
                    }
                    break;
                default:
                    console.log("ERROR: library not loaded: ", url);
            }
        }
    };
    ajax.send(null);
}

var TJS = TJS || {};
TJS.import = function (libary)
{
    switch (libary)
    {
        case 'Strings':
            lib = LIBRARY_PATH + 'class/string.js';
            break;
        case 'Ajax':
            lib = LIBRARY_PATH + 'class/ajax.js';
            break;
       case 'Browser':
            lib = LIBRARY_PATH + 'class/browser.js';
            break;
    }
    s.push(lib);
    load(lib);
};