// loads code after the DOM (page) is loaded

function loadAfterDOM(callback_fn)
{
    if (document.readyState !== 'loading')
    {
        return callback_fn();
    }
    else if (document.addEventListener)
    {
        document.addEventListener('DOMContentLoaded', callback_fn);
    }
    else
    {
        document.attachEvent('onreadystatechange', function()
        {
            if (document.readyState !== 'loading')
            {
                return callback_fn();
            }
        });
    }
}

/*
loadAfterDOM(function ()
{
    var test = document.getElementsByClassName('test');
    alert(test.length);
});
*/
