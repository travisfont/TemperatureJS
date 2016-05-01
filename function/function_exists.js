function function_exists(func)
{
    return (eval('typeof '+func) === 'function' || false);
}

// returns false if a function doesn't exist:
/*
function TS1()
{
    alert('TS1');
}

alert(function_exists('TS1')); // alerts true
alert(function_exists('TS2')); // alerts false

// statement example :-p

if (function_exists('TS1'))
{
   TS1();
}
*/