function setOpacity( id, opacityInt )
{
    var obj = document.getElementById(id);

    if( opacityInt > 100 ) opacityInt = 100;
    if( opacityInt < 0 ) opacityInt = 0;

    var opacityDec = opacityInt/100;

    //document.getElementById('terminal').innerHTML += id + ': ' + opacityInt + '<br />';

    if(opacityInt < 1 ) opacityInt = 1;

    obj.style.opacity = opacityDec;
    obj.style.filter = "alpha(opacity=" + opacityInt + ")";


}
function getOpacity( id )
{
    var obj = document.getElementById(id);

}

function fadeOpacity( id, fromOpacity, toOpacity, time, fps)
{
    var steps = Math.ceil(fps * (time / 1000));
    var delta = (toOpacity - fromOpacity) / steps;

    fadeOpacityStep( id, 0, steps, fromOpacity, delta, (time / steps));
}

function fadeOpacityStep( id, stepNum, steps, fromOpacity, delta, timePerStep)
{
    var opInt =  Math.round(parseInt(fromOpacity) + (delta * stepNum));
    setOpacity( id, opInt );

    if (stepNum < steps)
        setTimeout("fadeOpacityStep('" + id + "', " + (stepNum+1)
            + ", " + steps + ", " + fromOpacity + ", "
            + delta + ", " + timePerStep + ");",
            timePerStep);
    else if( opInt == 0 ) {
        document.getElementById(id).style.display = 'none';
        //document.getElementById('terminal').innerHTML += id + ': display none<br />';
    }
}

/// Hide + Show Functionality

function show( id, delay, speed )
{
    //if( document.getElementById(id).style.display == 'block' ) return;					// ADDED VER1.4

    if( delay > 0 ) {
        setTimeout( 'show(\''+id+'\',0,'+speed+')', delay );
    } else {
        var o = document.getElementById(id);
        if( o!=null ) {
            if(o.style.display == 'none' || o.style.display == '') {
                setOpacity(id,0);
                o.style.display = 'block';
            }
            fadeOpacity(id,0,100,speed,25);
        } else {
            //alert('missing element: ' + id);
        }
    }
}
function hide( id, delay, speed )
{
    if( delay > 0 )
        setTimeout( 'hide(\''+id+'\',0,'+speed+')',delay );
    else
    if( document.getElementById(id).style.display != 'none' )
        fadeOpacity( id, 100, 0, speed, 25 );
}
function nbHideToOpac( id, delay, speed, finalOpac )
{
    if( delay > 0 )
        setTimeout( 'nbHideToOpac(\''+id+'\',0,'+speed+','+finalOpac+')',delay );
    else
    if( document.getElementById(id).style.display != 'none' ) {
        fadeOpacity( id, 100, finalOpac, speed, 25 );
    }
}