function toggleFullScreen(docEl)
{
    docEl = docEl || document.documentElement;
    
    // alternative standard + current working method  s
    if ((document.fullScreenElement && document.fullScreenElement !== null) ||
        (!document.mozFullScreen && !document.webkitIsFullScreen))
    {
        if (docEl.requestFullScreen)
        {
            docEl.requestFullScreen();
        }
        else if (docEl.msRequestFullscreen)
        {
             docEl.msRequestFullscreen();
        }
        else if (docEl.mozRequestFullScreen)
        {
            docEl.mozRequestFullScreen();
        }
        else if (docEl.webkitRequestFullScreen)
        {
            docEl.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
    }
    else
    {
        if (document.cancelFullScreen)
        {
            document.cancelFullScreen();
        } 
        else if (document.exitFullscreen)
        {
            document.exitFullscreen();
        }
        else if (document.msExitFullscreen)
        {
            document.msExitFullscreen();
        }
        else if (document.mozCancelFullScreen)
        {
            document.mozCancelFullScreen();
        }
        else if (document.webkitCancelFullScreen)
        {
            document.webkitCancelFullScreen();
        }
        else if (document.webkitExitFullscreen)
        {
            document.webkitExitFullscreen();
        }
    }
}

// toggle between fullscreen mode or windowed mode