// Author: Travis van der Font - Version 0.0.5

var
    LIBRARY_PATH = '', // LIBRARY_PATH = 'ClausenJS/'
    DISPLAY_LIBRARY_LOAD_CONSOLE = true; // display the library was loaded in the console

// 3rd party plugins to automatically load
var bootloaders =
[
    LIBRARY_PATH + 'plugins/document.js'     // Extension of DOM library
    //LIBRARY_PATH + 'plugins/crypto-js/hmac-sha1.js',      // CryptoJS 3.1
    //LIBRARY_PATH + 'plugins/crypto-js/enc-base64-min.js'  // CryptoJS 3.1
];


//---

function createImage(){}
function createLink(){} // createLink().removeUnderline()
function createSubmitButton(){}
function createSpan(){}
function createDiv(){}

// reference: https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement