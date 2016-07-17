"use strict";

route('/signature', function ()
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

route('/vectors', function ()
{
    TJS.include(
        'setTitle',
        'setHTML'
    );

    setTitle('Vectors Example');
    setHTML('<canvas id="c"></canvas>');

    TJS.load('Examples/vectors.js', function ()
    {
        var stage, bd, bm, time = 0, down = false, zoom = 1, zoomX = 0, zoomY = 0;
        var w    = 400, h = 256;
        var sin  = new Uint8Array(128);

        for (var i = 0; i < 128; i++)
        {
            sin[i] = (Math.sin(2*Math.PI/128*i) * 127 + 127);
        }

        TJS.onload(function ()
        {
            stage = new Stage("c");
            bd    = BitmapData.empty(w, h, 0xff000000);

            bm        = new Bitmap(bd);
            bm.scaleX = stage.stageWidth/w;
            bm.scaleY = stage.stageHeight/h;
            stage.addChild(bm);

            stage.addEventListener(Event.ENTER_FRAME,     function(e) { drawVector(); time++;});
            stage.addEventListener(MouseEvent.MOUSE_DOWN, function(e) { down = true ;});
            stage.addEventListener(MouseEvent.MOUSE_UP  , function(e) { down = false;});
        });

        function drawVector()
        {
            var msx = bm.mouseX/w, msy = bm.mouseY/h;
            var mx  = zoomX + msx/zoom, my = zoomY + msy/zoom;

              zoom = down ? zoom*1.05 : Math.max(1, zoom/1.05);
            var xc = 1 / (w*zoom), yc = 1 / (h*zoom);

            zoomX = Math.max(0, Math.min(1-1/zoom, mx - msx/zoom));
            zoomY = Math.max(0, Math.min(1-1/zoom, my - msy/zoom));

            for (var y = 0; y < h; y++)	// rows
            {
                for (var x = 0; x < w; x++)	// columns
                {
                    var cx = -2 + 3*(zoomX + x*xc), cy = -1 + 2*(zoomY + y*yc);
                    var zx = cx, zy = cy, i=1;

                    while (zx*zx+zy*zy < 4 && ++i < 65)
                    {
                        var nzx = cx + (zx*zx - zy*zy);
                        zy = cy + 2*zx*zy;  zx = nzx;
                    }

                    var re = sin[((i << 0)+95) & 127];
                    var gr = sin[((i << 1)+0)  & 127];
                    var bl = sin[((i << 1)+40) & 127];

                    bd.setPixel(x,y,(re<<16 | gr<<8 | bl));
                }
            }
        }
    });
});

route('/test', 'template1', function ()
{
    document.getElementById('targetText').innerHTML +="<div>Welcome to the test page!</div>";
    console.log('This is a functional test call!');
});

// https://gist.github.com/joakimbeng/7918297

window.location = _href[0]+'#/';