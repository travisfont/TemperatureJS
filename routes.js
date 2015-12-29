router('/test', function()
{
    document.getElementById('targetText').innerHTML +="<div>Welcome to the test page!</div>";
    console.log('This is a functional test call!');
});

router = function (uri, callback)
{
    var regex = new RegExp(uri + '$');
    var match = regex.exec(location.pathname);

    if (match)
    {
        document.addEventListener('DOMContentLoaded', function()
        {
            callback.apply(callback, match.splice(1));
        });
    }
};