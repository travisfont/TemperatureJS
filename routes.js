route('/', function ()
{
    alert('welcome!');
});

route('/test', 'template1', function ()
{
    document.getElementById('targetText').innerHTML +="<div>Welcome to the test page!</div>";
    console.log('This is a functional test call!');
});

// https://gist.github.com/joakimbeng/7918297