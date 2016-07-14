"use strict";

route('/', function ()
{
    TJS.include(
        'setMeta',
        'setBase',
        'setTitle',
        'setHeaderCSS',
        'setHTML'
    );

    setBase('/');
    setMeta('charset', 'utf-8');
    setTitle('Signature Example');

    setHeaderCSS('canvas { width: 100vw; height: 100vh; position: fixed; top: 0; left: 0; z-index: 2; }');
    setHeaderCSS('@media (-webkit-min-device-pixel-ratio: 1.25), (min-resolution: 120dpi) { form * { font-size: 1.5em;} }');
    setHeaderCSS('body { font-family: sans-serif; padding: 1em; }');

    setHTML('<canvas> </canvas>');

    TJS.load('Examples/signature.min.js', function ()
    {
        atrament('canvas', window.innerWidth, window.innerHeight);
    });

    /*TJS.loadAfterDOM('Examples/Atrament/atrament.min.js', function ()
     {
     var atrament = atrament('canvas', window.innerWidth, window.innerHeight);
     });*/

    /*TJS.loadAfterBody(function ()
     {
     alert('test 1'); atrament('canvas', window.innerWidth, window.innerHeight);
     });*/

    //TJS.loadAfterBody("alert('test 2'); atrament('canvas', window.innerWidth, window.innerHeight);");
});

route('/test', 'template1', function ()
{
    document.getElementById('targetText').innerHTML +="<div>Welcome to the test page!</div>";
    console.log('This is a functional test call!');
});

// https://gist.github.com/joakimbeng/7918297

window.location = _href[0]+'#/';