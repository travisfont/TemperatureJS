function existFunction(func)
{
    return (eval('typeof '+func) === 'function' || false);
}

// returns false if a function doesn't exist:
/*
function TS1()
{
    alert('TS1');
}

alert(existFunction('TS1')); // alerts true
alert(existFunction('TS2')); // alerts false

// statement example :-p

if (existFunction('TS1'))
{
   TS1();
}
*/